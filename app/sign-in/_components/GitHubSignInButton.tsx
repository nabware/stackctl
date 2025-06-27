interface GitHubSignInButtonProps {
    authUrl: string;
}

export default function GitHubSignInButton({ authUrl }: GitHubSignInButtonProps) {
    return (
        <a href={authUrl}
            className="bg-black text-white font-semibold px-4 py-3 rounded-md flex items-center gap-3">
            <img src="/github-mark-white.png" alt="GitHub Logo" className="w-5 h-5" />
            <span>Sign in with GitHub</span>
        </a>
    );
}