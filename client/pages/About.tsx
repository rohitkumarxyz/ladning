import { motion } from "framer-motion";

const sections = [
  {
    title: "Why Tradeneeti",
    text: "We help individuals and organisations gain mastery over the stock market through practical courses in F&O, intraday trading, and algorithmic strategies — designed to improve trading performance with real-world application.",
    image: "/stock1.jpeg"
  },
  {
    title: "Our learning approach",
    text: "Our programs combine market expertise with applied learning — from live market simulations, algorithm building workshops, to risk management coaching. We equip learners with strategies they can confidently apply to trading.",
    image: "/stock2.jpeg"
  },
  {
    title: "Scale and impact",
    text: "We measure success based on trading consistency, improved decision-making, and profitability. Our platform and expert mentors ensure you can track progress and scale your trading knowledge with ease.",
    image: "/stock3.jpeg"
  },
];

export default function About() {
  return (
    <div className="container-tight py-16 px-4 md:py-32 md:px-0">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-3xl text-center px-4 md:px-0">
          <h1 className="heading-2 text-gray-900">About Tradeneeti</h1>
          <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
            We empower aspiring traders with structured courses in stock market
            trading, Options & Futures (F&O), and Algo trading — delivered
            through online learning, live workshops, and mentoring that drive
            real results and profitable trading habits.
          </p>
        </div>
      </motion.section>

      {/* Alternating feature sections */}
      <div className="mt-12 space-y-16 md:space-y-20">
        {sections.map((s, i) => {
          const imageOnLeft = i % 2 === 1;
          return (
            <motion.section
              key={s.title}
              className="grid items-center gap-8 md:gap-16 md:grid-cols-2"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div
                className={`${
                  imageOnLeft
                    ? "order-first md:order-first"
                    : "order-last md:order-last"
                }`}
              >
                <motion.div 
                  className="rounded-2xl overflow-hidden border bg-white shadow-lg card-anim cursor-pointer"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => window.open('/programs', '_blank')}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-64 object-cover md:h-80"
                  />
                </motion.div>
              </div>

              <div>
                <div className="mb-4">
                  <h3 className="heading-3 text-gray-900">{s.title}</h3>
                </div>
                <p className="mt-4 text-foreground/70 max-w-xl text-lg leading-relaxed">{s.text}</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div 
                    className="rounded-lg border p-6 card-anim cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('/programs', '_blank')}
                  >
                    <h4 className="font-semibold text-gray-900">Expert mentoring</h4>
                    <p className="text-sm text-foreground/70">
                      Learn from professional traders and algorithmic strategy
                      experts with years of experience.
                    </p>
                    <div className="mt-2 text-xs text-primary">Click to learn more →</div>
                  </motion.div>
                  <motion.div 
                    className="rounded-lg border p-6 card-anim cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('/programs', '_blank')}
                  >
                    <h4 className="font-semibold text-gray-900">Real-market practice</h4>
                    <p className="text-sm text-foreground/70">
                      Apply trading concepts in live simulations and practice
                      sessions to build confidence.
                    </p>
                    <div className="mt-2 text-xs text-primary">Click to learn more →</div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Leadership */}
      <motion.section
        className="mt-20"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 text-center">Leadership team</h2>
        <p className="mt-3 text-center text-foreground/70">
          Our experts come from trading, quantitative finance, and technology
          backgrounds.
        </p>
        <div className="mt-8 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Rahul Mehta", role: "Founder & Trading Coach" },
            { name: "Ananya Sharma", role: "Head of Algo Research" },
            { name: "David Lee", role: "Chief Market Strategist" },
            { name: "Priya Nair", role: "Head of Learning Experience" },
          ].map((p) => (
            <motion.article
              key={p.name}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border bg-white p-8 card-anim cursor-pointer"
              onClick={() => window.open('/contact', '_blank')}
            >
              <motion.img
                src="/image.png"
                alt={p.name}
                className="h-16 w-16 rounded-full magnetic"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <h4 className="mt-4 font-semibold text-gray-900">{p.name}</h4>
              <p className="mt-1 text-sm text-foreground/70">{p.role}</p>
              <div className="mt-2 text-xs text-primary">Click to connect →</div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        className="mt-20 rounded-2xl border bg-white p-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="heading-2">
          Start your journey to trading mastery today
        </h3>
        <p className="mt-3 text-foreground/70">
          Join our courses and coaching programs to build profitable, consistent
          trading skills.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <motion.a 
            href="/contact" 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground btn-anim">
              Contact us
            </button>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
