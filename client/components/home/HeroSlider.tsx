import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brandingColors } from "@/lib/branding-colors";

// Slide data
const slides = [
  {
    id: 2,
    title: "Learn Futures and Options Trading",
    image: "/Banner/banner2.png",
  },
  {
    id: 1,
    title: "Master The Art of Selecting Stocks",
    image: "/Banner/banner1.png",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  }, [currentSlide]);

  // Touch/Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.targetTouches[0];
    setTouchStart(touch.clientX);
    setTouchEnd(touch.clientX); // Initialize touchEnd to same point
    setIsDragging(true);
    setAutoplay(false); // Pause autoplay while swiping
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.targetTouches[0];
    setTouchEnd(touch.clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance for swipe
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    } else {
      // If swipe distance is too small, resume autoplay
      setTimeout(() => setAutoplay(true), 3000);
    }

    setIsDragging(false);
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Mouse drag handlers for desktop
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!mouseStart || !mouseEnd) return;
    
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setIsDragging(false);
    setMouseStart(0);
    setMouseEnd(0);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      zIndex: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
    }),
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="relative w-screen overflow-hidden"
      style={{ 
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}
    >
      <section className="relative w-full overflow-hidden mt-2">
        <div 
          className="relative w-full h-[300px] sm:h-[450px] md:h-[530px] lg:h-[600px] xl:h-[600px] 2xl:h-[650px] overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ 
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y pinch-zoom'
          }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.5, ease: "easeInOut" },
              }}
              className="absolute inset-0 w-full h-full touch-none"
              style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
            >
              <div className="absolute inset-0 w-full h-full" style={{ width: '100vw', maxWidth: '100vw' }}>
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-full block object-cover object-center"
                  style={{ 
                    width: '100vw',
                    maxWidth: '100vw',
                    minWidth: '100vw',
                    height: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    touchAction: 'none'
                  }}
                  draggable={false}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Premium Navigation Dots - Bottom Center */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-2.5">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <motion.button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className="relative focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full transition-all"
                  style={{
                    '--tw-ring-color': brandingColors.primary[500] + '80'
                  } as React.CSSProperties}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {/* Outer ring for active state - Branding color */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: `${brandingColors.primary[500]}99` }}
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 0, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  )}

                  {/* Dot - Branding colors */}
                  <motion.div
                    className={`relative rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'w-3 h-3' 
                        : 'w-2 h-2'
                    }`}
                    style={{
                      backgroundColor: isActive 
                        ? brandingColors.primary[500] 
                        : `${brandingColors.primary[500]}66`,
                    }}
                    animate={{
                      scale: isActive ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      backgroundColor: isActive 
                        ? brandingColors.primary.bright 
                        : `${brandingColors.primary[500]}99`
                    }}
                  >
                    {/* Inner glow for active state - Branding color */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: brandingColors.primary[500] }}
                        animate={{
                          opacity: [0.8, 1, 0.8],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}

                    {/* Shimmer effect for active - Branding color gradient */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full opacity-50"
                        style={{
                          background: `linear-gradient(to right, transparent, ${brandingColors.primary.bright}, transparent)`
                        }}
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 1
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Premium shadow glow for active - Branding color */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full blur-md -z-10"
                      style={{ backgroundColor: brandingColors.primary[500] }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

