import SectionContainer from '../components/SectionContainer'

function OpenSourceSection({ data, index }) {
  const contributions = Array.isArray(data) ? data : []

  return (
    <SectionContainer id="openSource" title="Open Source Contributions" index={index}>
      <div className="grid gap-4 sm:grid-cols-2">
        {contributions.map((item, itemIndex) => (
          <article
            key={`${item.project}-${itemIndex}`}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-neon"
          >
            <h3 className="font-display text-lg text-white">{item.project}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-cyan-300 transition duration-300 hover:text-cyan-200"
              >
                View Contribution
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default OpenSourceSection
