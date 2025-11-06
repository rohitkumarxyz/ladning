import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Ticket } from "lucide-react";
import { useWebinarPopupContext } from "@/contexts/WebinarPopupContext";

// Target date: November 16, 2025 at 8:00 PM (local time)
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
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="relative bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border-2 border-primary/40 rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-8 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-2 text-center leading-tight">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-foreground font-bold text-center uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function MasterClass() {
  const { openPopup } = useWebinarPopupContext();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-tight relative z-10 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <motion.header
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-foreground">Master </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Classes
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our exclusive live master classes and learn directly from industry experts.
          </p>
        </motion.header>

        {/* Banner Image - Clean and Simple */}
        <motion.div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[350px] sm:h-[550px] md:h-[600px] overflow-hidden">
            <img
              src="/Banner/banner1.png"
              alt="Master Class Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
          </div>
        </motion.div>

        {/* Event Details Card */}
        <motion.div
          className="max-w-5xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
            {/* Event Date & Time */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 sm:gap-3 bg-background/60 backdrop-blur-sm border border-border rounded-full px-5 sm:px-7 py-3 sm:py-4 shadow-md">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <span className="text-base sm:text-lg font-bold text-foreground">
                  16 November 2025
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-background/60 backdrop-blur-sm border border-border rounded-full px-5 sm:px-7 py-3 sm:py-4 shadow-md">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <span className="text-base sm:text-lg font-bold text-foreground">
                  8:00 PM
                </span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8">
              <p className="text-base sm:text-lg text-muted-foreground mb-6 text-center font-semibold">
                Event Starts In
              </p>
              <CountdownTimer />
            </div>

            {/* Book Ticket Button */}
            <div className="flex justify-center">
              <Button
                onClick={openPopup}
                size="lg"
                className="px-8 sm:px-12 py-6 sm:py-7 text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative z-10 flex items-center gap-3">
                  <Ticket className="w-5 h-5 sm:w-6 sm:h-6" />
                  Book Your Ticket Now
                </span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
            About Master Classes
          </h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-base text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-lg">What are Master Classes?</h4>
              <p className="leading-relaxed">
                Master Classes are exclusive live sessions where industry experts share their knowledge, 
                strategies, and real-world experiences. These interactive sessions allow you to learn directly 
                from the masters and get your questions answered in real-time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-lg">How to Join?</h4>
              <p className="leading-relaxed">
                Simply click the "Book Your Ticket Now" button and fill in your details. You'll receive 
                a confirmation and the meeting link will be sent to you. Make sure to join a few minutes 
                early to ensure a smooth experience. All classes are recorded and available for replay.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
