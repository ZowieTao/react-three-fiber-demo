import { cookies, headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

// https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode("<p>One</p>")
  await sleep(200)
  yield encoder.encode("<p>Two</p>")
  await sleep(200)
  yield encoder.encode("<p>Three</p>")
}

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const reqToken = request.cookies.get("token")

  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  const headersList = headers()
  const referer = headersList.get("referer")

  const cookieStore = cookies()
  const token = cookieStore.get("token")

  return new Response(stream)

  return new NextResponse("Hello, Next.js!", {
    status: 200,
    headers: { referer: referer, "Set-Cookie": `token=${token}` },
  })
}
