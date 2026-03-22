import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function Navbar({ name, links }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const onLinkClick = () => setOpen(false)

  const getSectionHref = (id) => (isHomePage ? `#${id}` : `/#${id}`)

  const isActive = (id) => {
    if (location.pathname === '/projects' && id === 'projects') {
      return true
    }
    if (location.pathname === '/experience' && id === 'experience') {
      return true
    }

    if (location.pathname !== '/') {
      return false
    }

    if (id === 'hero') {
      return !location.hash || location.hash === '#hero'
    }

    return location.hash === `#${id}`
  }

  const linkClassName = (id) =>
    `rounded-lg border-b border-transparent px-3 py-2.5 text-[0.95rem] font-medium transition duration-300 ${
      isActive(id)
        ? 'bg-slate-800/80 text-cyan-200 border-cyan-300/80'
        : 'text-slate-300 hover:bg-slate-800/60 hover:text-cyan-300 hover:border-cyan-400/60'
    }`

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-slate-700/80 bg-slate-950/75 shadow-[0_4px_22px_rgba(15,23,42,0.45)] backdrop-blur-xl"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href={getSectionHref('hero')} className="font-display text-xl font-semibold tracking-wide text-white">
          {name}
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-slate-700 px-3.5 py-2.5 text-sm text-slate-200 transition duration-300 hover:border-cyan-400 hover:text-cyan-300 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-3 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={getSectionHref(link.id)}
                className={linkClassName(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <ul className="mx-4 mb-4 grid max-h-[70vh] gap-1.5 overflow-y-auto rounded-xl border border-slate-700 bg-slate-900/95 p-2.5 shadow-glow lg:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={getSectionHref(link.id)}
                onClick={onLinkClick}
                className={`block rounded-lg border-b border-transparent px-3 py-2.5 text-sm font-medium transition duration-300 ${
                  isActive(link.id)
                    ? 'bg-slate-800/90 text-cyan-200 border-cyan-300/80'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-cyan-300 hover:border-cyan-400/60'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.header>
  )
}

export default Navbar
