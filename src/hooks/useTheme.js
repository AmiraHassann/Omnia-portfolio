import { useEffect, useState } from "react"

export default function useTheme() {
  // Use the saved choice, or the device setting the first time
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme")
    if (saved) return saved
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  // Apply the choice to the page and remember it
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return { theme, toggleTheme }
}