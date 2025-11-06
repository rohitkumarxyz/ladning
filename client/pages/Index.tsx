import NewsSection from "@/components/ui/news&blog";
import Testimonials from "@/components/ui/Testimonials";
import HeroSlider from "@/components/home/HeroSlider";
import ProgramsSection from "@/components/home/ProgramsSection";
import TopFeaturesSection from "@/components/home/TopFeaturesSection";
import ChartShowcaseSection from "@/components/home/ChartShowcaseSection";
import TutorsSection from "@/components/home/TutorsSection";
import CTABanner from "@/components/home/CTABanner";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import { useState, useEffect } from "react";
import type { EnhancedCourse } from "@/components/home/ProgramsSection";
import { allCourses } from "@/data/courses";

// Counter animation hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startValue + (end - startValue) * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return count;
};

export default function Index() {
  const successRate = useCounter(95);
  const returnMultiplier = useCounter(5);
  const programsCount = useCounter(40);

  // Use shared courses data from @/data/courses.ts
  const courses: EnhancedCourse[] = allCourses;

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Top Features - Premium Section */}
      <TopFeaturesSection />

      {/* Programs */}
      <ProgramsSection courses={courses} />

      {/* Chart Showcase - Premium Section */}
      <ChartShowcaseSection />

      {/* Tutors/Mentors Section */}
      {/* <TutorsSection /> */}

      {/* Video Testimonials Section */}
      <VideoTestimonialsSection />

      {/* Testimonial */}
      {/* <Testimonials /> */}

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}