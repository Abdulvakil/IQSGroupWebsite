import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'
import { SoftShadows } from '@react-three/drei';

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  
  return (
    <Float speed={-.5} rotationIntensity={0.2} floatIntensity={0.05}>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 4]} intensity={5} />

      {/* Backlight (Fills the rear shadows) */}
      <pointLight position={[0, 0, -4]} intensity={3} color="#ffffff" />
      <pointLight position={[4, 0, 0]} intensity={3} color="#ffffff" />
      <pointLight position={[-4, 0, 0]} intensity={3} color="#ffffff" />
      <pointLight position={[0, 5, 0]} intensity={3} color="#ffffff" />
      <pointLight position={[0, -5, 0]} intensity={3} color="#ffffff" />


      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
        color = "#064665"
        polygonOffset
        polygonOffsetFactor={-2}
        flatShading ={true}/>
        <Decal 
        position={[0, 0, 1]}
        rotation={[2* Math.PI, 0, 6.25]}
        map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return(
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      >
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default BallCanvas