// components/PopularDestinations.tsx
"use client";

import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function PopularDestinations() {
  const destinations = [
    {
      country: "Canada",
      flag: "/flags/canada.png", // Replace with actual flag image paths
      info: "Canada offers excellent healthcare and education systems. Immigrants enjoy a high quality of life.",
      link: "/canada",
    },
    {
      country: "Australia",
      flag: "/flags/australia.png",
      info: "With its strong economy and relaxed lifestyle, Australia is a top destination for work and study.",
      link: "/australia",
    },
    {
      country: "United Kingdom",
      flag: "/flags/uk.png",
      info: "The UK is known for its diverse culture and global career opportunities, especially in finance and tech.",
      link: "/uk",
    },
    {
      country: "United States",
      flag: "/flags/usa.png",
      info: "The USA remains a popular destination for entrepreneurs, students, and professionals looking for opportunities.",
      link: "/usa",
    },
    {
      country: "Germany",
      flag: "/flags/germany.png",
      info: "Germany offers numerous job opportunities in tech and engineering, along with a high standard of living.",
      link: "/germany",
    },
    {
      country: "Kenya",
      flag: "/flags/kenya.png",
      info: "Kenya offers numerous tourist attractions in the Savanna Grasslands and the Game Parks and Reserves",
      link: "/germany",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Popular Destinations
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Explore our most popular migration destinations and find out why
          people are choosing these countries for their new life.
        </p>

        {/* Grid of Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {destinations.map((destination) => (
            <Card
              key={destination.country}
              className="p-6 rounded-xl shadow-md border border-border hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={destination.flag}
                  alt={`${destination.country} Flag`}
                  width={48}
                  height={48}
                  className="object-contain rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {destination.country}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {destination.info}
              </p>
              <a
                href={destination.link}
                className="text-primary font-semibold hover:underline"
              >
                Learn More <MapPin className="inline ml-2 h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
