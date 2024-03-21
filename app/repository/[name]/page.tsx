import Link from "next/link"
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import Repository from "@/app/components/Repository"

interface RepositoryPageProps {
  params: {
    name: string
  }
}

async function fetchGetRepo (name: string) {
  const response = await fetch(`https://api.github.com/repos/adelintang/${name}`)
  const repo = await response.json()
  return repo
}

const RepositoryPage = async ({ params: { name } }: RepositoryPageProps) => {
  const repo = await fetchGetRepo(name)

  return (
    <>
      <h2 className="text-lg font-medium mb-2">Detail Repository</h2>
      <Repository repo={repo} repoName={true} />
      <Link href="/repository" className="inline-block mt-3 py-1 px-4 rounded bg-primary-blue hover:bg-[#224083]">
        <FaArrowAltCircleLeft className="inline-block mr-2 text-white" />
        <span className="text-white">back</span>
      </Link>
    </>
  )
}

export default RepositoryPage
