import Accreditations from "@/components/accreditations";
import BlogPreview from "@/components/blogs";
import Consultants from "@/components/consultants";
import ContactUs from "@/components/contact";
import CTAFooter from "@/components/CTA-footer";
import PopularDestinations from "@/components/destinations";
import EligibilityChecker from "@/components/eligibility-checker";
import FAQ from "@/components/FAQs";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <PopularDestinations />
      <EligibilityChecker />
      <Consultants />
      <BlogPreview />
      <ContactUs />
      <Accreditations />
      <FAQ />
      <CTAFooter />
    </>
  );
}
