import { useGLTF } from "@react-three/drei"

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Karol Miklas (https://sketchfab.com/karolmiklas)
license: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
source: https://sketchfab.com/3d-models/free-1972-datsun-240k-gt-b2303a552b444e5b8637fdf5169b41cb
title: (FREE) 1972 Datsun 240k GT
*/

export function Model({ color, ...props }: { color: string }) {
  // @ts-ignore
  const { nodes, materials } = useGLTF("/assets/glb/datsun-transformed.glb")

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_1.geometry}
        material={materials.alloy}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_2.geometry}
        material={materials.headlights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_3.geometry}
        material={materials.black_paint}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_4.geometry}
        material={materials.tire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_5.geometry}
        material={materials.black_matte}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_6.geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_7.geometry}
        material={materials.license}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_8.geometry}
        material={materials.orange_glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_9.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_10.geometry}
      >
        <meshLambertMaterial color={color} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_11.geometry}
        material={materials.red_glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_alloy_0_12.geometry}
        material={materials.stickers}
      />
    </group>
  )
}

useGLTF.preload("/assets/glb/datsun-transformed.glb")
