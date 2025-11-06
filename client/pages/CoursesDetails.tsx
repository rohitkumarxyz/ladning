import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Play, Star, Users, BookOpen, Clock, Award, CheckCircle2, Quote, Radio } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EnhancedCourse } from "@/components/home/ProgramsSection";
import { getCourseById } from "@/data/courses";

const themeColors = {
  green: "from-green-500 to-emerald-600",
  yellow: "from-yellow-500 to-orange-500",
  blue: "from-blue-500 to-cyan-600",
  red: "from-red-500 to-rose-600",
};

export default function CourseDetail() {
  // ALL HOOKS MUST BE CALLED AT THE TOP, BEFORE ANY CONDITIONAL RETURNS
  const { id } = useParams();
  const [mockCourse, setMockCourse] = useState<EnhancedCourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = () => {
      try {
        if (!id) {
          setLoading(false);
          setError("No course ID provided");
          return;
        }

        console.log("Fetching course with ID:", id);
        
        // Use only static data from local courses
        const foundCourse = getCourseById(id);
        console.log("Found course:", foundCourse);
        
        if (foundCourse) {
          setMockCourse(foundCourse);
          setLoading(false);
          setError(null);
        } else {
          console.error("Course not found with ID:", id);
          setLoading(false);
          setError(`Course not found: ${id}`);
        }
      } catch (err) {
        console.error("Error fetching course:", err);
        setLoading(false);
        setError(err instanceof Error ? err.message : "An error occurred while loading the course");
      }

      // API integration will be added in the future
      // For now, we're using static data only
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="container-tight py-24 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading course...</p>
        </div>
      </div>
    );
  }

  if (error || !mockCourse) {
    return (
      <div className="container-tight py-24 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error || "Course not found"}</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Extract course data with safety checks
  const courseTitle = mockCourse?.title || "Course";
  const courseCategory = mockCourse?.category || "Course";
  const courseDescription = "Technical Analysis A to Z explained for beginners: Learn to trade the stock market with the right technical tools and indicators. In this technical analysis masterclass, we covered everything that you wished to learn about technical trading.";
  const courseRating = mockCourse?.rating || 0;
  const courseReviews = mockCourse?.reviews || 0;
  const courseEnrollments = mockCourse?.enrollments || 0;
  const courseCurrentPrice = mockCourse?.currentPrice ?? 0;
  const courseOriginalPrice = mockCourse?.originalPrice ?? 0;
  const instructorName = mockCourse?.instructor?.name || "Instructor";
  const instructorImage = mockCourse?.instructor?.image || "/man-showing-thumb.jpg";
  const courseThemeColor = mockCourse?.themeColor || "green";
  const courseBadge = mockCourse?.badge;
  const courseIsOpen = mockCourse?.isOpen !== false;
  const isLiveClass = courseCategory === "Live Class";
  const courseClassTiming = mockCourse?.classTiming || undefined;
  const discountPercent = courseOriginalPrice > 0 ? Math.round(((courseOriginalPrice - courseCurrentPrice) / courseOriginalPrice) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <motion.div
        className="container-tight py-4 border-b border-border"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/courses" className="hover:text-foreground transition-colors">
            All Courses
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground truncate max-w-md">{courseTitle}</span>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="container-tight py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_450px]"
        >
          {/* Left Column - Course Info */}
          <div className="space-y-6">
            {/* Category Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 flex-wrap"
            >
              <span className={cn(
                "inline-block px-4 py-2 rounded-lg font-medium text-sm border",
                isLiveClass
                  ? "bg-red-500/20 text-red-400 border-red-400/30"
                  : "bg-primary/20 text-primary border-primary/30"
              )}>
                {courseCategory}
              </span>
              {courseBadge && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary font-medium text-sm border border-primary/30">
                  {isLiveClass && (
                    <>
                      <Radio className="w-4 h-4 text-red-400" />
                      <span className="relative">
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        LIVE
                      </span>
                    </>
                  )}
                  {!isLiveClass && <Shield className="w-4 h-4" />}
                  {!isLiveClass && courseBadge}
                </span>
              )}
            </motion.div>

            {/* Course Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              {courseTitle}
            </motion.h1>

            {/* Course Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              {mockCourse?.description || courseDescription}
            </motion.p>

            {/* Rating & Enrollments */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 sm:gap-6 flex-wrap text-sm sm:text-base"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < Math.floor(courseRating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted fill-muted"
                      )}
                    />
                  ))}
                </div>
                <span className="text-lg font-bold text-foreground">
                  {courseRating.toFixed(1)}
                </span>
              </div>
              <span className="text-muted-foreground">
                ({courseReviews} reviews)
              </span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span>{courseEnrollments.toLocaleString()}+ Enrollments</span>
              </div>
            </motion.div>

            {/* Live Class Timing */}
            {isLiveClass && courseClassTiming && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm"
              >
                <Clock className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-sm font-semibold text-red-400 mb-1">Class Schedule</p>
                  <p className="text-foreground font-medium">{courseClassTiming}</p>
                </div>
              </motion.div>
            )}

            {/* Pricing Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {isLiveClass ? (
                <Button
                  size="lg"
                  disabled={!courseIsOpen}
                  onClick={() => navigate(`/contact?course=${encodeURIComponent(courseTitle)}&type=live-class`)}
                  className={cn(
                    "w-full md:w-auto px-8 py-6 text-lg font-bold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105",
                    !courseIsOpen && "opacity-60 cursor-not-allowed"
                  )}
                >
                  {courseIsOpen ? (
                    <>
                      <Radio className="w-5 h-5 mr-2 inline-block animate-pulse" />
                      Join Free Live Class Now
                    </>
                  ) : (
                    "Coming Soon"
                  )}
                </Button>
              ) : (
                <>
                  <Button
                    size="lg"
                    disabled={!courseIsOpen}
                    onClick={() => navigate(`/contact?course=${encodeURIComponent(courseTitle)}&type=course`)}
                    className={cn(
                      "w-full md:w-auto px-8 py-6 text-lg font-bold bg-gradient-to-r",
                      themeColors[courseThemeColor as keyof typeof themeColors] || themeColors.green,
                      "text-white border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105",
                      !courseIsOpen && "opacity-60 cursor-not-allowed"
                    )}
                  >
                    {courseIsOpen ? "Register Now" : "Coming Soon"}
                  </Button>

                </>
              )}
            </motion.div>

            {/* Instructor Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border"
            >
              <div className="relative">
                <img
                  src={instructorImage}
                  alt={instructorName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{instructorName}</h3>
                <p className="text-muted-foreground">
                  {mockCourse?.instructor?.qualifications?.[0] || "Options Trader, Instructor, FinGrad"}
                </p>
              </div>
            </motion.div>

            {/* Course Features */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold text-foreground">20+ Hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <BookOpen className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Lessons</p>
                  <p className="font-semibold text-foreground">50+ Modules</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Certificate</p>
                  <p className="font-semibold text-foreground">Included</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Video Thumbnail Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div
              className={cn(
                "relative rounded-2xl overflow-hidden p-8 md:p-10 min-h-[500px] bg-gradient-to-br shadow-2xl",
                !mockCourse?.coverImage && (themeColors[courseThemeColor as keyof typeof themeColors] || themeColors.green)
              )}
            >
              {/* Cover Image Background */}
              {mockCourse?.coverImage && (
                <div className="absolute inset-0">
                  <img
                    src={mockCourse.coverImage}
                    alt={courseTitle}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
                </div>
              )}
              {/* Content positioned relative to overlay */}
              <div className="relative z-10">
                {/* Course Badge */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-sm font-medium text-white/90 uppercase tracking-wide">
                    {isLiveClass ? "Live Class" : "Course"}
                  </span>
                  {courseBadge && (
                    <div className={cn(
                      "flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30",
                      isLiveClass && "bg-red-500/30 border-red-400/50"
                    )}>
                      {isLiveClass ? (
                        <>
                          <Radio className="w-3 h-3 text-white animate-pulse" />
                          <span className="text-xs font-medium text-white">LIVE</span>
                        </>
                      ) : (
                        <>
                          <Shield className="w-3 h-3 text-white" />
                          <span className="text-xs font-medium text-white">
                            {courseBadge}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Course Title on Card */}
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-8">
                  {courseTitle?.split(":")?.[0] || courseTitle || "Course"}
                </h3>

              {/* Play Button */}
              <div className="flex items-center justify-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center hover:bg-white/30 transition-all shadow-lg"
                >
                  <Play className="w-10 h-10 text-white fill-white ml-1" />
                </motion.button>
              </div>

                {/* Instructor Info on Card */}
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">
                    {instructorName}
                  </span>
                  <img
                    src={instructorImage}
                    alt={instructorName}
                    className="w-14 h-14 rounded-full border-2 border-white/40 object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Gradient Overlay - only if no cover image */}
              {!mockCourse?.coverImage && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Curriculum Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 space-y-6"
        >
          <h2 className="text-3xl font-bold text-foreground">Curriculum</h2>
          
          {mockCourse?.modules && mockCourse.modules.length > 0 ? (
            <div className="space-y-6">
              {mockCourse.modules.map((module, moduleIndex) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + moduleIndex * 0.1 }}
                  className="rounded-xl bg-card border border-border overflow-hidden"
                >
                  {/* Module Header */}
                  <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {module.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {module.classCount} Classes • ₹{module.fee.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">
                          {module.topics.length} Topics
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Module Topics */}
                  <div className="p-6 space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <motion.div
                        key={topicIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 + moduleIndex * 0.1 + topicIndex * 0.05 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-all group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground font-medium">{topic}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {[
                "Introduction to Technical Analysis",
                "Chart Patterns & Trends",
                "Technical Indicators Explained",
                "Support & Resistance Levels",
                "Trading Strategies & Risk Management",
                "Live Trading Examples",
                "Advanced Techniques",
                "Final Project & Certification",
              ].map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{lesson}</h3>
                    <p className="text-sm text-muted-foreground">2-3 hours • Interactive content</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Tutor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-20"
        >
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/40 via-primary/30 to-primary/40 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-xl opacity-50"></div>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-8 md:p-10 lg:p-16 shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="grid md:grid-cols-[1fr_350px] lg:grid-cols-[1fr_400px] gap-8 md:gap-12 lg:gap-16 items-center">
                  {/* Content Section - Left */}
                  <div className="flex flex-col order-2 md:order-1">
                    {/* Name */}
                    <motion.h3
                      className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-3 tracking-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {instructorName}
                    </motion.h3>

                    {/* Role */}
                    <motion.p
                      className="text-xl md:text-2xl lg:text-3xl text-primary font-bold mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      Course Instructor
                    </motion.p>

                    {/* Title */}
                    <motion.p
                      className="text-base md:text-lg text-muted-foreground mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {mockCourse?.instructor?.qualifications?.[0] || "Options Trader, Instructor, FinGrad"}
                    </motion.p>

                    {/* Bio */}
                    <motion.p
                      className="text-base md:text-lg text-foreground leading-relaxed mb-8 max-w-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {mockCourse?.instructor?.bio || "Expert instructor with years of experience in trading and teaching. Specializing in making complex trading concepts accessible to everyone. Passionate about helping students achieve their trading goals."}
                    </motion.p>

                    {/* Certifications Row */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {(mockCourse?.instructor?.qualifications || ["SEBI Registered", "NISM Certified", "Trading Expert"]).map((cert, certIndex) => (
                        <motion.div
                          key={cert}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.7 + certIndex * 0.1 }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{cert}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                      className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <motion.div
                        className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1 }}
                      >
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="font-semibold">10,000+ Students Trained</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                      >
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="font-semibold">95% Success Rate</span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Image Section - Right */}
                  <motion.div
                    className="relative order-1 md:order-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <div className="relative">
                      <img
                        src={instructorImage}
                        alt={instructorName}
                        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>

                      {/* Experience Badge Overlay */}
                      <motion.div
                        className="absolute top-6 right-6 bg-primary/95 backdrop-blur-md border border-primary/30 rounded-full px-4 py-2.5 shadow-xl"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                      >
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-white" />
                          <span className="text-sm font-bold text-white">10+ Years</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

    
      </div>
    </div>
  );
}