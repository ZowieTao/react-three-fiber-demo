"use client"

import { Suspense, useState } from "react"

import Bananas from "~/components/Bananas"
import { FadeIn, LeftMiddle } from "~/components/Styles"

export default function Banana() {
  const [speed, set] = useState(1)

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Suspense fallback={null}>
        <Bananas speed={speed} />
        <FadeIn />
      </Suspense>
      <LeftMiddle>
        <input
          type="range"
          min="0"
          max="10"
          value={speed}
          step="1"
          onChange={(e) => {
            return set(Number(e.target.value))
          }}
        />
      </LeftMiddle>
    </div>
  )
}
