import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';


const milestones = [
  { time: '2010', detail: 'Started my first job', position: [0, 0, -20] },
  { time: '2012', detail: 'Promoted to manager', position: [0, 0, -40] },
  { time: '2015', detail: 'Launched my own startup', position: [0, 0, -60] },
  { time: '2018', detail: 'Sold my startup', position: [0, 0, -80] },
  { time: '2021', detail: 'Joined a Fortune 500 company', position: [0, 0, -100] },
  { time: '2023', detail: 'Became a CTO', position: [0, 0, -120] },
];

const Road = () => {
  return (
    <mesh position={[0, -1, 0]}>
      <planeGeometry args={[10, 200]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

const Car = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const Milestone = ({ position, detail }) => {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
        <Html distanceFactor={10} position={[1.5, 0, 0]}>
          {/* Ensure no block-level elements like <div> are directly nested */}
          <span>{detail}</span>
        </Html>
      </mesh>
    );
  };
  

const Journey = () => {
    const carRef = useRef();
    const [carPosition, setCarPosition] = useState([0, 0.25, 0]);
  
    useFrame(() => {
      setCarPosition((prev) => {
        if (prev[2] > -120) return [prev[0], prev[1], prev[2] - 0.1];
        return prev;
      });
    });
  
    return (
      <div className="h-screen">
        <Canvas camera={{ position: [0, 5, 10] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} />
          <OrbitControls />
          <Road />
          <Car position={carPosition} ref={carRef} />
          {milestones.map((milestone, index) => (
            <Milestone
              key={index}
              position={milestone.position}
              detail={milestone.detail}
            />
          ))}
        </Canvas>
      </div>
    );
  };
  
  export default Journey;