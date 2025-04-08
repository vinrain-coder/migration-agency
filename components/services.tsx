// components/Services.tsx
"use client";

import {
  Briefcase,
  GraduationCap,
  Home,
  Shield,
  Flag,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Student Visa Application",
      description:
        "Assisting students in securing visas to study abroad with tailored guidance.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Work Permit Assistance",
      description:
        "Helping skilled workers obtain work permits and navigate the application process.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      title: "Permanent Residency",
      description:
        "Guiding clients through the process of applying for permanent residency in various countries.",
      icon: <Home className="h-8 w-8 text-primary" />,
    },
    {
      title: "Business Migration",
      description:
        "Providing expert advice and services for entrepreneurs looking to migrate for business purposes.",
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
    {
      title: "Family Sponsorship",
      description:
        "Assisting with the sponsorship of family members for immigration to your new country.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Citizenship Application",
      description:
        "Helping individuals apply for citizenship in their new country with a smooth process.",
      icon: <Flag className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Our Services
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          We offer a comprehensive range of migration services to help you
          through every stage of your journey abroad.
        </p>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="group">
              <Card className="p-6 rounded-xl shadow-md flex items-center border border-border transition-transform transform group-hover:rotate-3 group-hover:scale-105">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
