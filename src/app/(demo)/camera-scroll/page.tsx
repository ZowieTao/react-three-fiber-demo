"use client"

import { Suspense, useRef, useState } from "react"

import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import useMount from "~/hooks/useMount"

import Model from "./Model"
import Overlay from "./Overlay"

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  const [rootElement, setRootElement] = useState<any>()
  useMount(() => {
    const _rootElement = document.getElementById("root")

    setRootElement(_rootElement)
  })

  return (
    <>
      <Canvas shadows eventSource={rootElement} eventPrefix="client">
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
