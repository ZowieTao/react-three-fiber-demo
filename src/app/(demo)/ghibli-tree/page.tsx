"use client"

import { FiberContainer } from "~/components/ghibli-tree/FiberContainer"

export default function Banana() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "transparent",
      }}
    >
      <FiberContainer />
    </div>
  )
}
