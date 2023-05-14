export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string }
  },
) {
  const slug = params.slug // 'a', 'b', or 'c'

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}