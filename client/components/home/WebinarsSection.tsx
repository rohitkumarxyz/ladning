import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Radio, Clock, Users, Calendar, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WebinarData {
  id: string;
  title: string;
  instructor: {
    name: string;
    image: string;
  };
  date: string;
  time: string;
  duration: string;
  attendees: number;
  isLive?: boolean;
  description?: string;
}

interface WebinarsSectionProps {
  webinars: WebinarData[];
}

export default function WebinarsSection({ webinars }: WebinarsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        scrollElement.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, [webinars]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="webinars"
      className="container-tight py-12 px-4 md:py-24 md:px-0 bg-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Radio className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Live Sessions</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Free Live
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Webinars
            </h3>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Join our live interactive webinars and learn from expert traders in real-time. All sessions are completely free!
            </p>
          </div>
        </motion.div>

        {/* Horizontal Scrollable Webinar Cards */}
        <div className="relative group">
          {/* Scroll Arrow Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/95 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-card transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronRight className="w-5 h-5 rotate-180 text-foreground" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {webinars.length > 0 ? (
              webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  className="w-[calc(100%-16px)] sm:w-[calc(50%-16px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-20px)] min-w-[320px] lg:min-w-[350px] flex-shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <WebinarCard webinar={webinar} />
                </motion.div>
              ))
            ) : (
              <div className="w-full text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No webinars scheduled at the moment.
                </p>
              </div>
            )}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/95 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-card transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function WebinarCard({ webinar }: { webinar: WebinarData }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer block group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glowing Border Effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      {/* Live Badge */}
      {webinar.isLive && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-red-500/95 backdrop-blur-sm rounded-full px-3 py-1.5 border border-red-400/50 shadow-lg">
          <div className="relative">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
          <span className="text-xs font-bold text-white">LIVE</span>
        </div>
      )}

      {/* Top Section - Image/Video Preview */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 overflow-hidden">
        {/* Video Preview Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/40 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          >
            <Play className="w-10 h-10 text-primary fill-primary" />
          </motion.div>
        </div>

        {/* Instructor Image Overlay */}
        <div className="absolute bottom-4 right-4">
          <div className="w-16 h-16 rounded-full border-2 border-primary/40 overflow-hidden bg-card shadow-lg backdrop-blur-sm">
            <img
              src={webinar.instructor.image}
              alt={webinar.instructor.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>

      {/* Bottom Section - Content */}
      <div className="p-6 bg-background">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-3 line-clamp-2">
          {webinar.title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-muted-foreground mb-4">
          by <span className="font-semibold text-foreground">{webinar.instructor.name}</span>
        </p>

        {/* Description */}
        {webinar.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {webinar.description}
          </p>
        )}

        {/* Webinar Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{webinar.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{webinar.time} ({webinar.duration})</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>{webinar.attendees.toLocaleString()}+ Registered</span>
          </div>
        </div>

        {/* Join Button */}
        <Button
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white border-0 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all font-medium"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Join webinar:", webinar.id);
          }}
        >
          Join Free Webinar
        </Button>
      </div>
    </motion.div>
  );
}
