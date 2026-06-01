"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function ParticleField({ count = 1200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 24;
      array[i * 3 + 1] = (Math.random() - 0.5) * 20;
      array[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }

    return array;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.032}
        sizeAttenuation
        depthWrite={false}
        opacity={0.42}
      />
    </Points>
  );
}

function FloatingMeshes() {
  const meshOne = useRef<THREE.Mesh>(null);
  const meshTwo = useRef<THREE.Mesh>(null);
  const meshThree = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (meshOne.current) {
      meshOne.current.rotation.x = t * 0.08;
      meshOne.current.rotation.y = t * 0.1;
      meshOne.current.position.y = Math.sin(t * 0.6) * 0.28;
    }

    if (meshTwo.current) {
      meshTwo.current.rotation.y = -t * 0.07;
      meshTwo.current.rotation.z = t * 0.09;
      meshTwo.current.position.x = Math.sin(t * 0.35) * 0.38;
    }

    if (meshThree.current) {
      meshThree.current.rotation.x = -t * 0.05;
      meshThree.current.rotation.y = t * 0.08;
      meshThree.current.position.y = Math.cos(t * 0.45) * 0.22;
    }
  });

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshOne} position={[-5, 2, -4]}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.28}
            transparent
            opacity={0.09}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.05} rotationIntensity={1} floatIntensity={1.1}>
        <mesh ref={meshTwo} position={[5.2, -1.6, -5]}>
          <torusKnotGeometry args={[0.85, 0.2, 180, 28]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#67e8f9"
            emissiveIntensity={0.22}
            transparent
            opacity={0.075}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={0.7} floatIntensity={1}>
        <mesh ref={meshThree} position={[0, 3.8, -6]}>
          <octahedronGeometry args={[1.15, 0]} />
          <meshStandardMaterial
            color="#7dd3fc"
            emissive="#38bdf8"
            emissiveIntensity={0.18}
            transparent
            opacity={0.06}
            wireframe
          />
        </mesh>
      </Float>
    </>
  );
}

export default function GlobalBackgroundScene() {
  const isMobile = useIsMobile();

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 52 }}
        gl={{ alpha: true, antialias: !isMobile }}
        dpr={isMobile ? [1, 1.2] : [1, 1.6]}
      >
        <ambientLight intensity={0.22} />
        <pointLight position={[0, 0, 5]} intensity={1.4} color="#7dd3fc" />
        <pointLight position={[6, 3, 2]} intensity={0.9} color="#38bdf8" />
        <pointLight position={[-6, -3, 2]} intensity={0.65} color="#67e8f9" />
        <ParticleField count={isMobile ? 650 : 1200} />
        {!isMobile}
      </Canvas>
    </div>
  );
}