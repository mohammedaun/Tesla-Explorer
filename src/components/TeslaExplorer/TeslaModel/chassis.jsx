import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useStage } from '../../../context/StageContext.jsx'

const KEEP_AT_STAGE_3 = ['Wheel', 'Chrome']

export default function Chassis() {
  const groupRef = useRef()
  const generalMaterials = useRef([])
  const hideMeshes = useRef([])
  const { stage } = useStage()
  const { scene } = useGLTF('/models/tesla-chassis-transformed.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.material.transparent = true
        generalMaterials.current.push(child.material)

        const shouldKeep = KEEP_AT_STAGE_3.some((keyword) => child.name.includes(keyword))
        if (!shouldKeep) {
          hideMeshes.current.push(child)
        }
      }
    })
  }, [scene])

  useFrame((_, delta) => {
    if (!groupRef.current) return

    const targetOpacity = stage === 0 ? 0 : 1
    generalMaterials.current.forEach((mat) => {
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, delta * 3)
    })

    const showThese = stage === 1
    hideMeshes.current.forEach((mesh) => {
      mesh.visible = showThese
    })
  })

  return (
    <group ref={groupRef} name="Chassis" scale={1} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  )
}