import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface CourseCardProps {
  imageSrc: string;
  title: string;
  description: string;
  rating: number; // 0-5
  students: number;
}

export default function CourseCard({ imageSrc, title, description, rating, students }: CourseCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <article className={cn("rounded-2xl border bg-white overflow-hidden", "card-anim")}>
      <img src={imageSrc} alt={title} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-foreground/70">{description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-500">
              {Array.from({ length: fullStars }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                  <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.997 24 12 19.897 5.003 24l1.329-8.888L.673 9.6l7.659-1.582z" />
                </svg>
              ))}
              {hasHalf && (
                <svg width="16" height="16" viewBox="0 0 24 24" className="inline-block">
                  <defs>
                    <linearGradient id="half">
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="50%" stopColor="#e5e7eb" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#half)" d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.997 24 12 19.897 5.003 24l1.329-8.888L.673 9.6l7.659-1.582z" />
                </svg>
              )}
              {Array.from({ length: emptyStars }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="inline-block text-foreground/40">
                  <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.997 24 12 19.897 5.003 24l1.329-8.888L.673 9.6l7.659-1.582z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-foreground/70">{rating.toFixed(1)}</span>
            <span className="mx-1 text-foreground/50">·</span>
            <span className="text-sm text-foreground/70">{students.toLocaleString()} students</span>
          </div>

          <div>
            <Button size="sm" className="rounded-full btn-anim">Enroll</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
