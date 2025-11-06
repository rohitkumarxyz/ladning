import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CourseModule {
  id: string;
  title: string;
  classCount: number;
  fee: number;
  topics: string[];
}

export interface EnhancedCourse {
  id: string;
  title: string;
  description?: string;
  instructor: {
    name: string;
    image: string;
    bio?: string;
    qualifications?: string[];
  };
  currentPrice: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  enrollments: number;
  coverImage?: string; // Cover image for the course
  themeColor: "green" | "yellow" | "blue" | "red";
  badge?: string;
  category: "Popular" | "Courses" | "Webinars" | "Live Class";
  isOpen?: boolean; // Whether the course is available for enrollment
  classTiming?: string; // Timing for live classes (e.g., "Every Monday & Wednesday, 7:00 PM - 9:00 PM")
  duration?: string; // Course duration (e.g., "15 Classes", "20+ Hours")
  modules?: CourseModule[]; // Course modules with topics
}

interface ProgramsSectionProps {
  courses: EnhancedCourse[];
}

const themeColors = {
  green: "from-green-500 to-emerald-600",
  yellow: "from-yellow-500 to-orange-500",
  blue: "from-blue-500 to-cyan-600",
  red: "from-red-500 to-rose-600",
};

export default function ProgramsSection({ courses }: ProgramsSectionProps) {
  const [activeTab, setActiveTab] = useState("Popular");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const tabs = ["Popular", "Courses", "Live Class"];

  // Filter courses based on active tab (excluding Webinars - they have their own section)
  const filteredCourses = courses.filter((course) => {
    if (course.category === "Webinars") return false; // Exclude webinars from courses section
    if (activeTab === "Popular") {
      return course.category === "Popular" || course.enrollments > 2000; // Show popular courses
    }
    return course.category === activeTab;
  });

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
  }, [filteredCourses]);

  useEffect(() => {
    // Reset scroll when tab changes
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
    checkScrollability();
  }, [activeTab]);

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
      id="programs"
      className="container-tight py-12 px-4 md:py-24 md:px-0 bg-background"
    >
      <motion.div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="pl-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Explore
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Courses & Webinars
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 md:gap-4 flex-wrap items-center">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300",
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-card border border-border"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Horizontal Scrollable Cards with Blur Indicators */}
      <div className="relative group">
        {/* Left Blur Gradient */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none z-10" />
        )}

        {/* Right Blur Gradient */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background via-background/60 to-transparent pointer-events-none z-10" />
        )}

        {/* Scroll Arrow Buttons - Always Visible */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-card/95 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-card transition-all hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronRight className="w-5 h-5 rotate-180 text-foreground" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ 
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="w-[calc(100%-24px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-12px)] lg:w-[calc(33.333%-12px)] min-w-[260px] sm:min-w-[280px] lg:min-w-[300px] flex-shrink-0 first:ml-4 md:first:ml-8 last:mr-4 md:last:mr-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CourseCardEnhanced course={course} />
              </motion.div>
            ))
          ) : (
            <div className="w-full text-center py-12">
              <p className="text-muted-foreground text-lg">
                No {activeTab === "Popular" ? "popular" : activeTab.toLowerCase()} available at the moment.
              </p>
            </div>
          )}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-card/95 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg hover:bg-card transition-all hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        )}
      </div>
    </section>
  );
}

function CourseCardEnhanced({ course }: { course: EnhancedCourse }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    // Only navigate if not clicking on the button
    const target = e.target as HTMLElement;
    if (target.closest('button')) {
      return; // Let button handle its own click
    }
    // Navigate to course detail page
    navigate(`/courses/${course.id}`);
  };

  return (
    <motion.div
      className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Cover Image Section */}
      <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gradient-to-br">
        {course.coverImage ? (
          <img
            src={course.coverImage}
            alt={course.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className={cn("w-full h-full", themeColors[course.themeColor])} />
        )}
      </div>

      {/* Bottom Dark Section */}
      <div className="p-4 md:p-6 bg-background">
        {/* Course Title */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {course.title}
        </p>

        {/* Rating and Enrollments */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.755 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({course.reviews} reviews)
            </span>
          </div>
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
            {course.enrollments >= 1000
              ? `${(course.enrollments / 1000).toFixed(1)}K`
              : course.enrollments.toLocaleString()}{" "}
            Enrollments
          </span>
        </div>

        {/* Register Button */}
        <motion.div
          whileHover={{ scale: course.isOpen !== false ? 1.02 : 1 }}
          whileTap={{ scale: course.isOpen !== false ? 0.98 : 1 }}
        >
          {course.isOpen === false ? (
            <Button
              disabled
              className="w-full border transition-all duration-300 font-medium bg-muted text-muted-foreground border-border cursor-not-allowed opacity-60"
            >
              Coming Soon
            </Button>
          ) : (
            <Button
              className={cn(
                "w-full border transition-all duration-300 font-medium bg-primary hover:bg-primary/90 text-primary-foreground border-primary hover:border-primary/80 shadow-lg shadow-primary/30 hover:shadow-primary/50"
              )}
              variant="default"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Navigate to contact page with course info
                window.location.href = `/contact?course=${encodeURIComponent(course.title)}&type=${course.category === "Live Class" ? "live-class" : "course"}`;
              }}
            >
              Register Now
            </Button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
