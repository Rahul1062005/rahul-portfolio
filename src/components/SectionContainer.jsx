import { motion } from 'framer-motion'

function SectionContainer({ id, title, subtitle, children, index = 0, containerClassName = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.3) }}
      className={`glow-surface scroll-mt-24 p-6 sm:p-8 ${containerClassName}`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />

      <header className="relative mb-6">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-2 max-w-3xl text-slate-300">{subtitle}</p> : null}
      </header>

      <div className="relative">{children}</div>
    </motion.section>
  )
}

export default SectionContainer
