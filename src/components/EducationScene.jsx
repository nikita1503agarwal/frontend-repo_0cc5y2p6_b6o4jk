import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, GraduationCap } from 'lucide-react'

const Item = ({ year, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="bg-white/70 backdrop-blur rounded-xl p-4 w-64 border border-white/40 shadow"
  >
    <p className="text-xs text-gray-500">{year}</p>
    <h4 className="font-semibold text-gray-900">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </motion.div>
)

export default function EducationScene() {
  return (
    <div className="h-full w-full relative flex items-center">
      <div className="mx-auto w-full max-w-6xl px-8 grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-5">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Education</h2>
            <p className="mt-3 text-gray-600">A calm classroom vignette with notes floating in.</p>
            <div className="mt-6 flex items-center gap-3 text-gray-500">
              <BookOpen size={18} />
              <span className="text-sm">Reading motion reinforces focus and clarity.</span>
            </div>
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <Item year="2020" title="B.Des Interaction Design" desc="Focused on human-centered interfaces" />
            <Item year="2017" title="Design Bootcamp" desc="Rapid prototyping, Figma, motion" />
            <Item year="2015" title="High School" desc="Art + Computer Science track" />
          </div>
          <div className="mt-6 flex items-center gap-2 text-indigo-600">
            <GraduationCap size={18} />
            <span className="text-sm">Certified in UX Research and Prototyping</span>
          </div>
        </div>
      </div>
    </div>
  )
}
