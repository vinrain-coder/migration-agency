// components/Testimonials.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      country: "Canada",
      quote:
        "Thanks to this agency, I successfully moved to Canada and started my dream job!",
      image: "/icons/businessman.svg", // Replace with your real client images or avatars
    },
    {
      name: "Jane Smith",
      country: "Australia",
      quote:
        "A smooth and easy process to get my work permit. Highly recommend!",
      image: "/icons/female.svg",
    },
    {
      name: "Michael Lee",
      country: "USA",
      quote:
        "The team made my visa process effortless. I’m so glad I chose them.",
      image: "/icons/male.svg",
    },
    {
      name: "Sara Tan",
      country: "UK",
      quote:
        "Professional, knowledgeable, and efficient service. Got my permanent residency fast!",
      image: "/icons/female.svg",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Success Stories
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Hear from our satisfied clients who have successfully started their
          new life abroad with our help.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <Card className="p-6 rounded-xl shadow-md border border-border">
                <div className="mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {testimonial.country}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
