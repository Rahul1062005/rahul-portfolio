import { motion } from 'framer-motion'
import DetailPageLayout from './DetailPageLayout'
import { getPortfolioData } from '../utils/portfolioData'

function ExperiencePage() {
  const { cvData } = getPortfolioData()
  const experience = Array.isArray(cvData?.sections?.experience) ? cvData.sections.experience : []
  const internships = Array.isArray(cvData?.sections?.internships) ? cvData.sections.internships : []
  const roles = experience.length > 0 ? experience : internships

  return (
    <DetailPageLayout
      title="Experience"
      subtitle="Role-wise contributions, impact highlights, and responsibilities."
    >
      {roles.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-300">
          Experience details are not available yet. Add entries in cvData.json under experience or internships.
        </div>
      ) : (
        <div className="grid gap-4">
          {roles.map((role, roleIndex) => (
            <motion.article
              key={`${role.role}-${roleIndex}`}
              whileHover={{ y: -6, scale: 1.005 }}
              whileTap={{ scale: 0.995 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 shadow-glow transition duration-300 hover:border-cyan-400/60 hover:shadow-neon"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-lg text-white">{role.role}</h2>
                  <p className="text-sm text-cyan-200">{role.organization}</p>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <p>{role.duration}</p>
                  <p>{role.location}</p>
                </div>
              </div>

              {role.summary ? <p className="mt-3 text-sm text-slate-300">{role.summary}</p> : null}

              {Array.isArray(role.highlights) && role.highlights.length > 0 ? (
                <ul className="mt-3 grid gap-1 text-sm text-slate-300">
                  {role.highlights.map((item, itemIndex) => (
                    <li key={`${item.slice(0, 20)}-${itemIndex}`}>- {item}</li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          ))}
        </div>
      )}
    </DetailPageLayout>
  )
}

export default ExperiencePage
