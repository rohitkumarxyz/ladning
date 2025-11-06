/**
 * API Configuration
 * Centralized configuration for API base URL
 * Uses environment variable if available, otherwise defaults to localhost:5001
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";

/**
 * Get the full API URL for a given endpoint
 * @param endpoint - API endpoint (e.g., '/api/courses')
 * @returns Full URL (e.g., 'http://localhost:5001/api/courses')
 */
export const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  COURSES: "/api/courses",
  COURSE_BY_ID: (id: string) => `/api/courses/${id}`,
  LEADS: "/api/leads",
  CONTACTS: "/api/contacts",
  DEMO: "/api/demo",
  PING: "/api/ping",
} as const;

export default {
  BASE_URL: API_BASE_URL,
  getApiUrl,
  ENDPOINTS: API_ENDPOINTS,
};




