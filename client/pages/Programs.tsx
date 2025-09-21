import CourseCard from "@/components/programs/CourseCard";
import { motion } from "framer-motion";

const sampleCourses = [
  {
    title: "Manager Essentials",
    description: "From individual contributor to confident people leader.",
    imageSrc: "/placeholder.svg",
    rating: 4.7,
    students: 12450,
  },
  {
    title: "Effective Communication",
    description: "Clarity, influence and impact in every message.",
    imageSrc: "/placeholder.svg",
    rating: 4.5,
    students: 9840,
  },
  {
    title: "High-Performance Habits",
    description: "Focus, prioritization and execution that sticks.",
    imageSrc: "/placeholder.svg",
    rating: 4.8,
    students: 15230,
  },
  {
    title: "Coaching at Scale",
    description: "Coach your team to autonomous performance.",
    imageSrc: "/placeholder.svg",
    rating: 4.6,
    students: 8320,
  },
  {
    title: "Inclusive Leadership",
    description: "Building diverse, high-performing teams.",
    imageSrc: "/placeholder.svg",
    rating: 4.4,
    students: 6420,
  },
  {
    title: "Sales Enablement",
    description: "Train reps to win more deals with practical skills.",
    imageSrc: "/placeholder.svg",
    rating: 4.3,
    students: 11200,
  },
];

export default function Programs() {
  return (
    <div className="container-tight py-16 md:py-24">
      <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-2">Programs</h1>
          <p className="mt-3 text-foreground/70">Browse curated programs and courses designed for measurable outcomes.</p>
        </div>
      </motion.header>

      <motion.section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        {sampleCourses.map((c) => (
          <CourseCard key={c.title} title={c.title} description={c.description} imageSrc={c.imageSrc} rating={c.rating} students={c.students} />
        ))}
      </motion.section>
    </div>
  );
}
