import Scene from './Scene'
import { Suspense } from 'react'
import GrassProps from '../shared/GrassProps'
import { Carla, VideoText, Ground, Intro } from '@/helper/AboutUs'
import { Sky, OrbitControls, Stars, Cloud } from '@react-three/drei'

function Clouds() {
  return (
    <group>
      <Cloud depthTest={false} position={[-5, 0, -10]} speed={0.2} opacity={0.4} />
      <Cloud depthTest={false} position={[10, 3, -15]} speed={0.2} opacity={0.4} />
      <Cloud depthTest={false} position={[0, 10, 0]} speed={0.2} opacity={0.3} />
      <Cloud depthTest={false} position={[0, -10, 0]} speed={0.2} opacity={0.2} />
      <Cloud depthTest={false} position={[-5, -6, 15]} speed={0.2} opacity={0.4} />
      <Cloud depthTest={false} position={[10, 6, 10]} speed={0.2} opacity={0.25} />
    </group>
  )
}

const AboutUs = () => {
  return (
    <Scene concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 20 }}>
      {/* <color attach='background' args={['black']} /> */}
      <Sky sunPosition={[500, 150, -1000]} turbidity={0.1} />
      {/* <Stars radius={80} depth={50} count={5000} factor={10} saturation={1} fade speed={0.1} /> */}
      <fog attach='fog' args={['black', 15, 20]} />
      <Clouds />

      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          {/* <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.03, 0.03, 0.03]} /> */}

          <VideoText position={[0, 1.3, -2]} />
          {/* <Ground /> */}
          <GrassProps />
        </group>
        <ambientLight intensity={1} />
        <spotLight position={[0, 10, 0]} intensity={0.5} />
        <directionalLight position={[-50, 0, -40]} intensity={0.2} />
        <Intro />
      </Suspense>
    </Scene>
  )
}
export default AboutUs
