import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SingleCourseAPIResponse, APICourse } from "@shared/api";
import LeadForm from "@/components/ui/leadForm";
import FAQ from "@/components/ui/faq";
import ReactMarkdown from 'react-markdown';

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState<APICourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) {
        setLoading(false);
        setError("No course ID provided");
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:3001/api/courses/${id}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch course: ${response.statusText}`);
        }

        const data: SingleCourseAPIResponse = await response.json();
        setCourse(data.data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching the course",
        );
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);
  return (
    <div className="container-tight py-16 md:py-24">
      {loading ? (
        <div className="text-center py-24">Loading…</div>
      ) : error ? (
        <div className="text-center py-24">
          <p className="text-red-500">Error: {error}</p>
        </div>
      ) : !course ? (
        <div className="text-center py-24">Course not found</div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden border bg-white">
                <img
                  src="/Stock-market-Course.png"
                  alt={course.title}
                  className="w-full object-cover"
                  style={{ height: 380 }}
                />
                <div className="p-6">
                  <h1 className="text-3xl font-extrabold">{course.title}</h1>
                  <p className="mt-3 text-foreground/70 whitespace-pre-line">
                    <ReactMarkdown>{course.description}</ReactMarkdown>
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex items-center gap-2 text-yellow-500">
                      {Array.from({ length: Math.floor(course.rating) }).map(
                        (_, i) => (
                          <svg
                            key={i}
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.997 24 12 19.897 5.003 24l1.329-8.888L.673 9.6l7.659-1.582z" />
                          </svg>
                        ),
                      )}
                    </div>
                    <div className="text-sm text-foreground/70">
                      {course.rating.toFixed(1)} •{" "}
                      {course.studentsEnrolled.toLocaleString()} students
                    </div>
                  </div>

                  <div className="mt-6 prose max-w-none text-foreground/80">
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">
                        Instructor
                      </h4>
                      <p className="text-gray-700">{course.instructor.name}</p>
                      <p className="text-sm text-gray-600">
                        {course.instructor.experience} years of experience
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Language:</strong> {course.language}
                      </div>
                      <div>
                        <strong>Category:</strong> {course.category}
                      </div>
                      <div>
                        <strong>Price:</strong> ${course.price}
                      </div>
                    </div>

                    <FAQ faqs={course.faq} />

                    {course.reviews && course.reviews.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Student Reviews
                        </h4>
                        {course.reviews.map((review) => (
                          <div
                            key={review._id}
                            className="mb-3 p-3 bg-gray-50 rounded"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-gray-900">
                                {review.user}
                              </span>
                              <div className="flex items-center text-yellow-500">
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
                                    <svg
                                      key={i}
                                      width="14"
                                      height="14"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.512L18.997 24 12 19.897 5.003 24l1.329-8.888L.673 9.6l7.659-1.582z" />
                                    </svg>
                                  ),
                                )}
                              </div>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <p>
                      This course includes real-world exercises, peer
                      discussions and check-ins to help learners apply new
                      skills on the job.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky top-16 self-start">
              <LeadForm courseName={course.title} />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
