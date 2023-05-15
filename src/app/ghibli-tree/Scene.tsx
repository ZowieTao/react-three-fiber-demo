import { useRef, useState } from "react"
import { Color } from "three"

import { ThreeElements, useFrame } from "@react-three/fiber"

import { Trees } from "./Trees"

export function Box(props: ThreeElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += delta))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}

export default function Scene() {
  const refTrees = useRef<any>()

  useFrame(() => {
    const { current: group } = refTrees
    if (group) {
      group.rotation.x = group.rotation.y += 0.01
    }
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Trees
        ref={refTrees}
        position={[0, 0, -2]}
        colors={[
          new Color("#427062").convertLinearToSRGB(),
          new Color("#33594e").convertLinearToSRGB(),
          new Color("#234549").convertLinearToSRGB(),
          new Color("#1e363f").convertLinearToSRGB(),
        ]}
      />
    </>
  )
}
