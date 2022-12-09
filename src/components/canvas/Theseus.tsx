import { Model } from '../shared/boat'
import { Suspense } from 'react'
import { Environment, Sky, ContactShadows, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import Scene from './Scene'
import { Ocean } from '@/components/shared/Ocean'
// import { OrbitControls, Sky } from '@react-three/drei'

const Theseus = () => {
  return (
    <Scene>
      <Suspense fallback={null}>
        <Ocean />
        <spotLight angle={1} position={[-80, 200, -100]} intensity={1} />
        <Model position={[-8, 15, -2]} scale={3} rotation-y={-Math.PI / 1} />
        {/* <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={200} /> */}
      </Suspense>
      {/* <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} /> */}
      <Stars radius={80} depth={50} count={5000} factor={10} saturation={1} fade speed={0.1} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        makeDefault
      />
      <PerspectiveCamera makeDefault position={[-10, 60, 210]} fov={40} />
    </Scene>
  )
}

export default Theseus
