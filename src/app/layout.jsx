import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'ZuttoNime',
  description: 'Nonton anime gratis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${gabarito.className} bg-color-dark-1`} suppressHydrationWarning={true}>
    <Navbar />
      {children}
    </body>
    </html>
  )
}
