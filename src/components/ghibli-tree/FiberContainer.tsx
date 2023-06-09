import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Ground } from "./Ground"
import Scene from "./Scene"

export function FiberContainer() {
  return (
    <Canvas camera={{ position: [14.4666, 2.0365, 5.556165], fov: 40 }} shadows>
      <Scene />
      <Ground />
      <OrbitControls minDistance={1} maxDistance={200} />
    </Canvas>
  )
}
