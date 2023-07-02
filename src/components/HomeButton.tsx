'use client'
import { Icon } from '@iconify/react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HomeButton: React.FC = () => {
  const pathname = usePathname()

  if (pathname === '/') return <></>

  return (
    <Link href='/'>
      <button
        type='button'
        className='fixed p-2 rounded-full shadow-sm text-zinc-800 bg-zinc-200 top-4 left-4 hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600'>
        <Icon icon='ic:outline-home' className='w-6 h-6' />
      </button>
    </Link>
  )
}

export default HomeButton
