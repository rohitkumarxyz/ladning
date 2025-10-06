/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Course API types
 */
export interface CourseInstructor {
  name: string;
  experience: number;
}

export interface CourseFAQ {
  question: string;
  answer: string;
  _id: string;
}

export interface CourseReview {
  user: string;
  comment: string;
  rating: number;
  _id: string;
}

export interface APICourse {
  _id: string;
  title: string;
  description: string;
  serialNumber: number;
  createdBy: string;
  editedBy: string;
  language: string;
  category: string;
  price: number;
  rating: number;
  studentsEnrolled: number;
  instructor: CourseInstructor;
  faq: CourseFAQ[];
  reviews: CourseReview[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type CoursesAPIResponse = APICourse[];

/**
 * Single course API response type
 */
export interface SingleCourseAPIResponse {
  message: string;
  data: APICourse;
}

/**
 * Lead form API types
 */
export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  location?: string;
  message?: string;
}

export interface LeadAPIResponse {
  message: string;
  success: boolean;
}
