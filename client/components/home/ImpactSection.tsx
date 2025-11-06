import { motion } from "framer-motion";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-card text-foreground"
    >
      <div
        className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary blur-3xl opacity-90 float-anim"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-accent blur-3xl opacity-60 float-anim-delayed"
        aria-hidden="true"
      />
      
      <div className="container-tight py-12 px-6 md:py-24 md:px-8 lg:px-12">
        <div className="grid items-center gap-8 md:gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2 text-foreground">
              Designed for <span className="text-primary">measurable impact</span>
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground text-lg leading-relaxed">
              Science-backed, experience-led. We combine online and live
              learning in the flow of work to create lasting behavior change and profitable trading habits.
            </p>
            
            <motion.div 
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border card-anim ripple magnetic cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/programs', '_blank')}
              >
                <span className="block text-4xl font-extrabold text-primary counter-anim">
                  +38%
                </span>
                <span className="text-muted-foreground text-sm font-semibold">Performance</span>
                <div className="mt-2 text-xs text-primary">Click to see results →</div>
              </motion.div>
              <motion.div
                className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border card-anim ripple magnetic cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/programs', '_blank')}
              >
                <span className="block text-4xl font-extrabold text-primary counter-anim">
                  95%
                </span>
                <span className="text-muted-foreground text-sm font-semibold">Apply Skills</span>
                <div className="mt-2 text-xs text-primary">Click to see results →</div>
              </motion.div>
              <motion.div
                className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border card-anim ripple magnetic cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/programs', '_blank')}
              >
                <span className="block text-4xl font-extrabold text-primary counter-anim">
                  NPS 70
                </span>
                <span className="text-muted-foreground text-sm font-semibold">Learners Love It</span>
                <div className="mt-2 text-xs text-primary">Click to see results →</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                src="/stock5.jpeg"
                alt="Trading Success Dashboard"
                className="rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {/* Professional overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border">
                  <p className="text-sm font-semibold text-foreground">Trading Success Dashboard</p>
                  <p className="text-xs text-muted-foreground">Real-time performance metrics</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

