import { Suspense, useEffect, useState, useRef, useMemo } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { DRACOLoader, RGBELoader } from 'three-stdlib';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const truckRef = useRef();

  const dracoLoader = new DRACOLoader;
  dracoLoader.setDecoderPath
  const truck = useGLTF('./truck/scenedraco.glb');

  const envMap = useMemo(() => useLoader(RGBELoader, '/hdri/envmap.hdr'), []);

  
  useEffect(() => {

    if (!truck || !truck.scene || !envMap) return;
    truck.scene.environment = envMap;
    truck.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.material.metalness = 0.8;
        child.material.roughness = 0.4;
        child.material.envMapIntensity = 0.1;
        child.material.needsUpdate = true;
      }
    });
  }, [truck, envMap]);

  useFrame(() => {
    if (truckRef.current) {
      truckRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={truckRef}>
      <primitive 
        object={truck.scene}
        scale={isMobile ? 0.8 : 1.2}
        position={isMobile ? [0, -3, 0] : [0, -4, 0]}
        rotation={[-0.01, 2.1, 0]}
      />
      
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      dpr={[0.9, 1]}
      camera={{position: [30, 10, 5], fov: 25 }}
      shadows
      gl={{ antialias: true, preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
          
          autoRotate 
          autoRotateSpeed={0.8} 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true} 
          rotateSpeed={0.8} 
          enableDamping={true}
          dampingFactor={0.05} /* Smooths manual rotation */
          makeDefault
        />

        {/* Lighting */}
        <spotLight position={[0, 25, 0]} intensity={30} castShadow shadow-bias={-0.0001} />
        
        {/* Environment */}
        <Environment files='/hdri/envmap.hdr' background={false} blur={0.1} rotation={[0, 0, 0]}/>

        {/* Ground Plane */}
        

        {/* 3D Model */}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;