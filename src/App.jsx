import { MotionConfig } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Categories from "./sections/Categories"
import Gallery from "./sections/Gallery"
import Contact from "./sections/Contact"
import { categories } from "./data/site"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />

        {categories.map((category) => (
          <Gallery key={category.id} category={category} />
        ))}

        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}