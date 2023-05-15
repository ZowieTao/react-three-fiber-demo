import { forwardRef, useMemo } from "react"
import { DataTexture, RedFormat, Vector3 } from "three"

import { useGLTF } from "@react-three/drei"

import { GhibliShader } from "./GhibliShader"

// eslint-disable-next-line react/display-name
export const Trees = forwardRef((props: any, ref) => {
  const toneMap = useMemo(() => {
    const format = RedFormat
    const colors = new Uint8Array(4)

    for (let c = 0; c <= colors.length; c++) {
      colors[c] = (c / colors.length) * 256
    }
    const gradientMap = new DataTexture(colors, colors.length, 1, format)
    gradientMap.needsUpdate = true

    return gradientMap
  }, [])

  const { nodes } = useGLTF("/assets/glb/trees.glb")

  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: props.colors,
      },
      brightnessThresholds: {
        value: [0.6, 0.35, 0.001],
      },
      lightPosition: { value: new Vector3(15, 15, 15) },
    }),
    [props.colors],
  )

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.33, -0.05, -0.68]}
      >
        {/* <meshStandardMaterial gradientMap={toneMap} color={"#234549"} /> */}
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  )
})

useGLTF.preload("/assets/glb/trees.glb")
