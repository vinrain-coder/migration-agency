// components/BlogPreview.tsx
"use client";

import { Card } from "@/components/ui/card";

export default function BlogPreview() {
  const articles = [
    {
      title: "Top 5 Migration Tips",
      summary: "Learn the best tips for a smooth migration process.",
      link: "/blog/migration-tips",
    },
    {
      title: "Understanding Visa Requirements",
      summary:
        "A comprehensive guide to visa requirements for various countries.",
      link: "/blog/visa-requirements",
    },
    {
      title: "How to Choose the Right Country",
      summary: "Things to consider when choosing a destination for migration.",
      link: "/blog/right-country",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Resources & Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <Card
              key={article.title}
              className="p-6 rounded-xl shadow-md border border-border"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {article.summary}
              </p>
              <a
                href={article.link}
                className="text-primary font-semibold hover:underline"
              >
                Read Full Article
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
