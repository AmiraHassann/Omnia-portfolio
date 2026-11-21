import { categories } from "../data/site"
import Reveal from "../components/Reveal"
import CategoryCard from "../components/CategoryCard"

export default function Categories() {
    return (
        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-5 md:py-10">
            <Reveal className="mb-12">
                <h2 className="text-4xl sm:text-5xl">Selected Work</h2>
                <p className="mt-3 text-lg text-soft">
                    Oil on canvas, pencil on paper, and wood, brass and plaster by hand.
                </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
                {categories.map((category, index) => (
                    <Reveal key={category.id} delay={index * 0.12} className="h-full">
                        <CategoryCard
                            number={`0${index + 1}`}
                            title={category.title}
                            text={category.text}
                            href={`#${category.id}`}
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}