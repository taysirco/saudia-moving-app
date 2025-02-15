import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export default withAuth(
  function middleware(req) {
    const isAuthenticated = !!req.nextauth.token
    const isAdminRoute = req.nextUrl.pathname.startsWith('/ads')
    const isAdmin = req.nextauth.token?.role === 'admin'

    if (isAdminRoute && !isAuthenticated) {
      return NextResponse.redirect(new URL('/auth/signin', req.url))
    }

    if (isAdminRoute && !isAdmin) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
    pages: {
      signIn: '/auth/signin',
    }
  }
)

export const config = {
  matcher: [
    '/ads/:path*'
  ]
}

export function middleware(request: NextRequest) {
  // إضافة هيدرز الأمان
  const headers = new Headers(request.headers)
  headers.set('X-Robots-Tag', 'index, follow')
  headers.set('X-Content-Type-Options', 'nosniff')
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
} 