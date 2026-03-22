import SectionContainer from '../components/SectionContainer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ExperienceSection({ data, index }) {
  const roles = Array.isArray(data) ? data : []

  return (
    <SectionContainer
      id="experience"
      title={
        <Link
          to="/experience"
          className="cursor-pointer border-b border-transparent transition duration-300 hover:border-cyan-300 hover:text-cyan-200"
        >
          Experience
        </Link>
      }
      subtitle="Select the section title to open the detailed experience page."
      index={index}
    >
      <div className="space-y-4">
        {roles.map((role, roleIndex) => (
          <motion.article
            key={`${role.role}-${roleIndex}`}
            whileHover={{ y: -6, scale: 1.005 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-glow transition duration-300 hover:border-cyan-400/60 hover:shadow-neon"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-lg text-white">{role.role}</h3>
                <p className="text-sm text-cyan-200">{role.organization}</p>
              </div>
              <div className="text-right text-xs text-slate-400">
                <p>{role.duration}</p>
                <p>{role.location}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-300">{role.summary}</p>
            {Array.isArray(role.highlights) ? (
              <ul className="mt-3 grid gap-1 text-sm text-slate-300">
                {role.highlights.map((item, itemIndex) => (
                  <li key={`${item.slice(0, 14)}-${itemIndex}`}>- {item}</li>
                ))}
              </ul>
            ) : null}
          </motion.article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default ExperienceSection
