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
      blur={[500, 100]}
      resolution={512}
      args={[10, 10]}
      mirror={0.2}
      mixBlur={10}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      key={undefined}
      material={undefined}
      quaternion={undefined}
      attach={undefined}
      onUpdate={undefined}
      clear={undefined}
      position={undefined}
      up={undefined}
      scale={undefined}
      matrix={undefined}
      layers={undefined}
      dispose={undefined}
      geometry={undefined}
      raycast={undefined}
      onClick={undefined}
      onContextMenu={undefined}
      onDoubleClick={undefined}
      onPointerUp={undefined}
      onPointerDown={undefined}
      onPointerOver={undefined}
      onPointerOut={undefined}
      onPointerEnter={undefined}
      onPointerLeave={undefined}
      onPointerMove={undefined}
      onPointerMissed={undefined}
      onPointerCancel={undefined}
      onWheel={undefined}
      visible={undefined}
      type={undefined}
      id={undefined}
      uuid={undefined}
      name={undefined}
      parent={undefined}
      modelViewMatrix={undefined}
      normalMatrix={undefined}
      matrixWorld={undefined}
      matrixAutoUpdate={undefined}
      matrixWorldNeedsUpdate={undefined}
      castShadow={undefined}
      receiveShadow={undefined}
      frustumCulled={undefined}
      renderOrder={undefined}
      animations={undefined}
      userData={undefined}
      customDepthMaterial={undefined}
      customDistanceMaterial={undefined}
      isObject3D={undefined}
      onBeforeRender={undefined}
      onAfterRender={undefined}
      applyMatrix4={undefined}
      applyQuaternion={undefined}
      setRotationFromAxisAngle={undefined}
      setRotationFromEuler={undefined}
      setRotationFromMatrix={undefined}
      setRotationFromQuaternion={undefined}
      rotateOnAxis={undefined}
      rotateOnWorldAxis={undefined}
      rotateX={undefined}
      rotateY={undefined}
      rotateZ={undefined}
      translateOnAxis={undefined}
      translateX={undefined}
      translateY={undefined}
      translateZ={undefined}
      localToWorld={undefined}
      worldToLocal={undefined}
      lookAt={undefined}
      add={undefined}
      remove={undefined}
      removeFromParent={undefined}
      getObjectById={undefined}
      getObjectByName={undefined}
      getObjectByProperty={undefined}
      getWorldPosition={undefined}
      getWorldQuaternion={undefined}
      getWorldScale={undefined}
      getWorldDirection={undefined}
      traverse={undefined}
      traverseVisible={undefined}
      traverseAncestors={undefined}
      updateMatrix={undefined}
      updateMatrixWorld={undefined}
      updateWorldMatrix={undefined}
      toJSON={undefined}
      clone={undefined}
      copy={undefined}
      addEventListener={undefined}
      hasEventListener={undefined}
      removeEventListener={undefined}
      dispatchEvent={undefined}
      morphTargetInfluences={undefined}
      morphTargetDictionary={undefined}
      isMesh={undefined}
      updateMorphTargets={undefined}>
      {(Material, props) => (
        <Material
          color='#393939'
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[5, 5]}
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
