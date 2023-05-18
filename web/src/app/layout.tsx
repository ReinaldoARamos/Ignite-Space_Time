import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJunjamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = BaiJunjamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijamjuree',
})
export const metadata = {
  title: 'NWL SpaceTime',
  description: 'Cápsula do tempo criada usando react e next.js  ',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}  ${baijamjuree.variable}  bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
