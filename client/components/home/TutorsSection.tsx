import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, GraduationCap, Briefcase, Star, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface Tutor {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  image: string;
  experience: string;
  certifications: string[];
  achievements?: string[];
  sebiRegistered?: string;
}

const tutors: Tutor[] = [
  {
    id: "1",
    name: "PARANG MEHTA",
    role: "Founder & CEO",
    title: "Founder & CEO, Tradeneeti Technologies",
    bio: "Hello everyone! I'm Parang, a SEBI and NISM registered and certified research analyst with over 10 years of experience in trading and investing. Specializing in institutional stock trading, technical analysis, and algorithmic strategies. With an MBA in Finance and pursuing CFA Level III, I bring a unique blend of academic excellence and practical market expertise.",
    image: "/tutor.png",
    experience: "10+ Years",
    certifications: ["SEBI Registered", "NISM Certified", "MBA Finance", "CFA Level III"],
    achievements: ["10,000+ Students Trained", "95% Success Rate"],
    sebiRegistered: "SEBI Registered Research Analyst INH000013925",
  },
  {
    id: "2",
    name: "PRIYA SHARMA",
    role: "Head of Education",
    title: "Senior Trading Mentor & Course Director",
    bio: "Expert in options trading strategies and risk management with 8+ years of experience. Specializes in teaching beginners and advanced traders the art of profitable trading. Passionate about making complex trading concepts accessible to everyone.",
    image: "/tutor.png",
    experience: "8+ Years",
    certifications: ["NISM Certified", "Options Trading Expert", "Risk Management Specialist"],
    achievements: ["5,000+ Students Trained", "Expert Mentor"],
  },
  {
    id: "3",
    name: "AMIT PATEL",
    role: "Technical Analysis Expert",
    title: "Chief Technical Analyst & Mentor",
    bio: "Professional technical analyst with extensive experience in chart patterns, indicators, and market analysis. Helps traders master technical analysis for consistent profits. Known for simplifying complex chart patterns and market movements.",
    image: "/tutor.png",
    experience: "12+ Years",
    certifications: ["Technical Analysis Expert", "Chart Pattern Specialist", "Market Analyst"],
    achievements: ["15,000+ Students Trained", "Top Rated Mentor"],
  },
  {
    id: "4",
    name: "SNEHA REDDY",
    role: "Algo Trading Specialist",
    title: "Algorithmic Trading Expert & Mentor",
    bio: "Specialized in algorithmic trading and automated strategies. Expert in building and backtesting trading systems for institutional-level performance. Combines technical expertise with practical market knowledge.",
    image: "/tutor.png",
    experience: "9+ Years",
    certifications: ["Algo Trading Expert", "Python Developer", "Quantitative Analyst"],
    achievements: ["3,000+ Students Trained", "Algorithm Expert"],
  },
];

