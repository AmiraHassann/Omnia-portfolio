export default function ContactTile({
  icon: Icon,
  label,
  value,
  href,
  highlight = false,
  external = false,
}) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noreferrer" })}
      className={`group flex h-full flex-col gap-10 rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
        highlight
          ? "border-accent bg-accent text-bg"
          : "border-line bg-card hover:border-accent"
      }`}
    >
      <span
        className={`grid h-12 w-12 place-items-center rounded-full ${
          highlight ? "bg-bg/20" : "bg-bg"
        }`}
      >
        <Icon size={22} />
      </span>

      <span>
        <span
          className={`block text-sm ${highlight ? "text-bg/80" : "text-soft"}`}
        >
          {label}
        </span>
        <span className="mt-1 block break-all font-display text-2xl">
          {value}
        </span>
      </span>
    </a>
  )
}