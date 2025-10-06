import CourseCard from "@/components/programs/CourseCard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CoursesAPIResponse } from "@shared/api";

export default function Programs() {
  const [courses, setCourses] = useState<CoursesAPIResponse>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("http://localhost:3001/api/courses/");

        if (!response.ok) {
          throw new Error(`Failed to fetch courses: ${response.statusText}`);
        }

        const data: CoursesAPIResponse = await response.json();
        // Sort courses by serialNumber in ascending order (lowest numbers first)
        const sortedData = data.sort((a, b) => a.serialNumber - b.serialNumber);
        setCourses(sortedData);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching courses",
        );
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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

      {loading && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-foreground/70">Loading courses...</p>
        </motion.div>
      )}

      {error && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-red-500">Error: {error}</p>
        </motion.div>
      )}

      {!loading && !error && courses.length === 0 && (
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

      {!loading && !error && courses.length > 0 && (
        <motion.section
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              title={course.title}
              description={course.description}
              imageSrc="/stock4.jpeg" // Using new professional stock image
              rating={course.rating}
              students={course.studentsEnrolled}
              href={`/courses/${course._id}`}
            />
          ))}
        </motion.section>
      )}
    </div>
  );
}
