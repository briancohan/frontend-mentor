import GithubButton from '@/components/GithubButton'

import ChallengeCard from './ChallengeCard'
import data from './data.json'
export default function Home() {
  return (
    <main className='min-h-screen px-4 mx-auto max-w-7xl sm:px-4'>
      <h1 className='py-8 text-3xl font-extrabold text-zinc-300'>Frontend Mentor Challenges</h1>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {data &&
          data
            .sort((a, b) => {
              if (a.path < b.path) {
                return -1
              }
              if (a.path > b.path) {
                return 1
              }
              return 0
            })
            .map((item: any, ix: number) => <ChallengeCard key={ix} {...item} />)}
      </div>
      <GithubButton />
    </main>
  )
}
