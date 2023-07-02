import clsx from 'clsx'

import { Montserrat } from 'next/font/google'

import HomeButton from '@/components/HomeButton'

import './globals.css'

export const metadata = {
  title: 'Challenges',
  description: 'Challenges from Front End Mentor',
}

const font = Montserrat({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          'bg-zinc-800 bg-gradient-to-br from-zinc-800 via-zinc-600 to-orange-200 overflow-x-hidden',
          font.className,
        )}>
        {children}
        <HomeButton />
      </body>
    </html>
  )
}
