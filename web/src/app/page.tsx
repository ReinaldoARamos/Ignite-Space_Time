import { User } from 'lucide-react'
import Image from 'next/image'
import NwlLogos from '../assets/nwlLogo.svg'
export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* left**/}
      <div className=" relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16 ">
        {/* blur**/}
        <div className=" absolute right-0  top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2  rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripe" />
        {/* user**/}
        <a
          href=""
          className="flex  items-center gap-3 text-left transition-colors  hover:text-gray-50"
        >
          <div className="flex  h-10  w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500 " />
          </div>
          <p className="text-small max-w-[170px] leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>
        {/* HERO**/}

        <div className="space-y-5">
          <Image src={NwlLogos} alt="" />
          <div className="spae-y-1 max-w-[420px]">
            <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p>
              colecione momentos e lembranças e (se quiser) compartilhe com o
              mundo!
            </p>
          </div>
          <a href="">CADASTRAR LEMBRANÇA</a>
        </div>
      </div>

      {/* Right**/}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registou nenhum lembrança , comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
