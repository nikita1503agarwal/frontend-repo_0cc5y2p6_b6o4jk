import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'

export default function FinalScene() {
  return (
    <div className="h-full w-full relative flex items-center">
      <div className="mx-auto w-full max-w-5xl px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Let’s work together</h2>
          <p className="mt-3 text-gray-600">Minimal scene. Gentle glow. Easy actions.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 mx-auto max-w-xl bg-white/70 backdrop-blur border border-white/40 rounded-2xl shadow p-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <a href="#" className="group inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors">
              <Download size={18} /> Download Resume
            </a>
            <a href="mailto:hello@example.com" className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 rounded-xl border border-gray-200">
              <Mail size={18} /> Contact Me
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">Thank you for scrolling through.</p>
        </motion.div>
      </div>
    </div>
  )
}
