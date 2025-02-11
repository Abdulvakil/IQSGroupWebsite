import { Suspense, useRef, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

import { Environment } from '@react-three/drei';

const Computers = ({ isMobile }) => {

  const truck = useGLTF('./truck/scene.gltf') 

  return (
    <mesh>
      
      <primitive 
      object={truck.scene}
      scale={isMobile ? 0.8 : 1.2}
      position={isMobile ? [0, -3, 0] : [0, -4, 0]}
      rotation={[-0.01, 2.1, 0]}
      
      />
      <spotLight position={[15, 5, 20]} angle={1} penumbra={1} intensity={5000} castShadow shadow-mapSize={1024} />
      <spotLight position={[-5, 5, -20]} angle={1} penumbra={1} intensity={4000} castShadow shadow-mapSize={1024} />
      <spotLight position={[-30, 0, 15]} angle={1} penumbra={1} intensity={5000} castShadow shadow-mapSize={1024} />
      <spotLight position={[20, 20, -20]} angle={1} penumbra={1} intensity={10000} castShadow shadow-mapSize={1024} />
      <ambientLight intensity={2} />

    </mesh>
    
  )
}



const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])

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
        <Computers isMobile={isMobile}/>
        
        
        </Suspense>
        

        <Preload all />
    </Canvas>

  )
}


export default ComputersCanvas;