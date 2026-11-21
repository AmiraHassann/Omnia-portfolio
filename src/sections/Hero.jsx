import { motion } from "framer-motion"
import { profile } from "../data/site"
import Button from "../components/Button"

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-4 pt-6 md:grid-cols-2 md:gap-14 md:pb-8 md:pt-10">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-accent">
          {profile.role}
        </p>

        <h1 className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Hey, I’m
          <br />
          {profile.name}.
        </h1>

        <p className="mt-8 max-w-md text-lg text-soft">{profile.intro[0]}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#work">View my work</Button>
          <Button href="#contact" variant="outline">
            Get in touch
          </Button>
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-accent/40" />
        <img
          src={profile.heroImage}
          alt="Omnia"
          className="relative aspect-4/3 w-full rounded-3xl object-cover"
        />
      </motion.div>
    </section>
  )
}