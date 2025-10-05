import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshDistortMaterial
            color="#d8b4fe"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={1.2}>
        <mesh position={[2.5, 1, -1]}>
          <torusGeometry args={[0.6, 0.25, 16, 50]} />
          <meshStandardMaterial
            color="#f9a8d4"
            metalness={0.3}
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.5}>
        <mesh position={[-2.2, -0.8, -0.5]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial
            color="#bfdbfe"
            metalness={0.4}
            roughness={0.2}
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
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} />
        <pointLight position={[0, 0, 3]} intensity={0.3} color="#d8b4fe" />
        
        <FloatingGeometry />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
