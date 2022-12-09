import * as THREE from 'three'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef, useMemo } from 'react'
import { Water } from 'three-stdlib'
import { OrbitControls, Sky } from '@react-three/drei'

extend({ Water })

export function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/img/waterNormal.jpg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xf06553,
      waterColor: 0x001e0f,
      distortionScale: 4.7,
      fog: true,
      format: gl.encoding,
    }),
    [waterNormals],
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}
