import { buildGitHubAuthUrl } from "./_lib/build-github-auth-url";
import GitHubSignInButton from "./_components/GitHubSignInButton";

export default function Page() {
    return (
        <div className="flex flex-col items-center mt-16">
            <h1 className="text-3xl font-bold mb-8">Sign in</h1>
            <GitHubSignInButton authUrl={buildGitHubAuthUrl()} />
        </div >
    );
}
