import { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

import { Environment } from '@react-three/drei';

const Computers = () => {

  const truck = useGLTF('./truck/scene.gltf') 

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="gray" />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight 
        position={[0, 50, 10]} 
        angle={0.2} 
        penumbra={1} 
        intensity={1} 
        castShadow
        shadow-mapSize={1024} 
      />
      <directionalLight 
        position={[-35, 10, 5]} 
        intensity={20} 
        castShadow
      />
      <ambientLight intensity={0.5} />

      <primitive 
      object={truck.scene}
      scale={0.85}
      position={[0, -3.25, 0]}
      rotation={[-0.01, -0.3, 0]}
      
      />
    </mesh>
    
  )
}

const ComputersCanvas = () => {
  return(
    <Canvas
      frameLoop="demand"
      shadows
      camera={{position: [30, 10, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true}}>

        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2} />

        <Computers />
        
        </Suspense>
        <Environment preset="dawn" />

        <Preload all />
    </Canvas>

  )
}

export default Computers;