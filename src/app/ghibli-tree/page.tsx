"use client"

import React, { useState } from "react"

import { FiberContainer } from "./FiberContainer"

export default function Banana() {
  const [speed, set] = useState(1)

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
