import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCounter } from "@/hooks/use-counter";

export default function HeroSection() {
  const successRate = useCounter(95);
  const returnMultiplier = useCounter(5);
  const programsCount = useCounter(40);

  return (
    <section className="relative overflow-hidden border-b bg-[#0a0a0a] bg-pattern particle-bg min-h-screen flex items-center -mt-2 md:-mt-0 md:pt-0" style={{ paddingTop: '0', marginTop: '0' }}>
      <svg className="absolute inset-0 w-full h-full opacity-10 z-0" aria-hidden="true" style={{ top: 0 }}>
        <motion.path
          d="M 0,400 Q 200,300 400,350 T 800,320 T 1200,280 T 1600,300"
          stroke="#22c55e"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.path
          d="M 0,450 Q 200,380 400,420 T 800,390 T 1200,360 T 1600,380"
          stroke="#4ade80"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.2, delay: 0.5 }}
        />
      </svg>

      {[
        { value: "+2.45%", left: 10, top: 5 },
        { value: "+5.12%", left: 25, top: 12 },
        { value: "+1.89%", left: 40, top: 5 },
        { value: "+3.67%", left: 55, top: 12 },
        { value: "+4.23%", left: 70, top: 5 },
        { value: "+2.98%", left: 85, top: 12 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-[#22c55e]/20 font-mono font-bold text-xl md:text-4xl z-0"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {item.value}
        </motion.div>
      ))}

      {/* Premium Animated Background Elements */}
      <motion.div
        className="absolute -top-28 -right-20 h-[420px] w-[420px] rounded-full bg-[#22c55e]/20 blur-3xl"
        aria-hidden="true"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#4ade80]/15 blur-3xl"
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[200px] w-[200px] rounded-full bg-[#22c55e]/10 blur-3xl"
        aria-hidden="true"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container-tight grid gap-8 py-12 px-6 md:grid-cols-2 md:gap-12 md:py-0 md:px-8 lg:px-12 md:items-center w-full">
        <motion.div 
          className="relative z-10 flex flex-col"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.span 
            className="inline-flex items-center gap-2 w-fit rounded-full bg-[#171717] border border-[#2a2a2a] px-4 py-1.5 text-xs font-medium text-white/80 relative overflow-hidden group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 94, 0.5)" }}
          >
            {/* Pulsing dot */}
            <motion.span 
              className="w-1.5 h-1.5 rounded-full bg-[#22c55e] relative"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Pulse ring */}
              <motion.span
                className="absolute inset-0 rounded-full bg-[#22c55e]"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </motion.span>
            <span className="relative z-10">Top Stock Market Learning Platform</span>
          </motion.span>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-5 text-white relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Master The Art of Selecting Stocks{" "}
            <span className="relative text-[#22c55e] inline-block no-underline">
              with <span className="no-underline">Tradeneeti</span>
              {/* Animated underline effect */}
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#22c55e] via-[#4ade80] to-[#22c55e]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              {/* Subtle glow effect */}
              <motion.span
                className="absolute inset-0 bg-[#22c55e]/20 blur-xl -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Build the capabilities your teams need to perform today — with
            measurable impact in weeks, not years.
          </motion.p>
          
          {/* CTA Section */}
          <motion.div 
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="relative rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-[#22c55e] hover:bg-[#4ade80] text-[#0a0a0a] font-semibold shadow-lg shadow-[#22c55e]/30 hover:shadow-[#22c55e]/50 transition-all overflow-hidden group w-full sm:w-auto"
                >
                  {/* Animated background shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10">Request A Call</span>
                </Button>
              </motion.div>
            </Link>
            <motion.a
              href="/courses"
              className="text-base font-semibold underline underline-offset-4 sm:ml-4 text-white/80 hover:text-[#22c55e] transition-colors relative group"
              whileHover={{ x: 4 }}
            >
              Explore Our Programs
              <motion.span
                className="inline-block ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
          
          {/* Stats Cards - With Stock Market Animations */}
          <motion.div 
            className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3 text-center max-w-md mx-auto sm:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {[
              { value: successRate, suffix: "%", label: "Success Rate", trend: "+2.5%" },
              { value: returnMultiplier, suffix: "x", label: "Return on Trade", trend: "+0.8x" },
              { value: programsCount, suffix: "+", label: "Programs", trend: "+5" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative p-3 sm:p-4 rounded-xl bg-[#171717] border border-[#2a2a2a] hover:border-[#22c55e]/50 transition-colors overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                {/* Animated background trend line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.7 + index * 0.1, repeat: Infinity, repeatDelay: 3 }}
                />
                
                {/* Stock market price movement indicator */}
                <motion.div
                  className="absolute top-2 right-2 text-[#22c55e] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ 
                    y: [0, -3, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ↑
                </motion.div>

                <span className="relative block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#22c55e] mb-1">
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.span>
                </span>
                <span className="block text-[10px] sm:text-xs font-medium text-white/70 mb-1 leading-tight">{stat.label}</span>
                <motion.span 
                  className="block text-[10px] text-[#22c55e]/60 font-medium"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {stat.trend}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Mobile Phones Section */}
        <motion.div 
          className="relative flex items-center justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative w-full max-w-lg flex items-center justify-center">
            {/* Animated glow effect */}
            <motion.div 
              className="absolute inset-0 bg-[#22c55e]/5 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Two overlapping mobile phones */}
            <div className="relative flex items-center justify-center">
              {/* Left phone - slightly behind */}
              <motion.img
                src="/mobile1.png"
                alt="Trading App Screen 1"
                className="relative z-10 w-[160px] md:w-[200px] rounded-3xl shadow-xl"
                initial={{ opacity: 0, x: -20, rotate: -8, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -12, 0],
                  rotate: [-8, -2, -8],
                  scale: [1, 1.03, 1],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.4 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                  rotate: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
                whileHover={{ scale: 1.08, rotate: -2, y: -5 }}
              />
              
              {/* Right phone - in front */}
              <motion.img
                src="/mobile2.png"
                alt="Trading App Screen 2"
                className="relative z-20 w-[180px] md:w-[220px] rounded-3xl shadow-xl -ml-6 md:-ml-8"
                initial={{ opacity: 0, x: 20, rotate: 8, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -15, 0],
                  rotate: [8, 3, 8],
                  scale: [1, 1.04, 1],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.5 },
                  y: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                  rotate: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                  scale: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                whileHover={{ scale: 1.08, rotate: 3, y: -5 }}
              />
              
              {/* Multiple pulse effects around phones */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#22c55e]/30"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-[#22c55e]/20"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#22c55e]/10 to-transparent rounded-full"
                animate={{
                  rotate: [0, 360],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

