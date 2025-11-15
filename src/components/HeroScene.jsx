import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function HeroScene() {
  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/0 to-white/20" />

      <div className="relative h-full w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-700">UI/UX Designer crafting playful, modern interfaces</p>
          <p className="mt-2 text-gray-500">Scroll right to journey through my world →</p>
        </motion.div>
      </div>
    </div>
  )
}
