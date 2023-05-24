import { getUser } from '@/lib/auth'
import { User } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl, sub } = getUser()
  return (
    <div className="flex  items-center gap-3 text-left ">
      <Image
        src={avatarUrl}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <p className="text-small max-w-[170px] leading-snug">
        <span className="underline">Crie sua conta</span> e salve suas memórias!
      </p>
    </div>
  )
}
