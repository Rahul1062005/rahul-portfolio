import SectionContainer from '../components/SectionContainer'
import { motion } from 'framer-motion'
import { getSkillVisual } from '../components/skillIcons'

function SkillsSection({ data, index }) {
  const heading = data?.heading || 'Skills'
  const rawCategories = Array.isArray(data)
    ? data
    : Array.isArray(data?.categories)
      ? data.categories
      : []
  const groupedCategories = buildCvStructuredGroups(rawCategories)

  return (
    <SectionContainer
      id="skills"
      title={heading}
      subtitle="A showcase of my technical expertise and the tools I’ve applied through projects, hands-on practice, and real-world problem solving."
      index={index}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {groupedCategories.map((category, categoryIndex) => (
          <motion.article
            key={category.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.3, delay: Math.min(categoryIndex * 0.05, 0.2) }}
            className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/45 p-5 shadow-glow backdrop-blur-md"
          >
            <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.1),transparent_64%)] opacity-60" />

            <h3 className="relative text-center font-display text-lg font-semibold text-cyan-200">{category.name}</h3>

            <ul className="relative mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {category.items?.map((item) => (
                <SkillCard key={`${category.name}-${item}`} skillName={item} categoryName={category.name} />
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionContainer>
  )
}

function SkillCard({ skillName, categoryName }) {
  const { name, Icon, colorClass } = getSkillVisual(skillName, categoryName)

  return (
    <motion.li transition={{ duration: 0.2 }}>
      <div className="relative flex h-full min-h-[96px] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 px-3 py-4 text-center backdrop-blur-sm shadow-[0_0_10px_rgba(59,130,246,0.15)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]">
        <Icon className={`relative text-2xl drop-shadow-[0_0_6px_rgba(59,130,246,0.4)] transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.55)] ${colorClass}`} />
        <p className="relative text-xs font-medium leading-snug text-slate-100 sm:text-sm">{name}</p>
      </div>
    </motion.li>
  )
}

function buildCvStructuredGroups(categories) {
  const byName = new Map(
    categories.map((category) => [
      String(category?.name || '').trim().toLowerCase(),
      Array.isArray(category?.items) ? category.items : [],
    ]),
  )

  const orderedDefinitions = [
    { name: 'Languages', sourceNames: ['languages', 'programming languages'] },
    { name: 'Frontend', sourceNames: ['frontend'] },
    { name: 'Cybersecurity', sourceNames: ['cybersecurity'] },
    { name: 'Developer Tools', sourceNames: ['developer tools'] },
    { name: 'Security Tools', sourceNames: ['security tools'] },
    { name: 'Soft Skills', sourceNames: ['soft skills', 'professional skills'] },
  ]

  return orderedDefinitions
    .map((definition) => {
      const sourceItems = definition.sourceNames.flatMap(
        (sourceName) => byName.get(sourceName) || [],
      )

      return {
        name: definition.name,
        items: sourceItems,
      }
    })
    .filter((group) => group.items.length > 0)
}

export default SkillsSection
