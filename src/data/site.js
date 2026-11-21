// General site info (English only): name, intro text, contact, and the three groups.

export const profile = {
  name: "Omnia",
  role: "Artist and art education teacher",
  heroImage: "/images/hero.png",
  intro: [
    "Artist and art education teacher with a Bachelor’s degree in Art Education from the Faculty of Specific Education.",
    "My work moves between painting, drawing and design, and between canvas, paper, wood, metal and clay.",
  ],
  quote:
    "I became the art teacher I always dreamed of having: one who truly cares about her students’ art and nurtures their passion.",
  quoteNote:
    "Teaching shapes the way I make art, and making art shapes the way I teach.",
}

export const contact = {
  email: "Omniashvkri@outlook.com",
  phone: "+20 109 319 5143",
  whatsapp: "201093195143",
}

export const categories = [
  {
    id: "paintings",
    title: "Paintings",
    text: "Oil paint is the medium where I feel I can express myself in the most detailed way, in a way no other material allows. I love the depth and luminosity of its colors, the feel of the paint under the brush, and the freedom to rework and build layers until the image says what I mean. My paintings return to women and portraiture, nature and plant forms, heritage and old places, and the emotions that hold them together.",
  },
  {
    id: "drawing",
    title: "Drawing & Design",
    text: "Drawing and design give me a different kind of freedom. They are quicker and simpler than oil, and they let me turn an idea into a clear form that people can understand at a glance. In my design work I try to bring beauty and function together, so that what I make is pleasing to look at and also has a purpose.",
  },
  {
    id: "islamic",
    title: "Islamic Arts & Handmade Works",
    text: "Islamic art is where I feel closest to my heritage and my identity. I am drawn to its ornament and geometric patterns, and to the patience of making them by hand, working with wood, metal and clay. Each piece is a way of carrying a tradition forward through my own hands.",
  },
]

export const navLinks = [
  { label: "About", href: "#about", sections: ["about"] },
  {
    label: "Work",
    href: "#work",
    sections: ["work", "paintings", "drawing", "islamic"],
  },
  { label: "Contact", href: "#contact", sections: ["contact"] },
]