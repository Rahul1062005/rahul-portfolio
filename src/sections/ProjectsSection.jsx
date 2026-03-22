import SectionContainer from '../components/SectionContainer'
import { motion } from 'framer-motion'

function ProjectsSection({ data, index }) {
  const projects = Array.isArray(data) ? data : []

  return (
    <SectionContainer
      id="projects"
      title="Projects"
      index={index}
      containerClassName="group relative transition-all duration-300 ease-in-out hover:z-10 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
    >
      <div className="-mt-1 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.name}
            transition={{ duration: 0.25 }}
            className="glow-surface card-pop-hover p-5"
          >
            <h3 className="relative font-display text-xl text-white">{project.name}</h3>
            <p className="relative mt-3 text-sm text-slate-300">{project.description}</p>

            {Array.isArray(project.stack) ? (
              <ul className="relative mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}

            {Array.isArray(project.highlights) ? (
              <ul className="relative mt-4 grid gap-2 text-sm text-slate-300">
                {project.highlights.map((item, itemIndex) => (
                  <li key={`${item.slice(0, 16)}-${itemIndex}`}>- {item}</li>
                ))}
              </ul>
            ) : null}

            <div className="relative mt-5 flex gap-3">
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
    </SectionContainer>
  )
}

export default ProjectsSection
