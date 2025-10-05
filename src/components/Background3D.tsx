import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedBubble = ({ position, scale, color, speed }: { 
  position: [number, number, number]; 
  scale: number; 
  color: string;
  speed: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    
    // Rotation
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.2}
        speed={1.5}
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.3}
      />
    </Sphere>
  );
};

export const Background3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
        
        {/* Cute floating bubbles */}
        <AnimatedBubble position={[-2, 1, 0]} scale={1.5} color="#fbbf24" speed={0.4} />
        <AnimatedBubble position={[3, -1, -1]} scale={1.8} color="#fb923c" speed={0.3} />
        <AnimatedBubble position={[0, 2, -2]} scale={1.2} color="#f87171" speed={0.5} />
      </Canvas>
    </div>
  );
};
