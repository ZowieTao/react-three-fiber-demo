"use client"

import { Suspense, useRef } from "react"

import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import Model from "./Model"
import Overlay from "./Overlay"

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  return (
    <>
      <Canvas
        shadows
        eventSource={document.getElementById("root")}
        eventPrefix="client"
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  )
}
