import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Gallery images from public/gallary folder
const galleryImages = [
  "/gallary/2093.jpg",
  "/gallary/2095.jpg",
  "/gallary/2119.jpg",
  "/gallary/2120.jpg",
  "/gallary/235.jpg",
  "/gallary/262.jpg",
  "/gallary/275.jpg",
  "/gallary/390.jpg",
  "/gallary/796.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateImage = useCallback((direction: "prev" | "next") => {
    setSelectedImage((current) => {
      if (current === null) return current;

      if (direction === "prev") {
        return current === 0 ? galleryImages.length - 1 : current - 1;
      } else {
        return current === galleryImages.length - 1 ? 0 : current + 1;
      }
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, navigateImage, closeLightbox]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container-tight py-16 md:py-24">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center mb-12 md:mb-16"
      >
        <h1 className="heading-2 gradient-text mb-4">
          Gallery
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our collection of premium images and moments
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-card border border-border">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {galleryImages.length} Images
          </span>
        </div>
      </motion.header>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-0"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl border border-border bg-card professional-card"
            onClick={() => openLightbox(index)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              {/* Loading Skeleton */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 shimmer bg-gradient-to-r from-muted via-muted/50 to-muted" />
              )}

              {/* Image */}
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className={cn(
                  "w-full h-full object-cover transition-all duration-500",
                  loadedImages.has(index)
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                )}
                onLoad={() => handleImageLoad(index)}
              />

              {/* Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-primary/20 backdrop-blur-sm rounded-full p-4 border border-primary/30"
                >
                  <ZoomIn className="w-8 h-8 text-primary" />
                </motion.div>
              </div>

              {/* Image Number Badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold border border-primary/50">
                  {index + 1}
                </span>
              </div>

              {/* Green Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 glow-effect-primary rounded-xl" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
            <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-primary/20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card hover:border-primary transition-all duration-200 group"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </button>

                {/* Previous Button */}
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card hover:border-primary transition-all duration-200 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </button>

                {/* Next Button */}
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card hover:border-primary transition-all duration-200 group"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </button>

                {/* Main Image */}
                <motion.img
                  key={selectedImage}
                  src={galleryImages[selectedImage]}
                  alt={`Gallery image ${selectedImage + 1}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
                  <span className="text-sm text-foreground font-medium">
                    {selectedImage + 1} / {galleryImages.length}
                  </span>
                </div>

                {/* Navigation Hints */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 rounded bg-card border border-border">←</kbd>
                    Previous
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 rounded bg-card border border-border">→</kbd>
                    Next
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 rounded bg-card border border-border">ESC</kbd>
                    Close
                  </span>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

