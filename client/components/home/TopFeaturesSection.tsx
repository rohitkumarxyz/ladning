import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Play, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWebinarPopupContext } from "@/contexts/WebinarPopupContext";

export default function TopFeaturesSection() {
  const { openPopup } = useWebinarPopupContext();
  const features = [
    "Learn 10+ institutional trading strategies.",
    "We teach equity, futures, options, commodities & forex trading.",
    "Attend weekly live webinars and interactive Q&A sessions.",
    "Course available in English & Hindi language.",
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background py-2 sm:py-4 md:py-8 px-4 sm:px-6 md:px-0"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-tight relative z-10">
        {/* Section Title - Premium Design */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Premium Education</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold mb-3 sm:mb-4 px-2 sm:px-0">
            <span className="text-foreground">World Class </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Trading Education
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 sm:px-0">
            Learn professional institutional trading from the absolute basics and experience the world of smart money concepts.
          </p>
        </motion.div>

        {/* Main Premium Card */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing Border Effect - Premium */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-lg opacity-40"></div>
          
          {/* Main Content Container */}
          <div className="relative bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
              {/* Left Content - Premium Design */}
              <motion.div
                className="space-y-4 sm:space-y-6 md:space-y-8 order-2 md:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Master Institutional Trading Strategies
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    From first-time traders to seasoned investors, we develop the skills that matter most in today's dynamic markets.
                  </p>
                </div>

                {/* Features List - Enhanced Premium Design */}
                <ul className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="group/feature flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background/50 hover:bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                    >
                      <div className="mt-0.5 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20 group-hover/feature:from-primary/30 group-hover/feature:to-primary/20 group-hover/feature:border-primary/30 transition-all duration-300">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <span className="text-sm sm:text-base md:text-lg text-foreground group-hover/feature:text-primary transition-colors duration-300 flex-1 pt-0.5 leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Join Now Button - Premium Design */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      onClick={openPopup}
                      className="w-full md:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg sm:rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        Join Now
                        <Play className="w-5 h-5" />
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Content - Premium Video Design */}
              <motion.div
                className="relative order-1 md:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative group/video">
                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl opacity-0 group-hover/video:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-gradient-to-br from-background/90 via-card/50 to-background/70 rounded-xl sm:rounded-2xl border border-border/50 p-2 sm:p-3 md:p-4 lg:p-6 shadow-xl overflow-hidden backdrop-blur-sm">
                    {/* Video Container - Premium Design */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg sm:rounded-xl overflow-hidden bg-background border border-border/30 group-hover/video:border-primary/30 transition-colors duration-300">
                      {/* Premium Video Overlay Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10 pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 z-10 pointer-events-none opacity-50"></div>
                      
                      {/* Video Element */}
                      <video
                        className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-500"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Premium LIVE Badge Overlay */}
                      <motion.div
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-red-600/95 backdrop-blur-md border-2 border-red-400/80 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 shadow-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-full w-full bg-red-500"></span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                          LIVE
                        </span>
                      </motion.div>

                      {/* Video Info Overlay - Premium Design */}
                      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-background/95 via-background/80 to-transparent p-3 sm:p-4 md:p-6">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm group-hover/video:bg-primary/30 transition-colors duration-300">
                            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-foreground">Trading Session</p>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">Professional Market Analysis</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
