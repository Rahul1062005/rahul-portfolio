import SectionContainer from '../components/SectionContainer'

function ContactSection({ data, index }) {
  const heading = data?.heading || 'Contact'

  return (
    <SectionContainer
      id="contact"
      title={heading}
      subtitle={data?.message}
      index={index}
      containerClassName="group relative transition-all duration-300 ease-in-out hover:z-10 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.email ? (
          <a
            href={`mailto:${data.email}`}
            className="glow-surface card-pop-hover border-blue-500/20 p-4 shadow-[0_0_12px_rgba(99,102,241,0.14)] transition-all duration-300 ease-in-out"
          >
            <p className="relative text-xs uppercase tracking-wide text-slate-400">Email</p>
            <p className="relative mt-2 text-sm text-cyan-200">{data.email}</p>
          </a>
        ) : null}

        {data?.phone ? (
          <a
            href={`tel:${data.phone}`}
            className="glow-surface card-pop-hover border-blue-500/20 p-4 shadow-[0_0_12px_rgba(99,102,241,0.14)] transition-all duration-300 ease-in-out"
          >
            <p className="relative text-xs uppercase tracking-wide text-slate-400">Phone</p>
            <p className="relative mt-2 text-sm text-cyan-200">{data.phone}</p>
          </a>
        ) : null}

        {data?.location ? (
          <div className="glow-surface card-pop-hover border-blue-500/20 p-4 shadow-[0_0_12px_rgba(99,102,241,0.14)] transition-all duration-300 ease-in-out">
            <p className="relative text-xs uppercase tracking-wide text-slate-400">Location</p>
            <p className="relative mt-2 text-sm text-cyan-200">{data.location}</p>
          </div>
        ) : null}
      </div>
    </SectionContainer>
  )
}

export default ContactSection
