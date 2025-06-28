import GitHubSignInButton from "./_components/GitHubSignInButton";

export default async function Page({ searchParams }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const { error } = await searchParams;

    return (
        <div className="flex flex-col items-center mt-16">
            {
                error &&
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8" role="alert">
                    <span className="font-bold">Error:</span> {error}
                </div>
            }
            <h1 className="text-3xl font-bold mb-8">Sign in</h1>
            <GitHubSignInButton />
        </div >
    );
}
