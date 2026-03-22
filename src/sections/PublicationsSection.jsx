import SectionContainer from '../components/SectionContainer'

function PublicationsSection({ data, index }) {
  const publications = Array.isArray(data) ? data : []

  return (
    <SectionContainer id="publications" title="Publications" index={index}>
      <div className="grid gap-4">
        {publications.map((item, itemIndex) => (
          <article
            key={`${item.title}-${itemIndex}`}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-neon"
          >
            <h3 className="font-display text-lg text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-cyan-200">{item.publisher}</p>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
              <span>{item.year}</span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 transition duration-300 hover:text-cyan-200"
                >
                  Read
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default PublicationsSection
