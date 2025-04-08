// components/WhyChooseUs.tsx
"use client";

import { CheckCircle, FileText, Globe, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Legal Guidance",
      description:
        "Our team of seasoned immigration experts ensures your journey is legally smooth.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: "98% Approval Rate",
      description:
        "With a proven track record, we maximize your chances of a successful application.",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      title: "Transparent Process",
      description:
        "We ensure you’re informed at every stage, so there are no surprises.",
      icon: <Globe className="h-8 w-8 text-primary" />,
    },
    {
      title: "Multilingual Support",
      description:
        "Our services are available in multiple languages to cater to diverse clients.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Why Choose Us
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          We offer comprehensive and personalized migration solutions designed
          to make your journey abroad as smooth and successful as possible.
        </p>

        {/* Grid of Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((features) => (
            <div key={features.title} className="group">
              <Card className="p-6 rounded-xl shadow-md flex items-center border border-border transition-transform transform group-hover:rotate-3 group-hover:scale-105">
                <div className="mb-4">{features.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {features.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {features.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
