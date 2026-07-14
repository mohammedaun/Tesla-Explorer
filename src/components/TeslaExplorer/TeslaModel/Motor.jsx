import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

export default function Motor() {
  const ref = useRef()
  const matRef = useRef()
  const { stage } = useStage()

  useFrame((_, delta) => {
    if (!ref.current) return
    const targetX = stage === 2 ? -1.15 : -1.35
    const targetOpacity = stage === 0 ? 0 : 1

    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, delta * 2.5)
    if (matRef.current) {
      matRef.current.opacity = THREE.MathUtils.lerp(matRef.current.opacity, targetOpacity, delta * 3)
    }
  })

  return (
    <mesh ref={ref} position={[-1.35, -0.32, 0]} rotation={[0, 0, Math.PI / 2]} castShadow name="Motor">
      <cylinderGeometry args={[0.26, 0.26, 0.7, 20]} />
      <meshStandardMaterial
        ref={matRef}
        color="#3a4245"
        metalness={0.8}
        roughness={0.35}
        transparent
        opacity={0}
      />
    </mesh>
  )
}
