'use client'
import { useState } from 'react'
import { ReactCompareSlider } from 'react-compare-slider'
import clsx from 'clsx'

import Image from 'next/image'

import Toggle from './Toggle'

interface CompareProps {
  title: string
  children: React.ReactNode
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  size: {
    width: number
    height: number
  }
}

interface SideBarProps {
  children: React.ReactNode
  className?: string
}

const SideBar: React.FC<SideBarProps> = ({ children, className }) => {
  return (
    <div className='flex items-center justify-center w-12 font-bold tracking-wider uppercase whitespace-nowrap'>
      <div className={clsx('text-white', className)}>{children}</div>
    </div>
  )
}

const Compare: React.FC<CompareProps> = ({ children, image, size, title }) => {
  const [transparent, setTransparent] = useState(true)

  const containerHeight = `h-[${image.height}px]`
  const containerWidth = `w-[${image.width}px]`
  const componentHeight = `h-[${size.height}px]`
  const componentWidth = `w-[${size.width}px]`

  return (
    <div className='relative flex flex-col justify-center h-screen py-8 snap-start'>
      <div className='absolute flex flex-col items-center w-full gap-6 top-10'>
        <h2 className='text-2xl font-bold text-center text-white'>{title}</h2>
      </div>
      <div className={clsx('flex items-center justify-center gap-2 w-full', containerHeight)}>
        <SideBar className='-rotate-90'>Design Specification</SideBar>
        <div className={clsx(containerHeight, containerWidth, 'border border-zinc-600')}>
          <ReactCompareSlider
            position={10}
            className='w-full h-full'
            itemOne={
              <div className={transparent ? 'opacity-50' : ''}>
                <Image {...image} />
              </div>
            }
            itemTwo={
              <div className={clsx(containerHeight, containerWidth, 'flex items-center justify-center ')}>
                <div className={clsx(componentWidth, componentHeight)}>{children}</div>
              </div>
            }
          />
        </div>
        <SideBar className='rotate-90'>Implementation</SideBar>
      </div>
      <div className='absolute flex items-center justify-center w-full text-zinc-200 bottom-10'>
        <Toggle value={transparent} setValue={setTransparent} label='Transparency' />
      </div>
    </div>
  )
}

export default Compare
