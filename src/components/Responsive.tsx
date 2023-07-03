'use client'
import { Icon } from '@iconify/react'
import clsx from 'clsx'

interface ResponsiveProps {
  children: React.ReactNode
  mobileSize: {
    width: number
    height: number
  }
  desktopSize: {
    width: number
    height: number
  }
}

const Responsive: React.FC<ResponsiveProps> = ({ children, mobileSize, desktopSize }) => {
  const minWidth = `min-w-[${Math.min(mobileSize.width, desktopSize.width)}px]`
  const maxWidth = `max-w-[${Math.max(mobileSize.width, desktopSize.width)}px]`
  const maxHeight = `max-h-[${Math.max(mobileSize.height, desktopSize.height)}px]`

  return (
    <div className='relative flex flex-col justify-around h-screen py-8 snap-start'>
      <div className='absolute w-full top-10'>
        <h2 className='text-2xl font-bold text-center text-white'>Responsive</h2>
        <p className='text-center text-zinc-300'>Drag the bottom right corner to resize component width</p>
      </div>

      <div>
        <div className={clsx('mx-auto overflow-hidden resize-x', maxHeight, minWidth, maxWidth)}>{children}</div>
      </div>

      <div className='absolute flex items-center justify-center w-full text-zinc-200 bottom-10 animate-bounce'>
        <Icon icon='bi:chevron-down' className='w-12 h-12' />
      </div>
    </div>
  )
}

export default Responsive
