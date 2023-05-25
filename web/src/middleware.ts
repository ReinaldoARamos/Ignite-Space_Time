import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect('http://localhost:3000/')
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}

// Nao permite usuário acecessar páginas caso nao haja token(deslogado)
