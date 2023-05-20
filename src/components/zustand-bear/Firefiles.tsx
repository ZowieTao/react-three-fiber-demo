import * as meshline from "meshline"
import React, { useMemo, useRef } from "react"
import * as THREE from "three"

import { extend, useFrame } from "@react-three/fiber"

extend(meshline)

const r = () => {
  return Math.max(0.2, Math.random())
}

function FatLine({ curve, width, color }: { curve; width?; color }) {
  const material = useRef<any>()
  useFrame((state, delta) => {
    return (material.current.uniforms.dashOffset.value -= delta / 100)
  })

  return (
    <mesh>
      {/* @ts-ignore */}
      <meshLineGeometry points={curve} />
      {/* @ts-ignore */}
      <meshLineMaterial
        ref={material}
        transparent
        lineWidth={0.01}
        color={color}
        dashArray={0.1}
        dashRatio={0.99}
      />
    </mesh>
  )
}

export default function Fireflies({ count, colors, radius = 10 }) {
  const lines = useMemo(() => {
    return new Array(count).fill(null).map((_, index) => {
      const pos = new THREE.Vector3(
        Math.sin(0) * radius * r(),
        Math.cos(0) * radius * r(),
        0,
      )
      const points = new Array(30).fill(null).map((_, index) => {
        const angle = (index / 20) * Math.PI * 2

        return pos
          .add(
            new THREE.Vector3(
              Math.sin(angle) * radius * r(),
              Math.cos(angle) * radius * r(),
              0,
            ),
          )
          .clone()
      })
      const curve = new THREE.CatmullRomCurve3(points).getPoints(100)

      return {
        // @ts-ignore
        color: colors[parseInt(colors.length * Math.random())],
        curve,
      }
    })
  }, [count, radius, colors])

  return (
    <group position={[-radius * 2, -radius, 0]}>
      {lines.map((props, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <FatLine key={index} {...props} />
      })}
    </group>
  )
}
