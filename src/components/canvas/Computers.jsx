import { Suspense, useEffect, useState, useRef, useMemo } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { DRACOLoader, RGBELoader } from 'three-stdlib';
import CanvasLoader from '../Loader';
import { useThree } from "@react-three/fiber";


const Computers = ({ isMobile }) => {
  const truckRef = useRef();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/draco/');

  const truck = useGLTF('./truck/lala.glb');

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
  const DisableShaderChecks = () => {
    const { gl } = useThree();
    
    useEffect(() => {
      gl.debug.checkShaderErrors = false;
    }, [gl]);
  
    return null;
  };
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
    
      frameloop="always"
  dpr={[1, 2]}
  camera={{ position: [30, 0, 5], fov: 25 }}
  shadows
  gl={{ antialias: true, preserveDrawingBuffer: false }}
    >
      <DisableShaderChecks /> {/* This disables shader checks */}
      
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
          
          

          enableZoom={false}
  enablePan={false}
  enableRotate={false}
  enabled={false}
        />

        
        
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