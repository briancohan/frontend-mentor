import clsx from 'clsx'

import { DynaPuff as Font } from 'next/font/google'

import GithubButton from '@/components/GithubButton'

import ChallengeCard from './ChallengeCard'
import data from './data.json'

const font = Font({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
})

const ReactComment = ({ text }: { text: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />
}

export default function Home() {
  return (
    <main className='min-h-screen px-4 mx-auto max-w-7xl sm:px-4'>
      <h1 className={clsx('pt-8 pb-28 text-5xl font-extrabold ease-in-out relative', font.className)}>
        <ReactComment text='Mimmicing screen burn in from old CRT TVs' />
        <span className='absolute px-3 py-1 origin-top-right bg-transparent bg-clip-text blur-sm -rotate-3'>
          Frontend Mentor Challenges
        </span>
        <span className='absolute px-3 py-1 text-transparent transition-transform duration-300 origin-top-right bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 -rotate-3 hover:rotate-0 to-blue-500'>
          Frontend Mentor Challenges
        </span>
      </h1>
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
