import React from 'react'
import HorizontalScroller from './components/HorizontalScroller'
import HeroScene from './components/HeroScene'
import ProjectsScene from './components/ProjectsScene'
import EducationScene from './components/EducationScene'
import SkillsScene from './components/SkillsScene'
import FinalScene from './components/FinalScene'

function App() {
  return (
    <div className="h-screen w-screen bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]">
      <HorizontalScroller>
        <HeroScene />
        <ProjectsScene />
        <EducationScene />
        <SkillsScene />
        <FinalScene />
      </HorizontalScroller>
    </div>
  )
}

export default App
