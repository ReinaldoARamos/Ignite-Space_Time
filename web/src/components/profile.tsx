import { getUser } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

export function Profile() {
  // eslint-disable-next-line camelcase
  const { name, avatar_url } = getUser()

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
      <span className="text-small max-w-[170px] leading-snug">
        <span>{name}</span>
        <p>
          <Link
            href={'/api/auth/logout'}
            className="cursor-pointer text-red-400 transition-colors hover:text-red-300"
          >
            Quero sair
          </Link>
        </p>
      </span>
    </div>
  )
}
