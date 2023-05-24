import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('oi')
}

export const config = {
  matcher: '/memories/:path*',
}
