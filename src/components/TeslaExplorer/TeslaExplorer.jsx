import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import TeslaModel from './TeslaModel/TeslaModel.jsx'
import Podium from './Podium/Podium.jsx'
import Lighting from './Lighting/Lighting.jsx'
import CameraRig from './CameraRig/CameraRig.jsx'
import SwipeController from './SwipeController/SwipeController.jsx'
import './TeslaExplorer.css'

export default function TeslaExplorer() {
  return (
    <section className="explorer section" id="explorer">
      <motion.div
        className="explorer__heading container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">Interactive model</span>
        <h2 className="explorer__title">Take it apart, layer by layer</h2>
        <p className="explorer__subtitle">
          Drag to rotate. Use the arrows below to move through each layer.
        </p>
      </motion.div>

      <div className="explorer__stage">
        <Canvas
          shadows
          camera={{ position: [4.6, 2.4, 5.4], fov: 38 }}
          gl={{ antialias: true }}
          dpr={[1, 1.8]}
        >
          <color attach="background" args={['#b8c4c2']} />
          <fog attach="fog" args={['#b8c4c2', 10, 18]} />
          <Suspense fallback={null}>
            <Lighting />
            <Podium />
            <TeslaModel />
          </Suspense>
          <CameraRig />
        </Canvas>

        <SwipeController />
      </div>
    </section>
  )
}