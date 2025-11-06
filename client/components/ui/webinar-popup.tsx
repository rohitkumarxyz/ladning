import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface WebinarPopupProps {
  onClose: () => void;
}

// Target date: November 16, 2025 at 8:00 PM IST
const TARGET_DATE = new Date(2025, 10, 16, 20, 0, 0).getTime(); // Month is 0-indexed (10 = November)

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/30 rounded-lg sm:rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-1 text-center leading-tight">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground font-semibold text-center uppercase tracking-wide">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function WebinarPopup({ onClose }: WebinarPopupProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate phone number
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!phoneNumber.trim()) {
      setError("Please enter your phone number");
      return;
    }
    if (!phoneRegex.test(phoneNumber.replace(/\s/g, ""))) {
      setError("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    console.log("WebinarPopup component mounted");
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="webinar-popup-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Premium backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Popup Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-[98%] sm:max-w-[95%] sm:max-w-lg md:max-w-2xl mx-auto bg-card border border-border rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
        >
          {/* Premium gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-50 pointer-events-none" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/80 hover:bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 group"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:text-primary transition-colors" />
          </button>

          <div className="relative">
            {/* Premium Top Banner Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background border-b border-border/50">
              {/* Animated background elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/30 blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              
              <div className="relative px-3 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8 lg:py-12">
                {/* Webinar Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border border-primary/30 mb-3 sm:mb-4"
                >
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-full w-full bg-red-600"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-primary">Upcoming Webinar</span>
                </motion.div>

                {/* Webinar Title */}
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mb-2 sm:mb-3 leading-tight"
                >
                  Master Stock Market
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                    Trading Strategies
                  </span>
                </motion.h2>

                {/* Webinar Description */}
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-xl"
                >
                  Join our exclusive webinar and learn from expert traders. Discover proven strategies for profitable trading.
                </motion.p>

                {/* Webinar Details */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm md:text-base"
                >
                  <div className="flex items-center gap-2 text-foreground">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-semibold">Nov 16, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold">8:00 PM IST</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-semibold">Live Session</span>
                  </div>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 sm:mt-6 md:mt-8"
                >
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mb-3 sm:mb-4 text-center font-semibold">
                    Event Starts In
                  </p>
                  <CountdownTimer />
                </motion.div>
              </div>
            </div>

            {/* Form Section */}
            <div className="px-3 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-card flex-1">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    You're Registered!
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    We'll send you the webinar details shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm sm:text-base font-bold text-foreground mb-2"
                    >
                      Reserve Your Spot
                    </label>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5">
                      Enter your phone number to receive webinar link and reminders
                    </p>
                    <div className="relative group">
                      {/* Phone Icon */}
                      <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-colors duration-300 group-focus-within:text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className={cn(
                          "w-full h-14 sm:h-16 pl-11 sm:pl-12 pr-4 text-sm sm:text-base font-medium",
                          "bg-card border-2 rounded-lg sm:rounded-xl",
                          "text-foreground placeholder:text-muted-foreground",
                          "focus:border-border focus:ring-0 focus:outline-none",
                          "transition-all duration-300",
                          "hover:border-border/80 hover:bg-card/80",
                          error
                            ? "border-destructive focus:border-destructive"
                            : "border-border",
                          isSubmitting && "opacity-60 cursor-not-allowed"
                        )}
                        disabled={isSubmitting}
                      />
                    </div>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-destructive flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {error}
                      </motion.p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full h-12 sm:h-14 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl",
                      "bg-primary hover:bg-primary/90 text-primary-foreground",
                      "transition-all duration-300",
                      "disabled:opacity-50 disabled:cursor-not-allowed",
                      "relative overflow-hidden group"
                    )}
                  >
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Registering...
                        </>
                      ) : (
                        <>
                          Reserve My Spot
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </Button>

                  <p className="text-[10px] sm:text-xs text-center text-muted-foreground px-2">
                    By registering, you agree to receive webinar updates via SMS/WhatsApp
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

