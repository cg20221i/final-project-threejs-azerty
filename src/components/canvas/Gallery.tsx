import Scene from './Scene'
import { Frames, Frame } from '@/helper/frame'

import { MeshReflectorMaterial, Environment } from '@react-three/drei'

const Gallery = ({ images }) => {
  return (
    // FOV 100 kalo mobile
    <Scene dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
      <color attach='background' args={['#191920']} />
      <fog attach='fog' args={['#191920', 0, 15]} />
      <group position={[0, -0.7, 0.1]}>
        <Frames images={images} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#050505'
            metalness={0.1}
          />
        </mesh>
      </group>
      <Environment preset='city' />
    </Scene>
  )
}

export default Gallery
