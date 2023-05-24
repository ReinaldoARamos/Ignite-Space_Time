import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  // eslint-disable-next-line camelcase
  const { name, avatar_url, sub } = getUser()

  return (
    <div className="flex  items-center gap-3 text-left ">
      <Image
        // eslint-disable-next-line camelcase
        src={avatar_url}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <p className="text-small max-w-[170px] leading-snug">
        <span className="underline">{name}</span> e salve suas memórias!
      </p>
    </div>
  )
}
