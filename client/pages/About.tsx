import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container-tight py-16 md:py-24">
      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-2">About Lepaya</h1>
          <p className="mt-4 text-foreground/70">We help organisations build capability through blended learning: online, in the flow of work, and in-person experiences that stick.</p>
        </div>
      </motion.section>

      <motion.section className="mt-12 grid gap-10 md:grid-cols-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="rounded-2xl border bg-white p-8">
          <h3 className="heading-3">Our mission</h3>
          <p className="mt-3 text-foreground/70">To close the capability gap by delivering measurable, scalable learning that creates real performance outcomes.</p>
          <ul className="mt-4 space-y-2 text-foreground/80">
            <li>Evidence-based learning design</li>
            <li>Practical, applied programs</li>
            <li>Data and measurement for impact</li>
          </ul>
        </div>
        <div className="rounded-2xl border bg-white p-8">
          <h3 className="heading-3">Our approach</h3>
          <p className="mt-3 text-foreground/70">We blend digital, live and coaching experiences into modular programs tailored to your context.</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Design</h4>
              <p className="text-sm text-foreground/70">Human-centred course design and micro-learning.</p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Delivery</h4>
              <p className="text-sm text-foreground/70">Live workshops, coaching and in-flow learning.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="mt-16" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="heading-2 text-center">Leadership team</h2>
        <p className="mt-3 text-center text-foreground/70">Experienced leaders in learning, product and people development.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Sofie van der Velde", role: "CEO" },
            { name: "Jeroen de Vries", role: "Head of Product" },
            { name: "Emma Jacobs", role: "Head of Learning" },
            { name: "Tom Keller", role: "Head of Growth" },
          ].map((p) => (
            <motion.article key={p.name} whileHover={{ scale: 1.02 }} className="rounded-2xl border bg-white p-6">
              <div className="h-28 w-28 rounded-full bg-secondary" />
              <h4 className="mt-4 font-semibold">{p.name}</h4>
              <p className="mt-1 text-sm text-foreground/70">{p.role}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="mt-16 rounded-2xl border bg-white p-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="heading-2">We partner with organisations to build capability</h3>
        <p className="mt-3 text-foreground/70">Get in touch to discuss how we can support your learning agenda.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/contact" className="inline-block">
            <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Contact us</button>
          </a>
        </div>
      </motion.section>
    </div>
  );
}
