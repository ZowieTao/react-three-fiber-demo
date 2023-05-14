import { NextResponse } from "next/server"

export const dynamic = "auto"
export const dynamicParams = true
export const revalidate = false
export const fetchCache = "auto"
export const runtime = "nodejs"
export const preferredRegion = "auto"

export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  })
  const data = await res.json()

  return NextResponse.json(data)
}

// Request Body
export async function POST(request: Request) {
  const res = await request.json()

  return NextResponse.json({ res })
}
