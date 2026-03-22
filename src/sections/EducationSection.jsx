import SectionContainer from '../components/SectionContainer'

function EducationSection({ data, index }) {
  const entries = Array.isArray(data) ? data : []

  return (
    <SectionContainer
      id="education"
      title="Education"
      index={index}
      containerClassName="relative transition-all duration-300 ease-in-out hover:z-10 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
    >
      <div className="group grid gap-4 sm:grid-cols-2">
        {entries.map((entry, entryIndex) => (
          <article
            key={`${entry.institution}-${entryIndex}`}
            className="glow-surface card-pop-hover p-4"
          >
            <h3 className="relative font-display text-lg text-white">{entry.degree}</h3>
            <p className="relative mt-1 text-sm text-cyan-200">{entry.institution}</p>
            <p className="relative mt-3 text-sm text-slate-300">{entry.duration}</p>
            {entry.score ? <p className="relative text-sm text-slate-400">{entry.score}</p> : null}
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default EducationSection
