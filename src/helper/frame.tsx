/* eslint-disable jsx-a11y/alt-text */
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, Text, Image } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
import { useRouter } from 'next/router'

const GOLDENRATIO = 1.61803398875

export function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref: any = useRef()
  const clicked: any = useRef()
  const [, params]: any = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.3, dt, 5)
    easing.dampQ(state.camera.quaternion, q, 0.3, dt, 5)
  })
  return (
    <group
      ref={ref}
      onClick={(e: any) => (
        e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name)
      )}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url} linkTo={props.pages} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

export function Frame({ url, linkTo, c = new THREE.Color(), ...props }) {
  const image: any = useRef()
  const frame: any = useRef()
  const buttonMesh: any = useRef()
  const [, params]: any = useRoute('/item/:id')
  const router = useRouter()
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(url)
  const isActive = params?.id === name
  const [pageClicked, setPage] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => {
    image.current.material.zoom = 1 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 5
    easing.damp3(
      image.current.scale,
      [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1],
      0.1,
      dt,
      5,
    )
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt, 5)
    easing.damp3(
      buttonMesh.current.scale,
      [0.85 * (isActive || hovered ? 0.2 : 0), 0.9 * (isActive || hovered ? 0.4 : 0), 0.1],
      0.1,
      dt,
      5,
    )
    // easing.damp3(frame.current.scale,[] )
  })
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1.2, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color='#151515' metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} scale={1} />
      </mesh>
      <mesh
        onClick={() => {
          router.push(linkTo)
          setPage(!pageClicked)
        }}
        ref={buttonMesh}
        position={[0, 0.6, 0.2]}
        scale={[0.2, 0.1, 0.1]}>
        <boxGeometry />
        <meshStandardMaterial color='#c28802' metalness={1} roughness={0.07} envMapIntensity={6} />
      </mesh>
      <Text maxWidth={1} anchorX='center' anchorY='top' position={[0, 1.75, 0]} fontSize={0.125} strokeWidth={20}>
        {linkTo.replace('/', '').charAt(0).toUpperCase() + linkTo.slice(2)}
      </Text>
    </group>
  )
}
