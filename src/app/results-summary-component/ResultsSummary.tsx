import clsx from 'clsx'

import { Hanken_Grotesk } from 'next/font/google'
import Image from 'next/image'
const font = Hanken_Grotesk({
  weight: ['500', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

interface Result {
  category: string
  score: number
  icon: string
  color: string
}

interface ResultSummaryProps {
  data: Result[]
}

const ResultSummary: React.FC<ResultSummaryProps> = ({ data }) => {
  return (
    <div className={clsx('@container h-full w-full font-medium text-[18px]', font.className)}>
      <div className='w-full h-full bg-white flex flex-col @[376px]:grid @[376px]:grid-cols-2 @[376px]:rounded-3xl'>
        <div className='flex flex-col items-center text-center text-[#CAC9FF] gap-4 p-6 bg-gradient-to-b from-[#6943FF] to-[#2F2CE9] rounded-b-3xl @[376px]:rounded-3xl'>
          <div className='pb-2 text-lg @[376px]:text-2xl @[376px]:pt-3 font-bold'>Your Result</div>

          <div className='flex flex-col w-32 h-32 @[376px]:w-44 @[376px]:h-44 items-center rounded-full relative bg-gradient-to-b from-[#4d21c9] to-[#2521C9]/0 p-8'>
            <span className='absolute text-6xl @[376px]:text-7xl @[376px]:top-16 font-extrabold text-white top-6'>
              76
            </span>
            <span className='absolute bottom-3'>of 100</span>
          </div>

          <div className='mt-3 text-2xl font-bold text-white'>Great</div>

          <div className='px-12 pb-3 -mt-1 text-sm'>
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>

        <div className='flex flex-col justify-between w-full h-full gap-4 py-6 mb-3 px-9'>
          <div className='font-bold text-[#303B59]'>Summary</div>

          {data &&
            data.map(({ category, score, icon, color }: Result, ix: number) => {
              return (
                <div key={ix} className={`flex items-center font-bold justify-between p-3 rounded-lg bg-[${color}]/5`}>
                  <div className='flex items-center gap-3'>
                    <Image
                      src={`results-summary-component/${icon}`}
                      alt={category}
                      height='32'
                      width='32'
                      className='w-4 h-4'
                      priority
                    />
                    <span className={`text-[${color}]`}>{category}</span>
                  </div>
                  <div className='justify-self-end'>
                    {score} <span className='text-zinc-400'>/ 100</span>
                  </div>
                </div>
              )
            })}
          <button className='bg-[#303B59] rounded-full py-3 text-white font-bold hover:bg-gradient-to-b hover:from-[#6943FF] hover:to-[#2F2CE9]'>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultSummary

// font-medium
// font-bold
// font-extrabold
/**
 * Programatic Colors for Tailwind
 * text-[#ff5555] bg-[#ff5555]/5
 * text-[#ffb21e] bg-[#ffb21e]/5
 * text-[#00bb8f] bg-[#00bb8f]/5
 * text-[#1125d6] bg-[#1125d6]/5
 */
