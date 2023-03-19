import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Cake = () => {
  const cake = useGLTF("./cake_-pink/scene.gltf");

  return (
    <primitive object={cake.scene} scale={17} position-y={0} rotation-y={0} />
    
  );
};

const CakeCanvas = () => {
    
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 1,
        far: 50,
        position: [-6, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cake />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CakeCanvas;
