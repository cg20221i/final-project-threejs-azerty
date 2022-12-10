import { Model } from '@/components/shared/Boat'
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
        <spotLight angle={1} position={[80, 200, -100]} intensity={1} />
        <Model position={[-8, 15, -2]} scale={3} rotation-y={-Math.PI / 1} />
        {/* <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={200} /> */}
      </Suspense>
      <Sky sunPosition={[500, 150, -1000]} turbidity={0.1} />
      {/* <Stars radius={80} depth={50} count={5000} factor={10} saturation={1} fade speed={0.1} /> */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        makeDefault
      />
      <PerspectiveCamera
        makeDefault
        position={[-10, 60, 210]}
        fov={40}
        key={undefined}
        view={undefined}
        quaternion={undefined}
        attach={undefined}
        args={undefined}
        onUpdate={undefined}
        clear={undefined}
        up={undefined}
        scale={undefined}
        rotation={undefined}
        matrix={undefined}
        layers={undefined}
        dispose={undefined}
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
        zoom={undefined}
        matrixWorldInverse={undefined}
        projectionMatrix={undefined}
        projectionMatrixInverse={undefined}
        isCamera={undefined}
        near={undefined}
        far={undefined}
        isPerspectiveCamera={undefined}
        aspect={undefined}
        focus={undefined}
        filmGauge={undefined}
        filmOffset={undefined}
        setFocalLength={undefined}
        getFocalLength={undefined}
        getEffectiveFOV={undefined}
        getFilmWidth={undefined}
        getFilmHeight={undefined}
        setViewOffset={undefined}
        clearViewOffset={undefined}
        updateProjectionMatrix={undefined}
        setLens={undefined}
      />
    </Scene>
  )
}

export default Theseus
