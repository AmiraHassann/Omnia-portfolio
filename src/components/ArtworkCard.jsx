export default function ArtworkCard({ artwork, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full cursor-zoom-in text-left"
    >
      <div className="overflow-hidden rounded-2xl bg-card">
        <img
          src={`/images/${artwork.image}`}
          alt={artwork.alt}
          width={artwork.width}
          height={artwork.height}
          loading="lazy"
          className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-sm text-soft">{artwork.title.en}</p>
    </button>
  )
}