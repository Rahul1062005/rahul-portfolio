import { motion } from 'framer-motion'
import DetailPageLayout from './DetailPageLayout'
import { getPortfolioData } from '../utils/portfolioData'

function ProjectsPage() {
  const { cvData } = getPortfolioData()
  const projects = Array.isArray(cvData?.sections?.projects) ? cvData.sections.projects : []

  return (
    <DetailPageLayout
      title="Projects"
      subtitle="Detailed view of selected projects, engineering choices, and links."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.name}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-glow transition duration-300 hover:border-cyan-400/60 hover:shadow-neon"
          >
            <h2 className="font-display text-xl text-white">{project.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

            {Array.isArray(project.highlights) && project.highlights.length > 0 ? (
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                {project.highlights.map((item, index) => (
                  <li key={`${project.name}-${index}`}>- {item}</li>
                ))}
              </ul>
            ) : null}

            {Array.isArray(project.stack) && project.stack.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={`${project.name}-${tech}`}
                    className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-3">
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-cyan-400/70 bg-cyan-500/20 px-3 py-1.5 text-xs font-medium text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/25"
                >
                  GitHub
                </a>
              ) : null}

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-cyan-400/70 bg-cyan-500/20 px-3 py-1.5 text-xs font-medium text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/25"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </DetailPageLayout>
  )
}

export default ProjectsPage
