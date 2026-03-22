import SectionContainer from '../components/SectionContainer'

function PositionsSection({ data, index }) {
  const positions = Array.isArray(data) ? data : []

  return (
    <SectionContainer id="positions" title="Positions of Responsibility" index={index}>
      <div className="space-y-4">
        {positions.map((position, positionIndex) => (
          <article
            key={`${position.title}-${positionIndex}`}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-neon"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-lg text-white">{position.title}</h3>
              <p className="text-xs text-slate-400">{position.duration}</p>
            </div>
            <p className="mt-1 text-sm text-cyan-200">{position.organization}</p>
            <p className="mt-3 text-sm text-slate-300">{position.details}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default PositionsSection
