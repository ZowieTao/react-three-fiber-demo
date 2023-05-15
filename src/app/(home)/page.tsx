import Link from "next/link"

import { Center } from "../../components/Styles"

async function Home() {
  return (
    <Center
      style={{
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <Center>
        <Link href="/mesh">mesh</Link>
      </Center>
      <Center>
        <Link href="/banana">banana</Link>
      </Center>
      <Center>
        <Link href="/ghibli-tree">ghibli-tree</Link>
      </Center>
    </Center>
  )
}

export default Home
