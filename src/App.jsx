import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import BackToTopButton from './components/BackToTopButton'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import { getPortfolioData } from './utils/portfolioData'

function App() {
  const location = useLocation()
  const { cvData, sections } = getPortfolioData()
  const allowedNavSectionIds = [
    'about',
    'skills',
    'projects',
    'education',
    'certifications',
    'contact',
  ]

  const sectionById = new Map(sections.map((section) => [section.id, section]))

  const navLinks = [
    { id: 'hero', label: 'Home' },
    ...allowedNavSectionIds
      .map((id) => sectionById.get(id))
      .filter(Boolean)
      .map((section) => ({ id: section.id, label: section.label })),
  ]

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617_0%,#020617_45%,#0b1120_100%)]" />
        <div className="absolute -left-16 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-10 top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <Navbar name={cvData?.personal?.name || 'Portfolio'} links={navLinks} />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${location.pathname}${location.hash}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="border-t border-slate-800/90 bg-slate-950/80 px-4 py-6 text-center text-sm text-slate-400">
        <p>Rahul Kumar • Frontend Developer • Security Enthusiast</p>
      </footer>

      <BackToTopButton />
    </div>
  )
}

export default App
