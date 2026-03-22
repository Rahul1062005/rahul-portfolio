import SectionContainer from '../components/SectionContainer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function CertificationsSection({ data, index }) {
  const certifications = Array.isArray(data) ? data : []
  const [activeCertificate, setActiveCertificate] = useState(null)
  const cardWidth = 280
  const cardCount = certifications.length
  const maxSpreadPercent = 78
  const spreadStepPercent = cardCount > 1 ? maxSpreadPercent / (cardCount - 1) : 0
  const overlapPullPx = 14

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCertificate(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = activeCertificate ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = previousOverflow || 'auto'
    }
  }, [activeCertificate])

  const openCertificate = (item) => {
    const normalizedItem = {
      ...item,
      org: item.org || item.issuer || '',
      date: item.date || item.year || '',
      pdf: item.pdf || item.credential || item.image || '',
      skills: Array.isArray(item.skills) ? item.skills : [],
      description: item.description || '',
    }

    setActiveCertificate(normalizedItem)
  }

  return (
    <>
      <SectionContainer
        id="certifications"
        title="Certificates"
        index={index}
        containerClassName="relative transition-all duration-300 ease-in-out hover:z-10 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        <div className="relative hidden pb-3 md:block">
          <div className="relative h-[360px] w-full">
            {certifications.map((item, itemIndex) => {
              const imageSrc = item.image || item.imageUrl || item.certificateImage || ''
              const leftPercent = itemIndex * spreadStepPercent
              const pullBackPx = itemIndex * overlapPullPx

              return (
                <motion.button
                  key={`${item.title}-${itemIndex}`}
                  type="button"
                  onClick={() => openCertificate(item)}
                  style={{
                    left: `calc(${leftPercent}% - ${pullBackPx}px)`,
                    zIndex: itemIndex + 1,
                    width: `${cardWidth}px`,
                  }}
                  whileHover={{ y: -10, scale: 1.05, zIndex: 20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="group absolute top-0 h-[340px] overflow-hidden rounded-xl border border-white/15 text-left shadow-[0_10px_30px_rgba(2,6,23,0.55)] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                >
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={item.title}
                      className="h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.26),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.3),transparent_58%),linear-gradient(160deg,rgba(15,23,42,0.98),rgba(30,41,59,0.94))]" />
                  )}

                  <div className="absolute inset-0 z-[1] rounded-xl bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-[2] rounded-b-xl px-4 pb-4 pt-10">
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-cyan-200">{item.org || item.issuer}</p>
                    <div className="mt-2 text-[11px] text-slate-300">
                      <span>{item.date || item.year}</span>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-2 md:hidden">
          {certifications.map((item, itemIndex) => {
            const imageSrc = item.image || item.imageUrl || item.certificateImage || ''

            return (
              <button
                key={`${item.title}-mobile-${itemIndex}`}
                type="button"
                onClick={() => openCertificate(item)}
                className="group relative h-[320px] w-[280px] flex-shrink-0 overflow-hidden rounded-xl border border-white/15 text-left shadow-[0_10px_28px_rgba(2,6,23,0.55)] transition-all duration-300 ease-in-out"
              >
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={item.title}
                    className="h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                ) : (
                  <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.26),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.3),transparent_58%),linear-gradient(160deg,rgba(15,23,42,0.98),rgba(30,41,59,0.94))]" />
                )}

                <div className="absolute inset-0 z-[1] rounded-xl bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-[2] rounded-b-xl px-4 pb-4 pt-10">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-cyan-200">{item.org || item.issuer}</p>
                  <div className="mt-2 text-[11px] text-slate-300">
                    <span>{item.date || item.year}</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </SectionContainer>

      {activeCertificate ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveCertificate(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-[90%] max-w-3xl rounded-2xl border border-cyan-500/20 bg-[#0b1220] p-4 shadow-2xl sm:p-6"
          >
            <button
              type="button"
              onClick={() => setActiveCertificate(null)}
              className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/45 text-lg text-slate-200 transition-all duration-300 ease-in-out hover:border-cyan-300 hover:text-cyan-200"
              aria-label="Close certificate viewer"
            >
              ×
            </button>

            <div className="flex flex-col items-center text-center">
              <img
                src={activeCertificate.image || activeCertificate.imageUrl || activeCertificate.certificateImage || ''}
                alt={activeCertificate.title}
                className="w-full rounded-xl border border-white/10 object-contain max-h-[300px]"
              />

              <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">{activeCertificate.title}</h3>
              <p className="mt-1 text-sm text-cyan-200">
                {activeCertificate.org}
                {activeCertificate.date ? ` • ${activeCertificate.date}` : ''}
              </p>

              {activeCertificate.description ? (
                <p className="mt-3 max-w-3xl text-sm text-slate-300">{activeCertificate.description}</p>
              ) : null}

              {activeCertificate.skills?.length ? (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {activeCertificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}

              {activeCertificate.pdf ? (
                <a
                  href={activeCertificate.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(79,70,229,0.35)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(59,130,246,0.45)]"
                >
                  Verify Credential ↗
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  )
}

export default CertificationsSection
