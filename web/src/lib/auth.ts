import { cookies } from 'next/headers'
import decode from 'jwt-decode'
interface User {
  sub: string
  name: string
  avatar_url: string
}
export function getUser(): User {
  const token = cookies().get('token')?.value // pega o valor dos tokens recebidos de dentro dos cookies do
  // navegaor

  if (!token) {
    throw new Error('unauthenticated user')
  }
  const user: User = decode(token)

  return user
}
