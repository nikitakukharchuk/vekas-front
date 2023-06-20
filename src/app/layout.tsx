import '../styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'VEKAS',
  description: 'VEKAS site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
