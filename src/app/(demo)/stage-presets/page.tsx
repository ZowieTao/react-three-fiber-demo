"use client"

// @ts-ignore
import { useControls } from "leva"

import { OrbitControls, Stage } from "@react-three/drei"

import Canvas from "~/components/Canvas"

import { Model } from "./Model"

export default function StagePresetsPage() {
  const { color } = useControls({ color: "#b13434" })

  return (
    <div className="container" style={{ background: color }}>
      <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
        <Stage
          intensity={1.5}
          environment="city"
          shadows={{ type: "accumulative", color, colorBlend: 2, opacity: 2 }}
          adjustCamera={0.9}
        >
          <Model color={color} />
          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Stage>
      </Canvas>
    </div>
  )
}
