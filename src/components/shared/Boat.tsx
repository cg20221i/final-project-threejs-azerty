import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/theseus.glb')
  const texture = useTexture('/img/rustMetal.jpg')

  return (
    <group {...props} dispose={null}>
      {/* <mesh
        geometry={nodes.Studio.geometry}
        material={nodes.Studio.material}
        position={[0.06, 0.04, -4.44]}
        scale={[-9.97, -11.14, -10.78]}
      /> */}
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.glass}
        position={[0.68, 1.34, -2.57]}
        scale={[0.25, 1.0, 0.25]}

        // material-color='green'
      >
        {/* <sphereBufferGeometry args={[1, 64, 64]} /> */}
        <meshPhysicalMaterial
          envMapIntensity={0.4}
          map={texture}
          clearcoat={0.5}
          clearcoatRoughness={5}
          roughness={0.05}
          metalness={1}
        />
      </mesh>
      {/* <mesh {...props}>
        <sphereBufferGeometry args={[1, 64, 64]} />
      </mesh> */}
      {/* <mesh geometry={nodes.Geo_Node.geometry} material={nodes.Geo_Node.material} /> */}
    </group>
  )
}

useGLTF.preload('/theseus.glb')
