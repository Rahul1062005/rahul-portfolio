import SectionContainer from '../components/SectionContainer'

function AboutSection({ data, index }) {
  const heading = data?.heading || 'About'
  const MAX_HIGHLIGHTS = 3
  const defaultParagraphs = [
    'Building responsive web interfaces with **React** and modern JavaScript, I focus on delivering products that feel fast, intuitive, and production-ready.',
    'Designing clean frontend architecture and optimizing interaction flows, I convert complex requirements into maintainable components with measurable user impact.',
    'Applying a **security-first mindset**, I strengthen application reliability through thoughtful validation, safer coding patterns, and continuous technical improvement.',
  ]
  const defaultHighlights = [
    'Developing polished, responsive frontend experiences using React.js and Next.js',
    'Optimizing UX and performance through clean component design and structured problem-solving',
    'Building practical projects that combine usability with engineering discipline',
    'Adapting quickly to new tools and technologies with a strong continuous-learning mindset',
  ]

  const paragraphs =
    typeof data === 'string'
      ? [data]
      : Array.isArray(data?.paragraphs)
        ? data.paragraphs
        : defaultParagraphs

  const highlights =
    Array.isArray(data?.highlights) && data.highlights.length > 0
      ? data.highlights
      : defaultHighlights
  const prioritizedHighlights = highlights.slice(0, MAX_HIGHLIGHTS)

  return (
    <SectionContainer id="about" title={heading} index={index}>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div className="space-y-4 text-slate-300">
          {paragraphs.map((paragraph, paragraphIndex) => (
            <p key={`${paragraph.slice(0, 16)}-${paragraphIndex}`} className="leading-relaxed">
              {renderWithEmphasis(paragraph)}
            </p>
          ))}
        </div>

        {prioritizedHighlights.length > 0 ? (
          <ul className="grid content-start gap-3 lg:self-center">
            {prioritizedHighlights.map((item, itemIndex) => (
              <li
                key={`${item.slice(0, 16)}-${itemIndex}`}
                className="glow-surface-sm p-3 text-sm text-slate-200"
              >
                <div className="relative">{renderWithEmphasis(item)}</div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </SectionContainer>
  )
}

function renderWithEmphasis(text) {
  if (typeof text !== 'string' || !text.includes('**')) {
    return text
  }

  const parts = text.split(/(\*\*.*?\*\*)/g)

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-slate-100">
          {part.slice(2, -2)}
        </strong>
      )
    }

    return <span key={`${part}-${index}`}>{part}</span>
  })
}

export default AboutSection
