export interface Course {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  rating: number;
  students: number;
  longDescription?: string;
}

export const courses: Course[] = [
  {
    id: "futures-trading-fundamentals",
    title: "Futures Trading Fundamentals",
    description: "Master the basics of futures markets and contract mechanics.",
    imageSrc: "/Stock-market-Course.png",
    rating: 4.7,
    students: 12450,
    longDescription:
      "A comprehensive program covering the essentials of futures trading. Learn about margin, leverage, market participants, and how to execute your first trade. Includes a mix of theoretical knowledge and practical simulated trading exercises.",
  },
  {
    id: "advanced-technical-analysis",
    title: "Advanced Technical Analysis",
    description:
      "Predict market movements using chart patterns and indicators.",
    imageSrc: "/Stock-market-Course.png",
    rating: 4.8,
    students: 15230,
    longDescription:
      "Go beyond the basics with advanced charting techniques. This course focuses on identifying complex patterns, using leading and lagging indicators, and building a multi-indicator trading strategy. Includes case studies on various markets like forex and commodities.",
  },
  {
    id: "options-and-derivatives-strategy",
    title: "Options & Derivatives Strategy",
    description: "Leverage options for income, hedging, and speculation.",
    imageSrc: "/Stock-market-Course.png",
    rating: 4.6,
    students: 9840,
    longDescription:
      "Learn to navigate the world of options, including calls, puts, and volatility. This program covers strategies such as covered calls, iron condors, and spreads, with a focus on risk-reward analysis and portfolio application.",
  },
  {
    id: "algorithmic-trading-for-beginners",
    title: "Algorithmic Trading for Beginners",
    description: "Automate your trading with simple, code-free strategies.",
    imageSrc: "/Stock-market-Course.png",
    rating: 4.5,
    students: 8320,
    longDescription:
      "An introduction to automated trading systems. Topics include backtesting strategies, understanding basic logic gates, and using popular platforms to deploy and manage simple trading bots without advanced programming knowledge.",
  },
  {
    id: "risk-management-in-trading",
    title: "Risk Management in Trading",
    description: "Protect your capital with proven risk-control techniques.",
    imageSrc: "/Stock-market-Course.png",
    rating: 4.9,
    students: 11200,
    longDescription:
      "A critical course focused on capital preservation. Learn about position sizing, setting stop losses, and managing trade psychology. This program provides frameworks for building a resilient trading plan that minimizes drawdowns and preserves capital over the long term.",
  },
  {
    id: "global-macro-trading",
    title: "Global Macro Trading",
    description: "Trade based on macroeconomic events and policy changes.",
    imageSrc: "/Stock-market-Course.png",
    rating: 4.3,
    students: 6420,
    longDescription:
      "Develop a top-down approach to trading by analyzing global economic trends. Topics include central bank policies, geopolitical events, and inter-market analysis to identify and capitalize on major market shifts.",
  },
];

export function getCourseById(id: string) {
  return new Promise<Course | undefined>((resolve) => {
    const found = courses.find((c) => c.id === id);
    // simulate network
    setTimeout(() => resolve(found), 250);
  });
}
