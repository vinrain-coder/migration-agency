import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary mb-6">
            Empowering Your Journey Abroad
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-prose mx-auto lg:mx-0">
            Personalized migration solutions for work, study, and residency,
            backed by expert support.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Button className="rounded-full px-6 py-3 text-sm text-white bg-primary hover:bg-primary-dark transition duration-300 ease-in-out">
              Get a Free Assessment
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 py-3 text-sm text-primary border-primary hover:bg-primary-light transition duration-300 ease-in-out"
            >
              Explore Services
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="rounded-xl shadow-xl p-8 transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Your Pathway to a New Life
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Seamless migration processes with a focus on your goals and
              dreams.
            </p>
            <Button className="w-full rounded-full px-6 py-3 text-sm text-white bg-primary hover:bg-primary-dark transition duration-300 ease-in-out">
              Start Your Journey
            </Button>
          </div>
          <div className="rounded-xl shadow-xl p-8 transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Tailored Solutions
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Get personalized services for work, study, or residency
              applications.
            </p>
            <Button className="w-full rounded-full px-6 py-3 text-sm text-white bg-primary hover:bg-primary-dark transition duration-300 ease-in-out">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
