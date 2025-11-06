import { motion } from "framer-motion";
import { allCourses } from "@/data/courses";
import type { EnhancedCourse } from "@/components/home/ProgramsSection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themeColors = {
  green: "from-green-500 to-emerald-600",
  yellow: "from-yellow-500 to-orange-500",
  blue: "from-blue-500 to-cyan-600",
  red: "from-red-500 to-rose-600",
};

// Premium Course Card Component (same as ProgramsSection)
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

export default function Programs() {
  // Using static data only - API integration will be added in the future
  const courses: EnhancedCourse[] = allCourses;

  return (
    <div className="container-tight py-16 md:py-24">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-2">Programs</h1>
          <p className="mt-3 text-foreground/70">
            Browse curated programs and courses designed for measurable
            outcomes.
          </p>
        </div>
      </motion.header>

      {courses.length === 0 && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-foreground/70">
            No courses available at the moment.
          </p>
        </motion.div>
      )}

      {courses.length > 0 && (
        <motion.section
          className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CourseCardEnhanced course={course} />
            </motion.div>
          ))}
        </motion.section>
      )}
    </div>
  );
}
