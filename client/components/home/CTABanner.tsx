import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function CTABanner() {
  const trustIndicators = [
    "Free Consultation",
    "Expert Mentors",
    "Lifetime Support",
  ];

  return (
    <section className="relative overflow-hidden bg-background py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container-tight relative z-10">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-0.5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-lg opacity-40"></div>

          {/* Main Content Container */}
          <div className="relative bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Start Your Trading Journey</span>
            </motion.div>

            <div className="text-center relative z-10">
              {/* Main Heading */}
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 leading-tight px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-foreground">Ready to Power Up </span>
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  Your Trading?
                </span>
              </motion.h3>

              {/* Description */}
              <motion.p
                className="mt-3 sm:mt-4 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Master The Art of Selecting Stocks with Tradeneeti. Join thousands of successful traders who have transformed their financial future.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 md:gap-5 sm:flex-row sm:justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="relative rounded-full px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 overflow-hidden group w-full sm:w-auto"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                      <span className="relative z-10">Request A Call</span>
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/courses">
                    <Button
                      variant="outline"
                      size="lg"
                      className="relative rounded-full px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold border-2 border-border hover:border-primary/50 bg-card/50 hover:bg-card text-foreground hover:text-primary shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden group w-full sm:w-auto"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10">View Programs</span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {trustIndicators.map((indicator, index) => (
                  <motion.div
                    key={indicator}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/50 border border-border/30 hover:border-primary/30 transition-all duration-300 group/indicator"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full group-hover/indicator:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-foreground group-hover/indicator:text-primary transition-colors duration-300 whitespace-nowrap">
                      {indicator}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
