import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450)
    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-cyan-400/60 bg-slate-900/90 px-4 py-2 text-sm font-medium text-cyan-200 shadow-neon transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-100"
        >
          Top
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export default BackToTopButton
