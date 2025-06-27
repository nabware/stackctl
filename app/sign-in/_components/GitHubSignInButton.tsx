export default function GitHubSignInButton() {
    return (
        <button className="bg-black text-white font-semibold px-4 py-3 rounded-md flex items-center gap-3">
            <img src="/github-mark-white.png" alt="GitHub Logo" className="w-5 h-5" />
            <span>Sign in with GitHub</span>
        </button>
    );
}