import { useEffect } from "react"
import { motion } from "framer-motion"
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi"

export default function Lightbox({ works, index, onClose, onChange }) {
  const art = works[index]
  const total = works.length

  const prev = () => onChange((index - 1 + total) % total)
  const next = () => onChange((index + 1) % total)

  // Keyboard: Esc closes, arrow keys move between artworks.
  // Page scrolling is locked while the window is open.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  })

  // Dark round buttons that stay visible on any background
  const roundButton =
    "h-11 w-11 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80"

  return (
    <div
      className="fixed inset-0 z-100 flex bg-black/85 p-3 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={art.title.en}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className={`${roundButton} fixed right-4 top-4 z-20 grid`}
      >
        <FiX size={22} />
      </button>

      {/* Side arrows (big screens only) */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        aria-label="Previous artwork"
        className={`${roundButton} fixed left-4 top-1/2 z-20 hidden -translate-y-1/2 md:grid`}
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        aria-label="Next artwork"
        className={`${roundButton} fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 md:grid`}
      >
        <FiChevronRight size={24} />
      </button>

      {/* Window: scrolls as one piece on phones, two columns on big screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="m-auto flex max-h-full w-full max-w-5xl flex-col overflow-y-auto rounded-3xl bg-bg text-ink md:flex-row md:overflow-hidden"
      >
        {/* Image */}
        <div className="flex shrink-0 items-center justify-center bg-card p-4 md:min-w-0 md:flex-1 md:p-8">
          <motion.img
            key={art.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={`/images/${art.image}`}
            alt={art.alt}
            className="max-h-[45vh] w-auto max-w-full rounded-lg object-contain md:max-h-[80vh]"
          />
        </div>

        {/* Details */}
        <div className="p-6 md:w-96 md:shrink-0 md:overflow-y-auto md:p-8">
          {/* Counter + arrows (arrows only on phones) */}
          <div className="flex items-center justify-between">
            <p className="text-sm tracking-widest text-accent">
              {index + 1} / {total}
            </p>

            <div className="flex gap-2 md:hidden">
              <button
                onClick={prev}
                aria-label="Previous artwork"
                className={`${roundButton} grid`}
              >
                <FiChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                aria-label="Next artwork"
                className={`${roundButton} grid`}
              >
                <FiChevronRight size={22} />
              </button>
            </div>
          </div>

          <h3 className="mt-3 text-3xl leading-tight">{art.title.en}</h3>
          {art.title.ar && (
            <p dir="rtl" className="mt-2 text-xl text-soft">
              {art.title.ar}
            </p>
          )}

          {/* Medium and size */}
          <div className="mt-6 space-y-2 border-t border-line pt-6 text-sm text-soft">
            <p>{art.medium.en}</p>
            {art.medium.ar && <p dir="rtl">{art.medium.ar}</p>}
          </div>

          {/* Description */}
          {(art.description.en || art.description.ar) && (
            <div className="mt-6 space-y-5 border-t border-line pt-6">
              {art.description.en && (
                <p className="leading-relaxed">{art.description.en}</p>
              )}
              {art.description.ar && (
                <p dir="rtl" className="leading-loose text-soft">
                  {art.description.ar}
                </p>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}