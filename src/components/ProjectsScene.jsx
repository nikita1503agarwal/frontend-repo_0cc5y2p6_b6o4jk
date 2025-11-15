import React from 'react'
import { motion } from 'framer-motion'
import { Monitor, LampDesk, PanelTopClose } from 'lucide-react'

const Card = ({ title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.4, once: false }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="bg-white/70 backdrop-blur rounded-2xl p-5 w-64 shadow-lg border border-white/40"
  >
    <div className="flex items-center gap-2 text-indigo-600 mb-2">
      <Monitor size={18} />
      <span className="text-sm font-semibold uppercase tracking-wide">Case Study</span>
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-600 mt-1">{desc}</p>
    <button className="mt-4 text-indigo-600 hover:text-indigo-700 text-sm font-semibold">View →</button>
  </motion.div>
)

export default function ProjectsScene() {
  return (
    <div className="h-full w-full relative flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 pointer-events-none" />
      <div className="mx-auto w-full max-w-6xl grid grid-cols-12 gap-6 items-center px-8">
        <div className="col-span-12 md:col-span-5">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Selected Work</h2>
            <p className="mt-3 text-gray-600">A desk-side gallery of recent projects. Hover and tap to explore.</p>
            <div className="mt-6 flex items-center gap-3 text-gray-500">
              <LampDesk size={18} />
              <span className="text-sm">Cinematic camera gently tracks the character.</span>
            </div>
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <Card title="Fintech Dashboard" desc="High-contrast, accessible analytics experience" />
            <Card title="Travel App" desc="Itineraries with dreamy motion and rich maps" />
            <Card title="SaaS Marketing" desc="Landing with playful interactions and SSO" />
          </div>
        </div>
      </div>
    </div>
  )
}
