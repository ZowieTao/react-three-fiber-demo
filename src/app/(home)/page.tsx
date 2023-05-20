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
        <Link href="/ghibli-tree">ghibli tree</Link>
      </Center>
      <Center>
        <Link href="/scroll-controls">scroll controls</Link>
      </Center>
      <Center>
        <Link href="/stage-presets">stage presets</Link>
      </Center>
      <Center>
        <Link href="/camera-scroll">camera scroll</Link>
      </Center>
      <Center>
        <Link href="/floating-laptop">floating laptop</Link>
      </Center>
      <Center>
        <Link href="/zustand-bear">zustand bear</Link>
      </Center>
      <Center>
        <Link href="/envmap-ground">envmap ground</Link>
      </Center>
    </Center>
  )
}

export default Home
