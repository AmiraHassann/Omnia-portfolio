import { profile } from "../data/site"

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-soft">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#" className="transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}