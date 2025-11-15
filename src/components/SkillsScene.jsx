import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Basketball } from 'lucide-react'

const skillsList = ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Figma', 'React', 'React Native', 'Framer Motion']

export default function SkillsScene() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % skillsList.length)
    }, 1400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-full w-full relative flex items-center">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="mx-auto w-full max-w-6xl px-8 grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-5">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills</h2>
            <p className="mt-3 text-gray-600">Each score reveals another skill badge popping into view.</p>
            <div className="mt-6 flex items-center gap-3 text-gray-500">
              <Trophy size={18} />
              <span className="text-sm">Dynamic motion: ball arcs, net sways, badge appears.</span>
            </div>
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="relative h-72 bg-white/60 backdrop-blur border border-white/40 rounded-2xl shadow flex items-center justify-center overflow-hidden">
            <motion.div
              key={index}
              initial={{ y: -160, x: -140, rotate: -20 }}
              animate={{ y: [ -160, 0, -60, 0 ], x: [ -140, 0, 40, 0 ], rotate: [ -20, 10, 0, 0 ] }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-indigo-600"
            >
              <Basketball size={56} />
            </motion.div>

            <div className="absolute right-10 top-10 w-28 h-24 border-4 border-indigo-400 rounded-b-[2rem]" />

            <AnimatePresence mode="popLayout">
              <motion.div
                key={skillsList[index]}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full shadow"
              >
                {skillsList[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
