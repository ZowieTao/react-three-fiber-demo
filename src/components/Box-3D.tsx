"use client"

import React, { useRef, useState } from "react"

import { ThreeElements, useFrame } from "@react-three/fiber"

export default function Box3D(props: ThreeElements["mesh"]) {
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
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
        transparent
      />
    </mesh>
  )
}
