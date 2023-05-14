import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/api/:function*",
  ],
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get("nextjs")?.value
  console.log(cookie) // => 'fast'
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next()
  response.cookies.set("vercel", "fast")

  return NextResponse.redirect(new URL("/home", request.url))
}
