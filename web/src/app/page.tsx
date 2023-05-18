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
            <p className="text-lg leading-relaxed">
              colecione momentos e lembranças e (se quiser) compartilhe com o
              mundo!
            </p>
          </div>
          <a
            href=""
            className="inline-block cursor-pointer rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* COPY* */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💟 pela{' '}
          <a
            className="hover: text-gray-100 underline"
            href="https://www.rocketseat.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=lead&utm_term=perpetuo&utm_content=institucional-lead-home-texto-lead-brandkws-none-none-institucional-none-none-br-google&gclid=Cj0KCQjwmZejBhC_ARIsAGhCqndTMACDOtB4tJ2QduU3p1N8LzkJmPBbUNcyQs2LjhBQFYSbg_PW1gcaAg7QEALw_wcB"
            target="_blank"
            rel="noreferrer"
          >
            Rocketseat
          </a>
          🚀
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
