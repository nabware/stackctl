export default function GitHubSignInButton() {
    return (
        <a href="/sign-in/github"
            className="bg-black text-white font-semibold px-4 py-3 rounded flex items-center gap-3">
            <img src="/github-mark-white.png" alt="GitHub Logo" className="w-5 h-5" />
            <span>Sign in with GitHub</span>
        </a>
    );
}