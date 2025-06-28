import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
    const cookieStore = await cookies();
    const stateCookie = cookieStore.get("state");
    cookieStore.set({
        name: "state",
        value: "",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/sign-in/github",
        sameSite: "strict",
        maxAge: 0
    });
    if (!stateCookie) {
        return redirect("/sign-in?error=missing_state");
    }

    const { searchParams } = request.nextUrl;
    const receivedState = searchParams.get("state");
    if (receivedState !== stateCookie.value) {
        return redirect("/sign-in?error=state_mismatch");
    }

    const code = searchParams.get("code");
    if (!code) {
        return redirect("/sign-in?error=missing_code");
    }

    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: process.env.GITHUB_REDIRECT_URI
        }),
    });
    if (!response.ok) {
        return redirect("/sign-in?error=token_request_failure");
    }
    const { access_token, refresh_token, error } = await response.json();
    if (error) {
        return redirect(`/sign-in?error=${error}`);
    }

    redirect("/sign-in");
}
