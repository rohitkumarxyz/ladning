import { motion } from "framer-motion";

const solutions = [
  {
    title: "Futures and Options Trading",
    desc: "Master derivatives trading with advanced strategies, risk management, and market analysis techniques.",
    image: "/stock2.jpeg"
  },
  {
    title: "Advanced Technical Analysis",
    desc: "Predict market movements using chart patterns, indicators, and advanced charting techniques for profitable trades.",
    image: "/stock3.jpeg"
  },
  {
    title: "Options & Derivatives Strategy",
    desc: "Leverage options for income, hedging, and speculation. Master calls, puts, and volatility trading strategies.",
    image: "/stock4.jpeg"
  },
  {
    title: "Risk Management in Trading",
    desc: "Protect your capital with proven risk-control techniques, position sizing, and trade psychology management.",
    image: "/stock1.jpeg"
  },
  {
    title: "Algorithmic Trading",
    desc: "Automate your trading with code-free strategies. Learn backtesting, system design, and bot deployment.",
    image: "/stock5.jpeg"
  },
  {
    title: "How to Pick Winning Stocks",
    desc: "Learn proven methods for analyzing and selecting high-potential stocks using fundamental and technical analysis.",
    image: "/stock2.jpeg"
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-background">
      <div className="container-tight py-12 px-6 md:py-24 md:px-8 lg:px-12">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 text-foreground no-underline">Tradeneeti Offers</h2>
          <p className="mt-3 text-muted-foreground text-lg">
            From first-time traders to seasoned investors, we develop the skills
            that matter most in today's dynamic markets.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        {solutions.map((c, index) => (
          <motion.div
            key={c.title}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('/programs', '_blank')}
          >
            {/* Premium gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            
            <div className="relative z-10 p-6">
              <div className="mb-5 rounded-xl overflow-hidden relative">
                <motion.div
                  className="relative h-48 w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {c.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                {c.desc}
              </p>
              
              <div className="flex items-center justify-between pt-2 border-t border-border/30">
                <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                  Learn more
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <span className="text-primary text-sm font-bold">→</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </section>
  );
}

