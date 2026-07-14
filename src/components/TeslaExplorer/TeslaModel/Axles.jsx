import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

const RUNS = [0.95, -0.95]

export default function Axles() {
  const matRefs = useRef([])
  const { stage } = useStage()

  useFrame((_, delta) => {
    const targetOpacity = stage === 0 ? 0 : 1
    matRefs.current.forEach((mat) => {
      if (!mat) return
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, delta * 3)
    })
  })

  const collect = (mat) => {
    if (mat && !matRefs.current.includes(mat)) matRefs.current.push(mat)
  }

  return (
    <group name="Axles">
      {RUNS.map((z, i) => (
        <mesh key={i} position={[0, -0.42, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.055, 0.055, 3.0, 12]} />
          <meshStandardMaterial ref={collect} color="#7d8686" metalness={0.7} roughness={0.4} transparent opacity={0} />
        </mesh>
      ))}
    </group>
  )
}
