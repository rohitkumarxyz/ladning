import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container-tight py-16 md:py-24">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-2">Contact us</h1>
          <p className="mt-4 text-foreground/70">Tell us about your needs and we’ll get back with a tailored proposal.</p>
        </div>
      </motion.div>

      <motion.div className="mt-12 grid gap-10 md:grid-cols-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="rounded-2xl border bg-white p-8">
          <h3 className="heading-3">Get in touch</h3>
          <p className="mt-3 text-foreground/70">Prefer a human touch? Request a demo or leave a message and we'll respond within one business day.</p>

          <div className="mt-6 space-y-3 text-sm text-foreground/80">
            <div><strong>Email:</strong> hello@lepaya.example</div>
            <div><strong>Address:</strong> Amsterdam, The Netherlands</div>
            <div><strong>Phone:</strong> +31 20 123 4567</div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-8">
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-3">
                <label className="text-sm">Full name</label>
                <input required className="rounded-md border px-3 py-2" />

                <label className="text-sm">Work email</label>
                <input required type="email" className="rounded-md border px-3 py-2" />

                <label className="text-sm">Company</label>
                <input className="rounded-md border px-3 py-2" />

                <label className="text-sm">Message</label>
                <textarea required className="rounded-md border px-3 py-2" rows={4} />

                <div className="mt-4 flex items-center gap-3">
                  <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Send message</button>
                  <button type="button" className="text-sm underline underline-offset-4">Request a demo</button>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="font-semibold text-lg">Thanks — we’ll be in touch</h3>
              <p className="mt-2 text-foreground/70">Someone from our team will contact you within one business day.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
