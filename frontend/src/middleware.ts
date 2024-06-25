import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/')
  ) {
    return NextResponse.next()
  }

  // our logic starts from here

  let token = request.cookies.get('token')?.value // retrieve the token
  const allowedRoutes = ['/auth/login', '/auth/register'] // list of allowed paths user can visit without the token
  const isRouteAllowed = allowedRoutes.some((prefix) => pathname.startsWith(prefix)) // check path and see if matches our list then return a boolean

  // redirect to login if no token
  if (!token) {
    if (isRouteAllowed) {
      // check if path is allowed
      return NextResponse.next()
    }
    // if path is not allowed redirect to signin page
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  //redirect to home page if logged in
  if (isRouteAllowed && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}
