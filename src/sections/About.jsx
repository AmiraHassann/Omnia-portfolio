import { profile } from "../data/site"
import Reveal from "../components/Reveal"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-5 md:py-10">
      <Reveal>
        <p className="mb-10 text-sm uppercase tracking-[0.25em] text-accent">
          My Concept
        </p>
      </Reveal>

      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-end">
        {/* Quote */}
        <Reveal>
          <blockquote className="font-display text-3xl leading-snug sm:text-4xl lg:text-4xl">
            “{profile.quote}”
          </blockquote>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.15} className="space-y-5 text-lg text-soft">
          <p>{profile.intro[1]}</p>
          <p>{profile.quoteNote}</p>
        </Reveal>
      </div>
    </section>
  )
}