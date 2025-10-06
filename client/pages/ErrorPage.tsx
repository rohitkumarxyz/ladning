import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  errorCode?: string;
  title?: string;
  message?: string;
  description?: string;
}

const ErrorPage = ({ 
  errorCode = "500", 
  title = "Trading System Error", 
  message = "Something went wrong with our trading platform!",
  description = "We're experiencing technical difficulties. Our team has been notified and is working to resolve the issue."
}: ErrorPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="container-tight px-4 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Error Icon Animation */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-red-200">
                <div className="text-6xl font-bold text-red-500">{errorCode}</div>
              </div>
              {/* Warning indicators */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white text-xs font-bold">⚠️</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <span className="text-white text-xs font-bold">🔧</span>
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
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {message}
          </motion.p>
          
          <motion.p 
            className="text-base text-gray-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 py-3 btn-anim"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
            <Link to="/">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-3 btn-anim"
              >
                Back to Dashboard
              </Button>
            </Link>
          </motion.div>

          {/* Error Recovery Tips */}
          <motion.div 
            className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              🛠️ Troubleshooting Tips
            </h3>
            <div className="text-left text-gray-600 text-sm space-y-2">
              <p>• Check your internet connection</p>
              <p>• Clear your browser cache and cookies</p>
              <p>• Try refreshing the page</p>
              <p>• If the problem persists, contact our support team</p>
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div 
            className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-sm text-gray-700 mb-2">
              Need immediate assistance?
            </p>
            <Link to="/contact" className="text-primary font-semibold hover:text-primary/80 transition-colors">
              Contact Support Team →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;

