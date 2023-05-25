import Image from 'next/image'
import NwlLogos from '../assets/nwlLogo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={NwlLogos} alt="" />
      <div className="spae-y-1 max-w-[420px]">
        <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          colecione momentos e lembranças e (se quiser) compartilhe com o mundo!
        </p>
      </div>
      <Link
        href={'http://localhost:3000/memories/new'}
        className="inline-block cursor-pointer rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
