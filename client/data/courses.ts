import type { EnhancedCourse } from "@/components/home/ProgramsSection";
import coursesData from "./courses.json";

// Import courses from JSON file
const coursesFromJson = coursesData.courses as EnhancedCourse[];

// All courses data - shared between Index and CourseDetail pages
// Using JSON data as primary source, can be easily updated or replaced with API data
export const allCourses: EnhancedCourse[] = coursesFromJson;

export function getCourseById(id: string): EnhancedCourse | undefined {
  return allCourses.find((course) => course.id === id);
}
