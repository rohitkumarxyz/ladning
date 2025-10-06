// src/components/NewsSection.tsx
export default function NewsSection() {
  const articles = [
    {
      title: "How to scale leadership capabilities",
      desc: "A practical playbook for building high-performing managers in months.",
      link: "#",
      image: "/post-121045.png", // dummy img
    },
    {
      title: "Future-ready skills for tomorrow",
      desc: "Key trends and insights to prepare your workforce for change.",
      link: "#",
      image: "/post-121045.png",
    },
    {
      title: "Measuring training ROI effectively",
      desc: "Strategies to evaluate learning impact on performance.",
      link: "#",
      image: "/Post-083028.png",
    },
  ];

  return (
    <section id="resources" className="container-tight py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">NEWS and BLOGS</h2>
        <p className="mt-2 text-gray-600">
          Expert guidance on capability building and organizational performance.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {articles.map((article, i) => (
          <article
            key={i}
            className="rounded-2xl border bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">{article.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{article.desc}</p>
            <a
              href={article.link}
              className="mt-3 inline-block text-sm font-semibold underline underline-offset-4 hover:text-blue-600"
            >
              Read article
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
