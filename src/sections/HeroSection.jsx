import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function HeroSection({ personal, socialLinks = [] }) {
  const roles = useMemo(
    () => ['Frontend Developer', 'Security Enthusiast', 'Cybersecurity Explorer'],
    [],
  )
  const [activeRole, setActiveRole] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [isDeletingRole, setIsDeletingRole] = useState(false)

  useEffect(() => {
    const currentRole = roles[activeRole]
    const typingSpeed = 90
    const deletingSpeed = 55
    const pauseAfterTyped = 1200

    let timeoutDelay = isDeletingRole ? deletingSpeed : typingSpeed

    if (!isDeletingRole && typedRole === currentRole) {
      timeoutDelay = pauseAfterTyped
    }

    const timer = window.setTimeout(() => {
      if (!isDeletingRole) {
        if (typedRole === currentRole) {
          setIsDeletingRole(true)
          return
        }

        setTypedRole(currentRole.slice(0, typedRole.length + 1))
        return
      }

      if (typedRole.length === 0) {
        setIsDeletingRole(false)
        setActiveRole((prev) => (prev + 1) % roles.length)
        return
      }

      setTypedRole(currentRole.slice(0, typedRole.length - 1))
    }, timeoutDelay)

    return () => window.clearTimeout(timer)
  }, [activeRole, isDeletingRole, roles, typedRole])

  const heroContainer = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        staggerChildren: 0.08,
      },
    },
  }

  const heroItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  }

  const githubLink = socialLinks.find((item) =>
    String(item?.label || '').toLowerCase().includes('github'),
  )
  const linkedInLink = socialLinks.find((item) =>
    String(item?.label || '').toLowerCase().includes('linkedin'),
  )

  return (
    <section id="hero" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.h1 variants={heroItem} className="font-display leading-tight">
            <span className="block text-3xl font-medium text-slate-100 sm:text-4xl">
              Hello I&apos;m
            </span>
            <span className="block whitespace-nowrap bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
              {personal?.name}
            </span>
          </motion.h1>

          <motion.div variants={heroItem} className="min-h-[2rem] sm:min-h-[2.25rem]">
            <h2 className="text-lg font-medium text-indigo-200 sm:text-2xl">
              {typedRole}
              <span className="ml-0.5 inline-block animate-pulse text-indigo-200">|</span>
            </h2>
          </motion.div>

          <motion.p variants={heroItem} className="max-w-2xl text-base text-slate-300 sm:text-lg">
            {personal?.tagline}
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-xl border border-cyan-400/70 bg-cyan-500/20 px-5 py-2.5 text-sm font-medium text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/25 hover:shadow-neon"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-200 hover:shadow-neon"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-3">
            <a
              href="/Rahul_CV.pdf"
              download
              className="rounded-xl border border-cyan-400/70 bg-cyan-500/20 px-5 py-2.5 text-sm font-medium text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/25 hover:shadow-neon"
            >
              Download CV
            </a>

            {githubLink?.url ? (
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                href={githubLink.url}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-400/70 bg-transparent text-blue-300 shadow-[0_0_10px_rgba(99,102,241,0.15)] transition-all duration-300 ease-in-out hover:border-indigo-300 hover:bg-gradient-to-br hover:from-blue-500/80 hover:to-purple-500/80 hover:text-white hover:shadow-[0_0_18px_rgba(99,102,241,0.4)]"
              >
                <FaGithub className="text-lg" />
              </motion.a>
            ) : null}

            {linkedInLink?.url ? (
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                href={linkedInLink.url}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-400/70 bg-transparent text-blue-300 shadow-[0_0_10px_rgba(99,102,241,0.15)] transition-all duration-300 ease-in-out hover:border-indigo-300 hover:bg-gradient-to-br hover:from-blue-500/80 hover:to-purple-500/80 hover:text-white hover:shadow-[0_0_18px_rgba(99,102,241,0.4)]"
              >
                <FaLinkedin className="text-lg" />
              </motion.a>
            ) : null}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/90 bg-gradient-to-br from-slate-900 to-slate-800 p-3 shadow-neon">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_60%)]" />
            <img
              src={personal?.avatar}
              alt={personal?.name}
              className="relative aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:shadow-neon">
              <p className="text-slate-500">Location</p>
              <p className="mt-1 font-medium text-slate-100">{personal?.location}</p>
            </div>
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:shadow-neon">
              <p className="text-slate-500">Email</p>
              <p className="mt-1 truncate font-medium text-slate-100">{personal?.email}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
