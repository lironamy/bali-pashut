import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Cookies = ({ isMobile }) => {
  const Cookie = useGLTF("./chocolate_chip_cookie_3/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={1} />
      <spotLight />
      <primitive
        object={Cookie.scene}
        scale={isMobile ? 350 : 500}
        position={isMobile ? [0, 0,-13] : [0, 0,-20]}
        rotation={isMobile ? [0, 0,0] : [0, 0,0]}
      />
    </mesh>
  );
};

const CookiesCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 35, 0], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '45vw', height: '35vh' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        
          enableZoom={false}

        />
        <Cookies isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CookiesCanvas;
