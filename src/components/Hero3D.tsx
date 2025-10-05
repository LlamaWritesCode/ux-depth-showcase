import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <meshStandardMaterial
            color="#4169ff"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh position={[2, 1, -1]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.8}>
        <mesh position={[-2, -1, -0.5]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#4169ff"
            metalness={0.7}
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

export const Hero3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#4169ff" />
        
        <FloatingGeometry />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
