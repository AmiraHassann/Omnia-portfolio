export default function Button({ href, variant = "primary", children }) {
  const styles = {
    primary: "bg-accent text-bg hover:opacity-90",
    outline: "border border-ink/30 hover:border-accent hover:text-accent",
  }

  return (
    <a
      href={href}
      className={`inline-block rounded-full px-7 py-3 font-medium transition ${styles[variant]}`}
    >
      {children}
    </a>
  )
}