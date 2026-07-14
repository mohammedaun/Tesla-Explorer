import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

export default function Windows() {
  const ref = useRef()
  const matRef = useRef()
  const { stage } = useStage()

  useFrame((_, delta) => {
    if (!ref.current) return
    const targetY = stage === 0 ? 0.78 : stage === 1 ? 2.35 : 4.1
    const targetOpacity = stage === 0 ? 0.55 : stage === 1 ? 0.25 : 0

    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, delta * 2.6)
    if (matRef.current) {
      matRef.current.opacity = THREE.MathUtils.lerp(matRef.current.opacity, targetOpacity, delta * 3)
    }
  })

  return (
    <mesh ref={ref} position={[-0.1, 0.78, 0]} castShadow>
      <boxGeometry args={[1.95, 0.06, 1.42]} />
      <meshPhysicalMaterial
        ref={matRef}
        color="#bcd8de"
        metalness={0.1}
        roughness={0.05}
        transmission={0.6}
        transparent
        opacity={0.55}
      />
    </mesh>
  )
}
