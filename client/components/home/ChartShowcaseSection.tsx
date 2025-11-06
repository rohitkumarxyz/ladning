import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Activity, Zap, Target, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ChartShowcaseSection() {
  const stats = [
    {
      icon: TrendingUp,
      label: "Success Rate",
      value: "95%",
      change: "+12%",
      positive: true,
    },
    {
      icon: DollarSign,
      label: "Avg Returns",
      value: "5.2x",
      change: "+0.8x",
      positive: true,
    },
    {
      icon: Activity,
      label: "Active Traders",
      value: "40K+",
      change: "+2.5K",
      positive: true,
    },
    {
      icon: Target,
      label: "Win Rate",
      value: "78%",
      change: "+5%",
      positive: true,
    },
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analysis",
      desc: "Live market data with advanced charting tools",
    },
    {
      icon: Zap,
      title: "Smart Indicators",
      desc: "AI-powered signals for better decision making",
    },
    {
      icon: Activity,
      title: "Risk Management",
      desc: "Automated stop-loss and position sizing",
    },
  ];

  return (
    <section
      id="chart-showcase"
      className="relative overflow-hidden bg-background py-4 px-4 md:py-8 md:px-0"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container-tight relative z-10">
        {/* Section Header */}
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
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Live Trading Platform</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4">
            <span className="text-foreground">Trade Like </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              The Institutions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Get ready to level up your trading game with our advanced charting platform and real-time market analysis.
          </p>
        </motion.div>

        {/* Main Chart Display */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-lg opacity-40"></div>
          
          {/* Main Content Container */}
          <div className="relative bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl border border-border rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

            {/* Chart Image Container - Premium Design */}
            <div className="relative rounded-2xl overflow-hidden bg-background border border-border/30 group-hover:border-primary/30 transition-colors duration-300">
              {/* Chart Image */}
              <motion.div
                className="relative w-full h-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/chartimage.png"
                  alt="Advanced Trading Chart Analysis"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                
                {/* Premium Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none rounded-2xl"></div>

                {/* Live Indicator Badge */}
                <motion.div
                  className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-red-600/95 backdrop-blur-md border-2 border-red-400/80 rounded-full px-4 py-2 shadow-xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide">LIVE MARKET</span>
                </motion.div>

                {/* Chart Info Badge */}
                <motion.div
                  className="absolute top-6 left-6 z-20 bg-background/95 backdrop-blur-md border border-primary/30 rounded-xl px-4 py-3 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Indian Energy Exchange Ltd.</p>
                      <p className="text-sm font-bold text-foreground">83.20 <span className="text-primary">+2.11%</span></p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

