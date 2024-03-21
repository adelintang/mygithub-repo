import Link from "next/link"
import { FaStar, FaEye, FaCodeBranch } from "react-icons/fa"
import showFormattedDate from "../utils/showFormattedDate"

interface RepositoryProps {
  repo: IRepository
  repoName: boolean
}

export interface IRepository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: string
  forks_count: string
  watchers_count: number
  language: string
  updated_at: string
}

const Repository = ({ repo, repoName }: RepositoryProps) => {
  return (
    
    <section className="bg-white rounded py-2 px-4 shadow">
      <h3 className="text-xl font-medium mb-3">{repo.name}</h3>
      <p>{repo.description ?? 'no description'}</p>
      {
        repoName &&
        (<>
            <p className="text-slate-600 text-sm">language: {repo.language ?? 'null'}</p>
            <p className="text-slate-500 text-sm">updated: {showFormattedDate(repo.updated_at)}</p>
            <Link href={repo.html_url} target="_blank" className="underline font-medium text-blue-800 hover:text-blue-950">
              <p className="inline">repository</p>
            </Link>
          </>)
      }
      <div className="flex gap-x-8 mt-3">
        <p className="flex items-center gap-x-1">
          <FaStar className="text-yellow-500 text-lg" />
          <span>{repo.stargazers_count}</span>
        </p>
        <p className="flex items-center gap-x-1">
          <FaCodeBranch className="text-slate-500 text-lg" />
          <span>{repo.forks_count}</span>
        </p>
        <p className="flex items-center gap-x-1">
          <FaEye className="text-slate-500 text-lg" />
          <span>{repo.watchers_count}</span>
        </p>
      </div> 
    </section>
  )
}

export default Repository
