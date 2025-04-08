// components/Footer.tsx
"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-4">
              Quick Links
            </h4>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <a href="/about" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-4">
              Follow Us
            </h4>
            <div className="flex gap-6">
              <a
                href="https://facebook.com"
                className="text-primary hover:text-primary-dark"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-primary hover:text-primary-dark"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-primary hover:text-primary-dark"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-4">
              Contact Us
            </h4>
            <p className="text-muted-foreground mb-2">Phone: +123 456 7890</p>
            <p className="text-muted-foreground mb-2">Email: info@agency.com</p>
            <p className="text-muted-foreground mb-2">
              Location: 123 Main St, City, Country
            </p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-semibold text-primary mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with the latest news and tips on migration and
              immigration.
            </p>
            <form
              action="#"
              method="POST"
              className="flex flex-col sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-full border border-border text-muted-foreground w-full sm:w-72 mb-4 sm:mb-0"
                required
              />
              <Button
                type="submit"
                className="bg-primary text-white rounded-full px-8 sm:ml-4 sm:w-auto cursor-pointer"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MigraPath. All rights
            reserved.
          </p>
          <div className="mt-4">
            <ul className="flex justify-center gap-8">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
