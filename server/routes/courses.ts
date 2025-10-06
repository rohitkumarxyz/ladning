import { RequestHandler } from "express";

// Mock course data based on your API response
const coursesData = {
  message: "Courses retrieved successfully",
  count: 4,
  data: [
    {
      instructor: {
        name: "Dr. Anya Sharma",
        experience: 15
      },
      _id: "68d0dc40a0c9f165c87dd0dd",
      title: "Introduction to Quantum Computing",
      description: "A beginner-friendly course on the principles and applications of quantum computing, covering qubits, superposition, and entanglement.",
      serialNumber: 2,
      createdBy: "60d0fe4f5311236168a109ca",
      editedBy: "60d0fe4f5311236168a109cb",
      language: "English",
      category: "Science & Technology",
      price: 49.99,
      rating: 4.8,
      faq: [
        {
          question: "Do I need a strong math background?",
          answer: "Basic linear algebra is recommended but not strictly required.",
          _id: "68d0dc40a0c9f165c87dd0de"
        }
      ],
      reviews: [
        {
          user: "Alice",
          comment: "Excellent course, complex topics explained simply.",
          rating: 5,
          _id: "68d0dc40a0c9f165c87dd0df"
        }
      ],
      studentsEnrolled: 150,
      createdAt: "2025-09-22T05:18:56.984Z",
      updatedAt: "2025-09-22T05:18:56.984Z",
      __v: 0
    },
    {
      instructor: {
        name: "Dr. Samir Bose",
        experience: 20
      },
      _id: "68d0dc61a0c9f165c87dd0e1",
      title: "Introduction to Generative AI",
      description: "Explore the fundamentals of Generative AI models like GANs and Transformers, and their applications in creating new content.",
      serialNumber: 5,
      createdBy: "60d0fe4f5311236168a109d2",
      editedBy: "60d0fe4f5311236168a109d3",
      language: "English",
      category: "Artificial Intelligence",
      price: 89.99,
      rating: 4.9,
      faq: [],
      reviews: [
        {
          user: "Grace",
          comment: "Mind-blowing and very informative.",
          rating: 5,
          _id: "68d0dc61a0c9f165c87dd0e2"
        }
      ],
      studentsEnrolled: 180,
      createdAt: "2025-09-22T05:19:29.599Z",
      updatedAt: "2025-09-22T05:19:29.599Z",
      __v: 0
    },
    {
      instructor: {
        name: "Rohan Mehta",
        experience: 10
      },
      _id: "68d0dc7da0c9f165c87dd0e4",
      title: "Yoga for Beginners",
      description: "A comprehensive guide to basic yoga poses, breathing techniques, and meditation for new practitioners.",
      serialNumber: 4,
      createdBy: "60d0fe4f5311236168a109d0",
      editedBy: "60d0fe4f5311236168a109d1",
      language: "English",
      category: "Health & Fitness",
      price: 29.99,
      rating: 4.7,
      faq: [
        {
          question: "What equipment do I need?",
          answer: "A yoga mat is recommended, but not essential.",
          _id: "68d0dc7da0c9f165c87dd0e5"
        }
      ],
      reviews: [
        {
          user: "Eve",
          comment: "Great for starting out, instructor is very clear.",
          rating: 5,
          _id: "68d0dc7da0c9f165c87dd0e6"
        },
        {
          user: "Frank",
          comment: "Good, but could have more advanced poses.",
          rating: 4,
          _id: "68d0dc7da0c9f165c87dd0e7"
        }
      ],
      studentsEnrolled: 300,
      createdAt: "2025-09-22T05:19:57.061Z",
      updatedAt: "2025-09-22T05:19:57.061Z",
      __v: 0
    },
    {
      instructor: {
        name: "Priya Patel",
        experience: 8
      },
      _id: "68d0dc9ea0c9f165c87dd0f0",
      title: "Digital Marketing for Startups",
      description: "Learn essential digital marketing strategies to grow your startup, including SEO, content marketing, and social media campaigns.",
      serialNumber: 13,
      createdBy: "60d0fe4f5311236168a109ce",
      editedBy: "60d0fe4f5311236168a109cf",
      language: "English",
      category: "Business",
      price: 59.99,
      rating: 4.9,
      faq: [
        {
          question: "Is this course suitable for non-technical founders?",
          answer: "Yes, it is designed for all founders regardless of technical background.",
          _id: "68d0dc9ea0c9f165c87dd0f1"
        }
      ],
      reviews: [
        {
          user: "David",
          comment: "Highly actionable advice. Already seeing results.",
          rating: 5,
          _id: "68d0dc9ea0c9f165c87dd0f2"
        }
      ],
      studentsEnrolled: 210,
      createdAt: "2025-09-22T05:20:30.784Z",
      updatedAt: "2025-09-22T05:20:30.784Z",
      __v: 0
    }
  ]
};

export const handleCourses: RequestHandler = (req, res) => {
  try {
    res.json(coursesData);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve courses", error });
  }
};