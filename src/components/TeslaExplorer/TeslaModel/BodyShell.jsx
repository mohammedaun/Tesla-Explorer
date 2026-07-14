import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

export default function BodyShell() {
  const groupRef = useRef()
  const materials = useRef([])
  const { stage } = useStage()
  const { scene } = useGLTF('/models/tesla-exterior-transformed.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true
        child.castShadow = true
        materials.current.push(child.material)
      }
    })
  }, [scene])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const targetY = stage === 0 ? 0 : stage === 1 ? 1.55 : 3.4
    const targetOpacity = stage === 0 ? 1 : stage === 1 ? 0.35 : 0

    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 2.2)
    materials.current.forEach((mat) => {
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, delta * 3)
    })
  })

  return (
    <group ref={groupRef} name="Body" scale={0.01} position={[0, -0.3, 0]}>
      <primitive object={scene} />
    </group>
  )
}