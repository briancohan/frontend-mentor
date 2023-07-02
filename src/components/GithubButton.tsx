'use client'
import { Icon } from '@iconify/react'

const GithubButton: React.FC = () => {
    return (
        <a
            href='https://github.com/briancohan/frontend-mentor'
            target='_blank'>
            <div className='absolute items-center hidden gap-4 p-24 pb-0 text-white origin-bottom rotate-45 sm:flex-col sm:flex sm:visible -right-24 -top-24 hover:text-orange-500 aspect-square bg-zinc-800 bg-gradient-to-t from-zinc-800 to-zinc-600'>
                <Icon icon='mdi:github' className='w-12 h-12' />
                <span className='whitespace-nowrap'>View Source on Github</span>
            </div>
            <Icon icon='mdi:github' className='absolute w-12 h-12 sm:hidden top-4 right-4' />
        </a>
    )
}

export default GithubButton
