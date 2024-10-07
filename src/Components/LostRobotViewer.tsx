import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { cn } from "../util/class-merge.utility";

function SpheronModel() {
  const modelRef = useRef<any>();
  const directionalLightRef = useRef<any>();
  const lostRobot = useGLTF("./Glb_Models/spheron.glb");
  useFrame(() => {
    modelRef.current.rotation.y += 0.01; // Rotación
    modelRef.current.rotation.x += 0.001; // Rotación
    directionalLightRef.current.rotation.y += 0.01;
    directionalLightRef.current.rotation.x += 0.001;
  });
  return (
    <mesh ref={modelRef}>
      <primitive
        object={lostRobot.scene}
        scale={2}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.09, 0]}
      />
      <directionalLight
        ref={directionalLightRef}
        position={[-5, -25, 25]}
        intensity={4000 * 1000}
        color={"#1C0B3F"}
      />
      <directionalLight
        ref={directionalLightRef}
        position={[5, 25, -25]}
        intensity={4000 * 12}
        color="#A047F9"
      />
    </mesh>
  );
}

function LostRobotViewer({ className }: { className?: string }) {
  return (
    <Canvas
      style={{ height: "100%" }}
      className={cn(className)}
      gl={{ alpha: true }}
    >
      {/* Suspense se usa para manejar la carga del modelo */}
      <Suspense fallback={null}>
        <ambientLight intensity={1.4} />
        <SpheronModel />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}

export default LostRobotViewer;
// "Scifi HexSphere" (https://skfb.ly/6U9XL) by Marco Zakaria is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
