import Image from "next/image"
import Link from "next/link"
import { RiComputerLine } from "react-icons/ri"

interface IGithubProfile {
  name: string
  blog: string
  bio: string
  followers: string
  following: string
  public_repos: string
  updated_at: string
  id: number
  html_url: string
  avatar_url: string
}

async function fetchGithubProfile () {
  const response = await fetch('https://api.github.com/users/adelintang')
  const githubProfile = await response.json()
  return githubProfile
}

const ProfilePage = async () => {
  const githubProfile: IGithubProfile = await fetchGithubProfile()

  return (
    <>
      <h2 className="text-lg font-medium mb-4">Profile</h2>
      <div>
        <Image
          src={githubProfile.avatar_url}
          alt={githubProfile.name}
          width={80}
          height={80}
          className="border-2 border-solid border-slate-300 rounded-full"
        />
        <h3 className="mt-2 text-lg font-medium">{githubProfile.name}</h3>
        <Link
          href={githubProfile.html_url}
          target="_blank"
          className="inline-block font-medium text-blue-800 hover:text-blue-950"
        >
          {githubProfile.html_url.split('/').at(-1)}
        </Link>
        <p>{githubProfile.bio}</p>
        <Link
          href={githubProfile.blog}
          target="_blank"
          className="inline-block underline font-medium text-blue-800 hover:text-blue-950 mt-3"
        >
          {githubProfile.blog}
        </Link>
        <div className="flex gap-x-3">
          <span>{githubProfile.followers} follower</span>
          <span>following {githubProfile.following}</span>
          <span><RiComputerLine className="inline-block" /> {githubProfile.public_repos}</span>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
