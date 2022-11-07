import * as THREE from 'three'
import React, { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'

export function Carla(props) {
  const { scene } = useGLTF('/assets/vr_thinker/scene.gltf')
  return <primitive object={scene} {...props} />
}

export function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/assets/theseusIntro.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    }),
  )
  useEffect(() => void video.play(), [video])
  return (
    <Text font='/Inter-Bold.woff' fontSize={2} letterSpacing={-0.06} {...props}>
      Barunastra
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach='map' args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}

export function Ground() {
  const [floor, normal] = useTexture(['/assets/imperfection1.webp', '/assets/normal.jpg'])
  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[10, 10]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => (
        <Material
          color='#393939'
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  )
}

export function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.3)
    state.camera.lookAt(0, 0, 0)
  })
}
