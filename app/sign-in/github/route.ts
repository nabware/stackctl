import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const redirectUri = process.env.GITHUB_REDIRECT_URI;
    if (!clientId || !redirectUri) {
        throw new Error("Invalid GitHub configuration.");
    }

    const state = crypto.randomUUID();
    const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        state,
    });

    const cookieStore = await cookies();
    cookieStore.set({
        name: "state",
        value: state,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/sign-in/github",
        sameSite: "strict",
        maxAge: 300
    });

    redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
}
