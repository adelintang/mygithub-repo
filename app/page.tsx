'use client';
import { useEffect, useState } from "react";
import Loading from "./loading";
import { quicksand } from "./fonts";

interface Joke {
  id?: string
  joke?: string
  status?: number
}

export default function HomePage() {
  const [joke, setJoke] = useState<Joke>({})
  const [loading, setLoading] = useState<boolean>(true)

  async function fetchRandomeJoke(search?: string) {
    setLoading(true)
    
    const response = await fetch(`https://icanhazdadjoke.com/${search ?? ''}`, {
      headers: {
        accept: 'application/json'
      }
    })
    const joke = await response.json()

    setJoke(joke)
    setLoading(false)
  }

  useEffect(() => {
    fetchRandomeJoke()
  }, [])

  return (
    loading
      ? <Loading />
      : <>
        <h1 className="text-lg font-medium mb-2">Random Joke</h1>
        <div className="flex w-full">
          <div className="bg-white rounded shadow py-4 px-6">
            <p className={`${quicksand.className} text-blue-600`}>{joke.joke}</p>
          </div>
        </div>
        <button
          type="button"
          className="inline-block mt-3 py-1 px-4 rounded bg-primary-blue hover:bg-[#224083] text-white"
          onClick={() => fetchRandomeJoke()}
        >
          generate joke
        </button>
      </>
  );
}
