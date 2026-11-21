import { FiMail, FiPhone } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { contact } from "../data/site"
import Reveal from "../components/Reveal"
import ContactTile from "../components/ContactTile"

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-5 md:py-10"
    >
      <Reveal>
        <h2 className="mb-10 text-4xl sm:text-5xl">Contact</h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        <Reveal className="h-full">
          <ContactTile
            icon={FaWhatsapp}
            label="WhatsApp"
            value={contact.phone}
            href={`https://wa.me/${contact.whatsapp}`}
            external
          />
        </Reveal>

        <Reveal delay={0.12} className="h-full">
          <ContactTile
            icon={FiMail}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />
        </Reveal>

        <Reveal delay={0.24} className="h-full">
          <ContactTile
            icon={FiPhone}
            label="Phone"
            value={contact.phone}
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
          />
        </Reveal>
      </div>
    </section>
  )
}