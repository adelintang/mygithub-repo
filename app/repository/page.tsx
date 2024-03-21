import Link from "next/link"
import Repository, { IRepository } from "../components/Repository"

async function fetchRepos () {
  const response = await fetch('https://api.github.com/users/adelintang/repos')

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const repos = await response.json()
  return repos
}

const RepositoryPage = async () => {
  const repos = await fetchRepos()

  return (
    <>
      <h2 className="text-lg font-medium mb-2">Repository</h2>
      <div className="flex flex-col gap-y-1">
        {repos.map((repo: IRepository) => (
          <Link href={`/repository/${repo.name}`} key={repo.id}>
            <Repository repo={repo} repoName={false} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default RepositoryPage
