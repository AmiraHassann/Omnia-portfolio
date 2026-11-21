import { FiMoon, FiSun } from "react-icons/fi"

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Switch between light and dark mode"
      className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-card"
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  )
}