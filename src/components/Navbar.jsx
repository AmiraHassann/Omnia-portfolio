import { useState } from "react"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import { profile, navLinks } from "../data/site"
import useTheme from "../hooks/useTheme"
import useScrolled from "../hooks/useScrolled"
import useActiveSection from "../hooks/useActiveSection"
import ThemeToggle from "./ThemeToggle"

// Every section we watch while scrolling ("home" is the Hero)
const sectionIds = ["home", ...navLinks.flatMap((link) => link.sections)]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)

  const isActive = (link) => link.sections.includes(active)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-2.5" : "py-5"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className={`font-display transition-all duration-300 ${
            scrolled ? "text-2xl" : "text-3xl"
          }`}
        >
          {profile.name}
        </a>

        {/* Links (desktop) */}
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative block rounded-xl px-4 py-2 text-[17px] font-medium transition-colors ${isActive(link) ? "text-accent" : "text-soft hover:text-ink"
                  }`}
              >
                {isActive(link) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-accent/10"
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-1">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-card md:hidden"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menu (mobile) */}
      {open && (
        <ul className="border-t border-line px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-lg ${
                  isActive(link) ? "text-accent" : "text-soft"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}