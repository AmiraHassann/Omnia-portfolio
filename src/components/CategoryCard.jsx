import { FiArrowRight } from "react-icons/fi"

export default function CategoryCard({ number, title, text, href }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-card p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
      <span className="font-display text-5xl text-accent">{number}</span>

      <h3 className="mt-6 text-3xl">{title}</h3>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-soft">
        {text}
      </p>

      <a
        href={href}
        className="group mt-8 inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
      >
        View works
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  )
}