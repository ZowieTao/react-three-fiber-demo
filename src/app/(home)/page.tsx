import Link from "next/link"

async function Home() {
  return (
    <div>
      {"HOME"}

      <Link href="/login">login</Link>
    </div>
  )
}

export default Home
