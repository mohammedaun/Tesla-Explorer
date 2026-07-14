import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


export default function Frame() {
  const groupRef = useRef()

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 0, delta * 4)
  })

  return (
    <group ref={groupRef} name="Frame">
      <mesh position={[0, -0.28, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.3, 0.12, 1.9]} />
        <meshStandardMaterial color="#c7cccb" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Side rails */}
      <mesh position={[0, -0.22, 0.82]} castShadow>
        <boxGeometry args={[4.1, 0.08, 0.1]} />
        <meshStandardMaterial color="#9aa3a2" metalness={0.7} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.22, -0.82]} castShadow>
        <boxGeometry args={[4.1, 0.08, 0.1]} />
        <meshStandardMaterial color="#9aa3a2" metalness={0.7} roughness={0.35} />
      </mesh>
    </group>
  )
}
