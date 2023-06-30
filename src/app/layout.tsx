import './globals.css'

export const metadata = {
  title: 'Challenges',
  description: 'Challenges from Front End Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
