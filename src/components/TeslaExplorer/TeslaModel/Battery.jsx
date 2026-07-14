import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

export default function Battery() {
  const ref = useRef()
  const matRef = useRef()
  const { stage } = useStage()

  useFrame((_, delta) => {
    if (!ref.current) return
    const targetY = stage === 0 ? -0.5 : -0.36
    const targetOpacity = stage === 0 ? 0 : 1

    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, delta * 2.5)
    if (matRef.current) {
      matRef.current.opacity = THREE.MathUtils.lerp(matRef.current.opacity, targetOpacity, delta * 3)
    }
  })

  return (
    <mesh ref={ref} position={[0, -0.5, 0]} castShadow receiveShadow name="Battery">
      <boxGeometry args={[3.5, 0.14, 1.55]} />
      <meshStandardMaterial
        ref={matRef}
        color="#009faf"
        emissive="#009faf"
        emissiveIntensity={0.15}
        metalness={0.5}
        roughness={0.3}
        transparent
        opacity={0}
      />
    </mesh>
  )
}
