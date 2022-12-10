import Scene from './Scene'
import { Suspense } from 'react'
import GrassProps from '../shared/GrassProps'
import { Carla, VideoText, Ground, Intro } from '@/helper/AboutUs'
import { Sky, OrbitControls, Stars } from '@react-three/drei'

const AboutUs = () => {
  return (
    <Scene concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 20 }}>
      <color attach='background' args={['black']} />
      {/* <Sky azimuth={1} inclination={0.6} distance={1000} /> */}
      <Stars radius={80} depth={50} count={5000} factor={10} saturation={1} fade speed={0.1} />
      <fog attach='fog' args={['black', 15, 20]} />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.03, 0.03, 0.03]} />
          <VideoText position={[0, 1.3, -2]} />
          <Ground />
          {/* <GrassProps /> */}
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={1} />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        <Intro />
      </Suspense>
    </Scene>
  )
}
export default AboutUs
