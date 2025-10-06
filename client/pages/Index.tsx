import { Button } from "@/components/ui/button";
import NewsSection from "@/components/ui/news&blog";
import Testimonials from "@/components/ui/Testimonials";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Counter animation hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startValue + (end - startValue) * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return count;
};

export default function Index() {
  const successRate = useCounter(95);
  const returnMultiplier = useCounter(5);
  const programsCount = useCounter(40);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-pattern particle-bg">
        {/* Animated background elements */}
        <div
          className="absolute -top-28 -right-20 h-[420px] w-[420px] rounded-full bg-primary/40 blur-3xl float-anim"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl float-anim-delayed"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 h-[200px] w-[200px] rounded-full bg-green-500/20 blur-3xl pulse-anim"
          aria-hidden="true"
        />
        
        <div className="container-tight grid gap-8 py-12 px-4 md:grid-cols-2 md:gap-14 md:py-24 md:px-0">
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Top Stock Market Learning Platform
            </motion.span>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Master The Art of Selecting Stocks with{" "}
              <span className="text-primary underline decoration-primary decoration-2 underline-offset-4">
                Tradeneeti
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-5 max-w-xl text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Build the capabilities your teams need to perform today — with
              measurable impact in weeks, not years.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-full text-base px-8 py-3 btn-anim"
                >
                  Request A Call
                </Button>
              </Link>
              <a
                href="/courses"
                className="text-md font-semibold underline underline-offset-4 sm:ml-2 hover:text-primary transition-colors duration-300"
              >
                Explore Our Programs →
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center text-sm text-foreground/70 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 card-anim ripple magnetic cursor-pointer"
                onClick={() => window.open('/programs', '_blank')}
              >
                <span className="block text-3xl font-extrabold text-foreground counter-anim">
                  {successRate}%
                </span>
                <span className="text-xs font-semibold">Success Rate</span>
                <div className="mt-2 text-xs text-primary">Click to explore →</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 card-anim ripple magnetic cursor-pointer"
                onClick={() => window.open('/programs', '_blank')}
              >
                <span className="block text-3xl font-extrabold text-foreground counter-anim">
                  {returnMultiplier}x
                </span>
                <span className="text-xs font-semibold">Return on Trade</span>
                <div className="mt-2 text-xs text-primary">Click to explore →</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 card-anim ripple magnetic cursor-pointer"
                onClick={() => window.open('/programs', '_blank')}
              >
                <span className="block text-3xl font-extrabold text-foreground counter-anim">
                  {programsCount}+
                </span>
                <span className="text-xs font-semibold">Programs</span>
                <div className="mt-2 text-xs text-primary">Click to explore →</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Visual */}
          <motion.div 
            className="relative flex items-center justify-center p-2 sm:p-4 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full tilt-3d">
              <motion.img
                src="/stock1.jpeg"
                alt="Professional Trading Dashboard"
                className="rounded-2xl w-full h-[250px] sm:h-[320px] md:h-[420px] object-cover shadow-2xl cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open('/programs', '_blank')}
              />
              {/* Professional overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-semibold text-gray-800">Professional Trading Dashboard</p>
                  <p className="text-xs text-gray-600">Real-time market analysis and insights</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="container-tight py-12 px-4 md:py-24 md:px-0 bg-gradient-to-br from-slate-50 to-blue-50">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 text-gray-900">Tradeneeti Offers</h2>
          <p className="mt-3 text-foreground/70 text-lg">
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
          {[
            {
              title: "Futures and Options Trading",
              desc: "Master derivatives trading with advanced strategies, risk management, and market analysis techniques.",
              image: "/stock2.jpeg"
            },
            {
              title: "Investment Analysis",
              desc: "Learn fundamental and technical analysis to make informed investment decisions and build wealth.",
              image: "/stock3.jpeg"
            },
            {
              title: "Chart Technical Analysis",
              desc: "Decode market patterns, identify trends, and time your trades with precision using technical indicators.",
              image: "/stock4.jpeg"
            },
          ].map((c, index) => (
            <motion.div
              key={c.title}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg professional-card cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('/programs', '_blank')}
            >
              <div className="relative">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <motion.img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    Learn more →
                  </span>
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Impact */}
      <section
        id="impact"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white"
      >
        <div
          className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary blur-3xl opacity-90 float-anim"
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-blue-500 blur-3xl opacity-60 float-anim-delayed"
          aria-hidden="true"
        />
        
        <div className="container-tight py-12 px-4 md:py-24 md:px-0">
          <div className="grid items-center gap-8 md:gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-2 text-white">
                Designed for <span className="text-primary">measurable impact</span>
              </h2>
              <p className="mt-3 max-w-lg text-white/80 text-lg leading-relaxed">
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
                  className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 card-anim ripple magnetic cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/programs', '_blank')}
                >
                <span className="block text-4xl font-extrabold text-primary counter-anim">
                  +38%
                </span>
                  <span className="text-white/80 text-sm font-semibold">Performance</span>
                  <div className="mt-2 text-xs text-primary">Click to see results →</div>
                </motion.div>
                <motion.div
                  className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 card-anim ripple magnetic cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/programs', '_blank')}
                >
                <span className="block text-4xl font-extrabold text-primary counter-anim">
                  95%
                </span>
                  <span className="text-white/80 text-sm font-semibold">Apply Skills</span>
                  <div className="mt-2 text-xs text-primary">Click to see results →</div>
                </motion.div>
                <motion.div
                  className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 card-anim ripple magnetic cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/programs', '_blank')}
                >
                <span className="block text-4xl font-extrabold text-primary counter-anim">
                  NPS 70
                </span>
                  <span className="text-white/80 text-sm font-semibold">Learners Love It</span>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-semibold text-gray-800">Trading Success Dashboard</p>
                    <p className="text-xs text-gray-600">Real-time performance metrics</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="container-tight py-12 px-4 md:py-24 md:px-0 bg-gradient-to-br from-blue-50 to-indigo-50">
        <motion.div 
          className="flex items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="heading-2 text-gray-900">Programs built for outcomes</h2>
            <p className="mt-2 text-foreground/70 text-lg">
              Modular, stackable and tailored to your trading journey.
            </p>
          </div>
          <motion.a
            href="/courses"
            className="hidden sm:inline text-sm font-semibold underline underline-offset-4 hover:text-primary transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            See all programs →
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              title: "Futures and Options Trading",
              desc: "Master the essentials of derivatives trading, risk management, and advanced strategies with real market simulations.",
              image: "/stock2.jpeg",
              duration: "8 weeks",
              level: "Intermediate"
            },
            {
              title: "Trading Psychology",
              desc: "Develop the mindset and discipline needed to succeed in volatile markets. Master emotional control and decision-making.",
              image: "/stock3.jpeg",
              duration: "6 weeks",
              level: "Beginner"
            },
            {
              title: "How to Pick Winning Stocks",
              desc: "Learn proven methods for analyzing and selecting high-potential stocks using fundamental and technical analysis.",
              image: "/stock4.jpeg",
              duration: "10 weeks",
              level: "Advanced"
            },
          ].map((p, index) => (
            <motion.article
              key={p.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg professional-card cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('/programs', '_blank')}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {p.duration}
                  </span>
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {p.level}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  Learn more →
                </span>
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Testimonial */}
      <Testimonials />

      {/* Resources */}
      <NewsSection />

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-blue-50 to-primary/10">
        <div
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/40 blur-2xl float-anim"
          aria-hidden="true"
        />
        <div
          className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/30 blur-2xl float-anim-delayed"
          aria-hidden="true"
        />
        
        <div className="container-tight mb-10 px-4 md:px-0">
          <motion.div 
            className="relative isolate overflow-hidden rounded-2xl border bg-white p-6 sm:p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.h3 
                className="heading-2 max-w-2xl mx-auto text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to power up your Trading?
              </motion.h3>
              <motion.p 
                className="mt-4 max-w-2xl mx-auto text-foreground/70 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Master The Art of Selecting Stocks with Tradeneeti. Join thousands of successful traders who have transformed their financial future.
              </motion.p>
              
              <motion.div 
                className="mt-6 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
              <Link to="/contact">
                    <Button size="lg" className="rounded-full btn-anim px-8 py-3">
                      Request A Call
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/programs">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="rounded-full btn-anim px-8 py-3"
                    >
                      View Programs
                    </Button>
              </Link>
                </motion.div>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div 
                className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-foreground/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-700">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-700">Expert Mentors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-700">Lifetime Support</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
