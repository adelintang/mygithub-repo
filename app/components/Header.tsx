import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-primary-blue text-white flex flex-col justify-center items-center gap-y-2 py-3 px-4 text-sm sm:text-base">
      <h1 className="text-lg sm:text-xl font-medium">My Github Repository</h1>
      <nav>
        <ul className="flex gap-x-6">
          <li>
            <Link className="hover:text-slate-400" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-slate-400" href="/about">About</Link>
          </li>
          <li>
            <Link className="hover:text-slate-400" href="/profile">Profile</Link>
          </li>
          <li>
            <Link className="hover:text-slate-400" href="/repository">Repository</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
