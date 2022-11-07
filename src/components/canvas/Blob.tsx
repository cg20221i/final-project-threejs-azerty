import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'

export default function Blob({ route, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <>
      <></>
    </>
  )
}
