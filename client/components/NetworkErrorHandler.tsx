import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NetworkErrorHandlerProps {
  onRetry?: () => void;
  error?: string;
}

const NetworkErrorHandler = ({ onRetry, error }: NetworkErrorHandlerProps) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden rounded-2xl border border-orange-200">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-orange-500/20 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-red-500/20 blur-2xl"></div>
      </div>

      <div className="container-tight px-4 relative z-10">
        <motion.div 
          className="text-center max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Network Error Icon */}
          <motion.div 
            className="mb-6 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-orange-200">
                <div className="text-3xl">📡</div>
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white text-xs">!</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Connection Lost
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {error || "Unable to connect to our trading servers. Please check your internet connection and try again."}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {onRetry && (
              <Button 
                size="sm" 
                className="rounded-full px-6 py-2 btn-anim"
                onClick={onRetry}
              >
                Retry Connection
              </Button>
            )}
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full px-6 py-2 btn-anim"
              >
                Contact Support
              </Button>
            </Link>
          </motion.div>

          {/* Network Status */}
          <motion.div 
            className="mt-6 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>Network Status: Disconnected</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NetworkErrorHandler;

