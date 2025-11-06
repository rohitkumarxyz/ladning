import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tradeneeti transformed my trading journey completely. The strategies I learned here have increased my profits by 300% in just 6 months.",
    name: "Rajesh Kumar",
    role: "Professional Trader",
    image: "/man-showing-thumb.jpg",
    rating: 5,
  },
  {
    quote:
      "The technical analysis course was incredibly practical. I now understand market patterns and make better trading decisions.",
    name: "Priya Sharma",
    role: "Day Trader",
    image: "/girl-donethumbs.jpg",
    rating: 5,
  },
  {
    quote:
      "Best investment in my trading education. The instructors are experts and the live webinars are incredibly valuable.",
    name: "Amit Patel",
    role: "Options Trader",
    image: "/man-showing-thumb.jpg",
    rating: 5,
  },
  {
    quote:
      "The risk management strategies I learned saved me from major losses. Highly recommended for anyone serious about trading.",
    name: "Sneha Reddy",
    role: "Swing Trader",
    image: "/girl-donethumbs.jpg",
    rating: 5,
  },
  {
    quote:
      "From beginner to confident trader in just 3 months. The step-by-step approach and mentorship made all the difference.",
    name: "Vikram Singh",
    role: "Futures Trader",
    image: "/man-showing-thumb.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // On mobile, show one testimonial at a time
  // On desktop, show three testimonials
  const currentTestimonials = isMobile
    ? [testimonials[index]]
    : [
        testimonials[index],
        testimonials[(index + 1) % testimonials.length],
        testimonials[(index + 2) % testimonials.length],
      ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-12 px-4 md:py-24 md:px-0"
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
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-semibold text-primary">10K+ Happy Students</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4">
            <span className="text-foreground">What Our </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their financial future with Tradeneeti.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative mt-10 md:mt-16">
          {/* Glowing Background Effect */}
          <div className="absolute -inset-x-4 -inset-y-8 md:-inset-x-8 md:-inset-y-12">
            <div className="w-full h-full max-w-6xl mx-auto rounded-3xl bg-primary/5 blur-3xl opacity-60"></div>
          </div>

          {isMobile ? (
            /* Mobile Slider - One at a time */
            <div className="relative overflow-hidden">
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg overflow-hidden">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={index}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: {
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                          mass: 0.8,
                        },
                        opacity: {
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        },
                      }}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl border border-border/50 p-6 md:p-8 hover:border-primary/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/10"
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {/* Premium Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

                      {/* Quote Icon */}
                      <div className="relative z-10 mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                          <Quote className="w-6 h-6 text-primary fill-primary/20" />
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="relative z-10 flex items-center gap-1 mb-4">
                        {[...Array(testimonials[index].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-primary fill-primary"
                          />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <blockquote className="relative z-10 mb-6">
                        <p className="text-base md:text-lg leading-relaxed text-foreground font-medium">
                          {testimonials[index].quote}
                        </p>
                      </blockquote>

                      {/* Author Info */}
                      <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-border/30">
                        <div className="relative">
                          <img
                            className="flex-shrink-0 object-cover rounded-full w-12 h-12 md:w-14 md:h-14 border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                            src={testimonials[index].image}
                            alt={testimonials[index].name}
                          />
                          <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base md:text-lg font-bold text-foreground truncate">
                            {testimonials[index].name}
                          </p>
                          <p className="mt-0.5 text-sm text-muted-foreground truncate">
                            {testimonials[index].role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop Grid - Three at a time */
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-8 md:grid-cols-3">
              <AnimatePresence mode="wait">
                {currentTestimonials.map((testimonial, cardIndex) => (
                  <motion.div
                    key={`desktop-${index}-${cardIndex}`}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl border border-border/50 p-6 md:p-8 hover:border-primary/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/10"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{
                      duration: 0.6,
                      delay: cardIndex * 0.15,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

                    {/* Quote Icon */}
                    <div className="relative z-10 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <Quote className="w-6 h-6 text-primary fill-primary/20" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="relative z-10 flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-primary fill-primary"
                        />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="relative z-10 mb-6">
                      <p className="text-base md:text-lg leading-relaxed text-foreground font-medium">
                        {testimonial.quote}
                      </p>
                    </blockquote>

                    {/* Author Info */}
                    <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-border/30">
                      <div className="relative">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-12 h-12 md:w-14 md:h-14 border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base md:text-lg font-bold text-foreground truncate">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                  index === i
                    ? "w-8 bg-primary scale-110"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              >
                {index === i && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          {isMobile && (
            <motion.div 
              className="flex justify-center items-center gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-card border-2 border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:bg-card/80 group shadow-lg hover:shadow-xl hover:shadow-primary/20"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6 text-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <span className="text-base font-semibold text-foreground min-w-[60px] text-center">
                {index + 1} / {testimonials.length}
              </span>
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-card border-2 border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:bg-card/80 group shadow-lg hover:shadow-xl hover:shadow-primary/20"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6 text-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
