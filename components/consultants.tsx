// components/Consultants.tsx
"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Consultants() {
  const consultants = [
    {
      name: "John Doe",
      specialty: "Visa & Immigration Expert",
      experience: "8+ yrs",
      photo: "/icons/businessman.svg",
    },
    {
      name: "John Smith",
      specialty: "Work & Study Consultant",
      experience: "5+ yrs",
      photo: "/icons/female.svg",
    },
    {
      name: "Emily Wang",
      specialty: "Permanent Residency Consultant",
      experience: "10+ yrs",
      photo: "/icons/male.svg",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Meet Our Consultants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {consultants.map((consultant) => (
            <Card
              className="p-6 rounded-xl shadow-md border border-border"
              key={consultant.name}
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={consultant.photo}
                  alt={consultant.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-primary">
                  {consultant.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {consultant.specialty}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {consultant.experience}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
