import { EmptyMemories } from '@/components/emptyMemories'
import { api } from '@/lib/api'
import { ArrowRight } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  created_at: string
}
export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }
  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  console.log(memories)
  if (memories.length === 0) {
    return <EmptyMemories />
  }
  // width={900} height={298}
  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="before: before: -ml-8 flex w-5 items-center gap-2 bg-gray-200 text-sm text-gray-100">
              {memory.created_at}
            </time>
            <Image
              src={memory.coverUrl}
              alt=""
              width={592}
              height={298}
              className="aspect-video w-full rounded-lg object-cover"
            />
            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>
            <Link
              href={`/memories/${memory.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              <ArrowRight className="h4 w-4" />
              Ler mais
            </Link>
          </div>
        )
      })}
    </div>
  )
}
