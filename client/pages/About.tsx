import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users, Target, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TutorsSection from "@/components/home/TutorsSection";

const sections = [
  {
    title: "Why Tradeneeti",
    text: "We help individuals and organisations gain mastery over the stock market through practical courses in F&O, intraday trading, and algorithmic strategies — designed to improve trading performance with real-world application.",
    image: "/stock1.jpeg",
    icon: TrendingUp,
    features: [
      {
        title: "Expert Mentoring",
        desc: "Learn from professional traders and algorithmic strategy experts with years of experience.",
      },
      {
        title: "Real-Market Practice",
        desc: "Apply trading concepts in live simulations and practice sessions to build confidence.",
      },
    ],
  },
  {
    title: "Our Learning Approach",
    text: "Our programs combine market expertise with applied learning — from live market simulations, algorithm building workshops, to risk management coaching. We equip learners with strategies they can confidently apply to trading.",
    image: "/stock2.jpeg",
    icon: Users,
    features: [
      {
        title: "Live Market Sessions",
        desc: "Hands-on experience with real-time market analysis and trade execution.",
      },
      {
        title: "Algorithm Workshops",
        desc: "Build and backtest trading algorithms with our comprehensive workshops.",
      },
    ],
  },
  {
    title: "Scale and Impact",
    text: "We measure success based on trading consistency, improved decision-making, and profitability. Our platform and expert mentors ensure you can track progress and scale your trading knowledge with ease.",
    image: "/stock3.jpeg",
    icon: Target,
    features: [
      {
        title: "Progress Tracking",
        desc: "Monitor your growth with detailed analytics and performance metrics.",
      },
      {
        title: "Community Support",
        desc: "Join a vibrant community of traders sharing insights and strategies.",
      },
    ],
  },
];

const leadership = [
  { name: "Rahul Mehta", role: "Founder & Trading Coach", image: "/man-showing-thumb.jpg" },
  { name: "Ananya Sharma", role: "Head of Algo Research", image: "/girl-donethumbs.jpg" },
  { name: "David Lee", role: "Chief Market Strategist", image: "/man-showing-thumb.jpg" },
  { name: "Priya Nair", role: "Head of Learning Experience", image: "/girl-donethumbs.jpg" },
];

export default function About() {
  return (
    <div className="relative overflow-hidden bg-background py-12 px-4 md:py-24 md:px-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container-tight relative z-10">
        {/* Header Section */}
        <motion.section
          className="mx-auto max-w-3xl text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">About Us</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4">
            <span className="text-foreground">About </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Tradeneeti
            </span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We empower aspiring traders with structured courses in stock market trading, Options & Futures (F&O), and Algo trading — delivered through online learning, live workshops, and mentoring that drive real results and profitable trading habits.
          </p>
        </motion.section>

        {/* Alternating Feature Sections */}
        <div className="mt-12 md:mt-16 space-y-16 md:space-y-24">
          {sections.map((s, i) => {
            const imageOnLeft = i % 2 === 1;
            const Icon = s.icon;
            return (
              <motion.section
                key={s.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                {/* Glowing Border Effect */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                <div className="relative grid items-center gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">
                  {/* Image Section */}
                  <motion.div
                    className={`relative ${imageOnLeft ? "md:order-first" : "md:order-last"}`}
                    initial={{ opacity: 0, x: imageOnLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl border border-border shadow-xl group-hover:border-primary/30 transition-all duration-300">
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
                      
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, x: imageOnLeft ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
                        {s.text}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8">
                      {s.features.map((feature, fIndex) => (
                        <motion.div
                          key={feature.title}
                          className="group/feature relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card/50 via-card/30 to-card/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 + 0.4 + fIndex * 0.1 }}
                          whileHover={{ scale: 1.02, y: -4 }}
                          onClick={() => window.open('/programs', '_blank')}
                        >
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          
                          <div className="relative z-10">
                            <h4 className="font-bold text-foreground mb-2 group-hover/feature:text-primary transition-colors duration-300">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {feature.desc}
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-xs text-primary opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300">
                              <span>Learn more</span>
                              <ArrowRight className="w-3 h-3" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Tutors/Mentors Section */}
        {/* <TutorsSection /> */}

        {/* Leadership Team Section */}
        <motion.section
          className="mt-20 md:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Expert Team</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              <span className="text-foreground">Leadership </span>
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
              Our experts come from trading, quantitative finance, and technology backgrounds.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p, index) => (
              <motion.article
                key={p.name}
                className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('/contact', '_blank')}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="relative mb-6">
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      className="h-20 w-20 md:h-24 md:w-24 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 object-cover"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="mt-4 font-bold text-lg md:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {p.name}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-3">
                    {p.role}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Connect</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA Section */}
        <motion.section
          className="mt-20 md:mt-32 relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          <div className="relative rounded-3xl border border-border bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl p-10 md:p-16 text-center shadow-2xl hover:border-primary/30 transition-all duration-300">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                <span className="text-foreground">Start Your Journey to </span>
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  Trading Mastery
                </span>
              </h3>
              <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Join our courses and coaching programs to build profitable, consistent trading skills.
              </p>
              <motion.div
                className="mt-8 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="relative rounded-full px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
