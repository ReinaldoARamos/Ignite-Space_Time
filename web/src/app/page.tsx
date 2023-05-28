import { EmptyMemories } from '@/components/emptyMemories'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import Image from 'next/image'
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

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="before: before: -ml-8 flex w-5 items-center gap-2 bg-gray-200 text-sm text-gray-100">
              {memory.created_at}
            </time>
            <Image src={memory.coverUrl} alt="" width={240} height={240} />
            <div>{memory.excerpt}</div>
          </div>
        )
      })}
    </div>
  )
}
