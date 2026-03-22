import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function DetailPageLayout({ title, subtitle, children }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
          {subtitle ? <p className="mt-2 max-w-3xl text-slate-300">{subtitle}</p> : null}
        </div>

        <motion.div whileTap={{ scale: 0.96 }}>
          <Link
            to="/#hero"
            className="inline-flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-200"
          >
            Back to Portfolio
          </Link>
        </motion.div>
      </div>

      {children}
    </main>
  )
}

export default DetailPageLayout
