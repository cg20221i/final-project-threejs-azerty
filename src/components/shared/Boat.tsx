import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/boat/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.polySurface67_CABIN_0.geometry} material={materials.CABIN} />
          <mesh geometry={nodes.polySurface67_GLASS_0.geometry} material={materials.GLASS} metalness={1} />
          <mesh geometry={nodes.polySurface70_CABIN_0.geometry} material={materials.CABIN} />
          <mesh geometry={nodes.polySurface71_CABIN_0.geometry} material={materials.CABIN} />
          <mesh geometry={nodes.polySurface72_CABIN_0.geometry} material={materials.CABIN} />
          <mesh
            geometry={nodes.polySurface73_CABIN_0.geometry}
            material={materials.CABIN}
            // material-color='aquamarine'
          />
          <group scale={[-1, 1, 1]}>
            <mesh geometry={nodes.polySurface76_CABIN_0.geometry} material={materials.CABIN} />
          </group>
          <mesh geometry={nodes.polySurface82_CABIN_0.geometry} material={materials.CABIN} />
          <group scale={[-1, 1, 1]}>
            <mesh geometry={nodes.polySurface83_CABIN_0.geometry} material={materials.CABIN} />
          </group>
          <mesh geometry={nodes.pCylinder57_BoatBody_0.geometry} material={materials.BoatBody} />
          <mesh geometry={nodes.polySurface84_CABIN_0.geometry} material={materials.CABIN} />
          <mesh geometry={nodes.polySurface85_CABIN_0.geometry} material={materials.CABIN} />
          <mesh geometry={nodes.polySurface86_CABIN_0.geometry} material={materials.CABIN} />
          <mesh geometry={nodes.polySurface87_CABIN_0.geometry} material={materials.CABIN} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
