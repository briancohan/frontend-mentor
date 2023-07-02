import Image from 'next/image'
import Link from 'next/link'

type language = 'html' | 'css' | 'js' | 'api'

interface ChallengeCardProps {
  title: string
  path: string
  image: string
  level: 'newbie' | 'junior' | 'intermediate' | 'advanced' | 'senior'
  languages: language[]
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, path, image, level, languages = ['html', 'css'] }) => {
  return (
    <Link href={path} className='overflow-hidden border shadow-xl rounded-3xl hover:scale-105 hover:shadow-2xl'>
      <Image src={image} alt={title} width={1440} height={1056} className='object-cover' />
      <div className='flex flex-col gap-4 p-6 bg-zinc-800 text-zinc-100'>
        <h2 className='text-xl font-bold tracking-wide text-orange-500'>{title}</h2>
        <p>
          <span className='font-semibold'>Level: </span>
          {level}
        </p>
        <p>
          <span className='font-semibold'>Tech: </span>
          <span className='uppercase'>{languages.join(', ')}</span>
        </p>
      </div>
    </Link>
  )
}

export default ChallengeCard