export default function TutorsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % tutors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTutor = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % tutors.length);
  };

  const prevTutor = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + tutors.length) % tutors.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const currentTutor = tutors[index];

  return (
    <section
      id="tutors"
      className="relative overflow-hidden bg-background py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-0"
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
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Expert Mentors</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-3 sm:mb-4 px-2 sm:px-0">
            <span className="text-foreground">Meet Your </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Mentor
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 sm:px-0">
            Learn from industry experts with years of experience in trading, technical analysis, and market strategies.
          </p>
        </motion.div>

        {/* Mobile: Grid Layout, Desktop: Slider */}
        {/* Mobile Grid View */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
          {tutors.map((tutor) => (
            <motion.div
              key={tutor.id}
              className="bg-card border border-border rounded-2xl p-4 sm:p-6 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col gap-4">
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary/95 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1.5">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-bold text-white">{tutor.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                    {tutor.name}
                  </h3>
                  <p className="text-sm sm:text-base text-primary font-semibold mb-2">
                    {tutor.role}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                    {tutor.bio}
                  </p>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {tutor.certifications.slice(0, 2).map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-[10px] font-semibold text-primary"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{cert}</span>
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  {tutor.achievements && tutor.achievements.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                      <span className="font-semibold">{tutor.achievements[0]}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Slider View */}
        <div className="hidden md:block relative mt-10 md:mt-16">
          {/* Glowing Background Effect */}
          <div className="absolute -inset-x-4 -inset-y-8 md:-inset-x-8 md:-inset-y-12">
            <div className="w-full h-full max-w-6xl mx-auto rounded-3xl bg-primary/5 blur-3xl opacity-60"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <motion.button
              onClick={prevTutor}
              className="absolute left-2 sm:left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-card/95 backdrop-blur-md border-2 border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:bg-card shadow-xl hover:shadow-2xl hover:shadow-primary/30 group"
              aria-label="Previous tutor"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-foreground group-hover:text-primary transition-colors" />
            </motion.button>

            <motion.button
              onClick={nextTutor}
              className="absolute right-2 sm:right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-card/95 backdrop-blur-md border-2 border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:bg-card shadow-xl hover:shadow-2xl hover:shadow-primary/30 group"
              aria-label="Next tutor"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-foreground group-hover:text-primary transition-colors" />
            </motion.button>

            {/* Tutor Card */}
            <div className="relative overflow-hidden" style={{ minHeight: 'auto' }}>
              <div className="min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: "tween",
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                    opacity: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                  className="relative group w-full"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Glowing Border Effect */}
                  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/40 via-primary/30 to-primary/40 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-xl opacity-50"></div>

                  {/* Main Card - Bigger and Premium */}
                  <div className="relative bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border-2 border-primary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16 shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] lg:grid-cols-[1fr_400px] gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Content Section - Left */}
                        <div className="flex flex-col order-2 md:order-1">
                          {/* Name */}
                          <motion.h3
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-2 sm:mb-3 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            {currentTutor.name}
                          </motion.h3>

                          {/* Role */}
                          <motion.p
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-bold mb-2 sm:mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            {currentTutor.role}
                          </motion.p>

                          {/* Title */}
                          <motion.p
                            className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >
                            {currentTutor.title}
                          </motion.p>

                          {/* Bio */}
                          <motion.p
                            className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                          >
                            {currentTutor.bio}
                          </motion.p>

                          {/* Certifications Row */}
                          <motion.div
                            className="flex flex-wrap gap-2 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                          >
                            {currentTutor.certifications.map((cert, certIndex) => (
                              <motion.div
                                key={cert}
                                className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/30 text-[10px] sm:text-xs font-semibold text-primary"
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

                          {/* SEBI Badge */}
                          {currentTutor.sebiRegistered && (
                            <motion.div
                              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/95 backdrop-blur-sm border-2 border-primary/60 shadow-xl max-w-fit"
                              initial={{ opacity: 0, scale: 0.9, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                                <Award className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-sm font-bold text-white">
                                {currentTutor.sebiRegistered}
                              </span>
                            </motion.div>
                          )}

                          {/* Achievements */}
                          {currentTutor.achievements && (
                            <motion.div
                              className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border/30"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.9 }}
                            >
                              {currentTutor.achievements.map((achievement, achIndex) => (
                                <motion.div
                                  key={achievement}
                                  className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 1 + achIndex * 0.1 }}
                                >
                                  <Star className="w-4 h-4 text-primary fill-primary" />
                                  <span className="font-semibold">{achievement}</span>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </div>

                        {/* Image Section - Right, No Border */}
                        <motion.div
                          className="relative order-1 md:order-2"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
                        >
                          <div className="relative">
                            {/* Image without border outline */}
                            <img
                              src={currentTutor.image}
                              alt={currentTutor.name}
                              className="w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-xl sm:rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>

                            {/* Experience Badge Overlay */}
                            <motion.div
                              className="absolute top-6 right-6 bg-primary/95 backdrop-blur-md border border-primary/30 rounded-full px-4 py-2.5 shadow-xl"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-white" />
                                <span className="text-sm font-bold text-white">{currentTutor.experience}</span>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-3 mt-10 md:mt-12">
              {tutors.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`relative transition-all duration-300 ${
                    index === i
                      ? "w-12 h-2 rounded-full bg-primary"
                      : "w-2 h-2 rounded-full bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to tutor ${i + 1}`}
                >
                  {index === i && (
                    <motion.div
                      layoutId="activeTutorDot"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tutor Counter */}
            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="text-base md:text-lg font-semibold text-foreground">
                {index + 1} / {tutors.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
