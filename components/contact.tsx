// components/ContactUs.tsx
"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Contact Us / Book a Consultation
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Reach out to us for personalized advice or book a consultation with
          one of our experts.
        </p>

        <div className="space-y-6">
          <div className="flex justify-center gap-6">
            <div>
              <Phone className="h-6 w-6 text-primary" />
              <p className="mt-2 text-lg text-muted-foreground">
                +123 456 7890
              </p>
            </div>
            <div>
              <Mail className="h-6 w-6 text-primary" />
              <p className="mt-2 text-lg text-muted-foreground">
                info@agency.com
              </p>
            </div>
            <div>
              <MapPin className="h-6 w-6 text-primary" />
              <p className="mt-2 text-lg text-muted-foreground">
                123 Main St, City, Country
              </p>
            </div>
          </div>

          {/* <div className="flex justify-center gap-6">
            <a href="https://wa.me/1234567890" className="text-green-500 hover:underline">
              <WhatsApp className="h-6 w-6" />
            </a>
            <a href="https://t.me/username" className="text-blue-500 hover:underline">
              <Telegram className="h-6 w-6" />
            </a>
          </div> */}

          <Button className="rounded-full px-8 text-white mt-6">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
