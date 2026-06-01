"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.004;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1.4} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.1}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial
          color="#7dd3fc"
          emissive="#38bdf8"
          emissiveIntensity={1.2}
          roughness={0.12}
          metalness={0.65}
          distort={0.32}
          speed={2.6}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  );
}

function Ring() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x += 0.003;
    ringRef.current.rotation.y += 0.006;
  });

  return (
    <mesh ref={ringRef} rotation={[1.2, 0.4, 0]} scale={3}>
      <torusGeometry args={[1.15, 0.05, 16, 120]} />
      <meshStandardMaterial
        color="#67e8f9"
        emissive="#67e8f9"
        emissiveIntensity={1}
        roughness={0.15}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export default function HoloOrbScene() {
  return (
    <div className="h-[540px] w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-4, -3, 2]} intensity={2.5} color="#38bdf8" />
        <pointLight position={[4, 3, 2]} intensity={2.2} color="#67e8f9" />
        <Orb />
        <Ring />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}