import { useState } from "react"
import artworks from "../data/artworks"
import useColumns from "../hooks/useColumns"
import Reveal from "../components/Reveal"
import ArtworkCard from "../components/ArtworkCard"
import Lightbox from "../components/Lightbox"

export default function Gallery({ category }) {
  const columns = useColumns()
  const [selected, setSelected] = useState(null) // index of the open artwork

  // Only the artworks that belong to this group
  const works = artworks.filter((art) => art.category === category.id)

  // Deal the artworks out one by one: 1st → column 1, 2nd → column 2, ...
  const lists = Array.from({ length: columns }, (_, i) =>
    works.filter((_, index) => index % columns === i)
  )

  return (
    <section
      id={category.id}
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-4 md:py-8"
    >
      <Reveal className="mb-10 flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="text-4xl sm:text-5xl">{category.title}</h2>
        <span className="text-sm text-soft">{works.length} works</span>
      </Reveal>

      <div className="flex gap-5">
        {lists.map((list, i) => (
          <div key={i} className="flex min-w-0 flex-1 flex-col gap-8">
            {list.map((art, index) => (
              <Reveal key={art.id} delay={index * 0.1}>
                <ArtworkCard
                  artwork={art}
                  onClick={() => setSelected(works.indexOf(art))}
                />
              </Reveal>
            ))}
          </div>
        ))}
      </div>

      {selected !== null && (
        <Lightbox
          works={works}
          index={selected}
          onClose={() => setSelected(null)}
          onChange={setSelected}
        />
      )}
    </section>
  )
}