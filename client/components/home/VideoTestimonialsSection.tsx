import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  videoUrl: string;
  thumbnail?: string;
}

// Helper function to extract YouTube video ID from embed URL
const getYouTubeVideoId = (url: string): string | null => {
  // Handle embed URLs: https://www.youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/youtube\.com\/embed\/([^/?]+)/);
  if (embedMatch) return embedMatch[1];
  
  // Handle watch URLs: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  
  // Handle short URLs: https://youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([^/?]+)/);
  if (shortMatch) return shortMatch[1];
  
  return null;
};

// Helper function to get YouTube thumbnail URL
const getYouTubeThumbnail = (videoUrl: string): string => {
  const videoId = getYouTubeVideoId(videoUrl);
  if (!videoId) return "";
  
  // Try maxresdefault first (highest quality), fallback to hqdefault
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    name: "Alok",
    role: "Attendee, Options Trading Seminar",
    videoUrl: "https://www.youtube.com/embed/8QODghirdak",
  },
  {
    id: "2",
    name: "Participant",
    role: "Options Trading Seminar, Mumbai",
    videoUrl: "https://www.youtube.com/embed/8QODghirdak",
  },
  {
    id: "3",
    name: "Student",
    role: "Trading Course Graduate",
    videoUrl: "https://www.youtube.com/embed/8QODghirdak",
  },
  {
    id: "4",
    name: "Trader",
    role: "Professional Trader",
    videoUrl: "https://www.youtube.com/embed/8QODghirdak",
  },
  {
    id: "5",
    name: "Investor",
    role: "Long-term Investor",
    videoUrl: "https://www.youtube.com/embed/8QODghirdak",
  },
  {
    id: "6",
    name: "Enthusiast",
    role: "Trading Enthusiast",
    videoUrl: "https://www.youtube.com/embed/8QODghirdak",
  },
];

export default function VideoTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [thumbnailErrors, setThumbnailErrors] = useState<Set<string>>(new Set());

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
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      const newScrollLeft =
        scrollRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleVideoClick = (testimonial: VideoTestimonial) => {
    setSelectedVideo(testimonial);
  };

  const handleCloseDialog = () => {
    setSelectedVideo(null);
  };

  const handleThumbnailError = (videoId: string) => {
    setThumbnailErrors((prev) => new Set(prev).add(videoId));
  };

  const getThumbnailUrl = (videoUrl: string): string => {
    const videoId = getYouTubeVideoId(videoUrl);
    if (!videoId) return "";
    
    // If maxresdefault failed, use hqdefault as fallback
    if (thumbnailErrors.has(videoId)) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    
    return getYouTubeThumbnail(videoUrl);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-tight relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Tradeneeti Community
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Stories from real people. See what our students are saying about their trading journey.
          </p>
        </motion.div>

        {/* Video Slider Container */}
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-card/95 backdrop-blur-sm border border-border rounded-full p-2 sm:p-3 shadow-lg hover:bg-card transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-6 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {videoTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="w-[calc(100%-32px)] sm:w-[calc(50%-24px)] md:w-[calc(33.333%-32px)] lg:w-[calc(33.333%-32px)] min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] flex-shrink-0 first:ml-4 md:first:ml-8 last:mr-4 md:last:mr-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative group bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                  {/* Video Container */}
                  <div className="relative aspect-video bg-background overflow-hidden">
                    {/* YouTube Thumbnail */}
                    {getThumbnailUrl(testimonial.videoUrl) ? (
                      <img
                        src={getThumbnailUrl(testimonial.videoUrl)}
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={() => {
                          const videoId = getYouTubeVideoId(testimonial.videoUrl);
                          if (videoId) handleThumbnailError(videoId);
                        }}
                      />
                    ) : (
                      /* Fallback Placeholder */
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5WaWRlbyBUZXN0aW1vbmlhbDwvdGV4dD48L3N2Zz4=')] bg-cover bg-center opacity-20"></div>
                      </div>
                    )}
                    
                    {/* Overlay gradient for better play button visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>

                    {/* Play Button Overlay */}
                    <button
                      onClick={() => handleVideoClick(testimonial)}
                      className="absolute inset-0 flex items-center justify-center group/play z-20"
                    >
                      <motion.div
                        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 backdrop-blur-sm border-2 border-primary flex items-center justify-center shadow-xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground ml-1" fill="currentColor" />
                        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                      </motion.div>
                    </button>

                    {/* Tradeneeti Logo Badge */}
                    <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-2 py-1 z-30">
                      <span className="text-xs font-bold text-primary">TRADENEETI</span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4 sm:p-6 bg-card/50">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-card/95 backdrop-blur-sm border border-border rounded-full p-2 sm:p-3 shadow-lg hover:bg-card transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            </button>
          )}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
          {videoTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "bg-primary w-8 sm:w-10"
                  : "bg-border hover:bg-primary/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Popup Dialog */}
      <Dialog open={selectedVideo !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black/95 border-primary/20">
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative w-full"
            >
              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1&rel=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${selectedVideo.name} - ${selectedVideo.role}`}
                />
              </div>

              {/* Video Info */}
              <DialogHeader className="p-6 bg-card/50">
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedVideo.name}
                </DialogTitle>
                <p className="text-muted-foreground text-base mt-2">
                  {selectedVideo.role}
                </p>
              </DialogHeader>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

