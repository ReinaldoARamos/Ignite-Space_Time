import { Copyright } from '@/components/copyright'
import { EmptyMemories } from '@/components/emptyMemories'
import { Hero } from '@/components/hero'
import { SignIn } from '@/components/signIn'
export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* left**/}
      <div className=" relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16 ">
        {/* blur**/}
        <div className=" absolute right-0  top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2  rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripe" />
        <SignIn />

        <Hero />

        <Copyright />
      </div>
      <EmptyMemories />
    </main>
  )
}
