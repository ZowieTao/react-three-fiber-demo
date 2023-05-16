import Box3D from "~/components/Box-3D"
import Canvas from "~/components/Canvas"

async function Home() {
  return (
    <div
      style={{
        border: "1px solid red",
        background: "#000000",
      }}
    >
      <Canvas>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} />
        <Box3D position={[-3, 0, 0]} />
        <Box3D position={[3, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Home
