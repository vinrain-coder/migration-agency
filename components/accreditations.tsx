// components/Accreditations.tsx
"use client";

import Image from "next/image";

export default function Accreditations() {
  const logos = [
    "/images/travel.jpeg",
    "/images/travel2.jpeg",
    "/images/travel.jpeg",
    "/images/travel2.jpeg",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Our Accreditations & Partners
        </h2>
        <div className="flex overflow-x-auto gap-12 justify-center">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              width={32}
              height={32}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
