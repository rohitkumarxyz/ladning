import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-green-500/10 blur-3xl"></div>
      </div>

      <div className="container-tight px-4 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trading Chart Animation */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-gray-200">
                <div className="text-6xl font-bold text-primary">404</div>
              </div>
              {/* Trading chart lines */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white text-xs font-bold">📉</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-white text-xs font-bold">📈</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Trade Route Not Found
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Looks like this trading strategy doesn't exist yet!
          </motion.p>
          
          <motion.p 
            className="text-base text-gray-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            The page you're looking for might have been moved, deleted, or you entered the wrong URL.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="/">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-3 btn-anim"
              >
                Back to Trading Dashboard
              </Button>
            </Link>
            <Link to="/programs">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-3 btn-anim"
              >
                Explore Programs
              </Button>
            </Link>
          </motion.div>

          {/* Trading Tips */}
          <motion.div 
            className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              💡 Trading Tip of the Day
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              "In trading, as in navigation, sometimes you need to recalculate your route. 
              The best traders know when to cut their losses and find a better path to profit."
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link to="/" className="text-primary hover:text-primary/80 transition-colors">
              Home
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/programs" className="text-primary hover:text-primary/80 transition-colors">
              Programs
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/about" className="text-primary hover:text-primary/80 transition-colors">
              About
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
