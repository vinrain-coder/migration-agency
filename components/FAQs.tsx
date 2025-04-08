// components/FAQ.tsx
"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How long does the process take?</AccordionTrigger>
            <AccordionContent>
              The process typically takes 3-6 months, depending on the
              destination country.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What documents are required?</AccordionTrigger>
            <AccordionContent>
              Documents such as a passport, educational certificates, and proof
              of financial stability are required.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you help with job placements?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we assist with job placements in select countries as part of
              the migration process.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
