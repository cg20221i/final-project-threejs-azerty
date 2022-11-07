import { Model } from '../shared/boat'
import { Suspense } from 'react'
import { Environment, ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Scene from './Scene'

const Theseus = () => {
  return (
    <Scene>
      <Suspense fallback={null}>
        <Environment files='/assets/002.hdr' ground={{ height: 32, radius: 130 }} />
        <spotLight angle={1} position={[-80, 200, -100]} intensity={1} />
        <Model position={[-8, 0, -2]} scale={1} rotation-y={-Math.PI / 4} />
        <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        makeDefault
      />
      <PerspectiveCamera makeDefault position={[-30, 100, 120]} fov={35} />
    </Scene>
  )
}

export default Theseus
