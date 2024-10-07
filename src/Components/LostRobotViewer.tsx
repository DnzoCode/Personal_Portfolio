import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { cn } from "../util/class-merge.utility";

function SpheronModel() {
  const lostRobot = useGLTF("./Glb_Models/spheron.glb");

  return (
    <mesh>
      <primitive
        object={lostRobot.scene}
        scale={2}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.09, 0]}
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
        <directionalLight
          position={[-5, -50, 50]}
          intensity={4000 * 120}
          color={"red"}
        />
        <directionalLight
          position={[5, 25, -25]} // Posición de la luz
          intensity={4000 * 12} // Intensidad de la luz
          color="#A047F9" // Color azul
        />
        <SpheronModel />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}

export default LostRobotViewer;
// "Scifi HexSphere" (https://skfb.ly/6U9XL) by Marco Zakaria is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
