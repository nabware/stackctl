import crypto from "crypto";

export function buildGitHubAuthUrl(): string {
    const clientId = process.env.GITHUB_CLIENT_ID;
    if (!clientId) {
        throw new Error("Missing GitHub client id.");
    }

    const redirectUri = process.env.GITHUB_REDIRECT_URI;
    if (!redirectUri) {
        throw new Error("Missing GitHub redirect uri.");
    }

    const state = crypto.randomUUID();
    const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        state,
    });

    return `https://github.com/login/oauth/authorize?${params.toString()}`;
}