import { EmptyMemories } from '@/components/emptyMemories'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'
// a
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

  const memories = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">{JSON.stringify(memories)}</div>
  )
}
