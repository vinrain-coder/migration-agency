// components/EligibilityChecker.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function EligibilityChecker() {
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [education, setEducation] = useState("");
  const [goals, setGoals] = useState("");

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Check Your Eligibility
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Find out if you qualify for migration opportunities. Our eligibility
          checker will help you assess your chances.
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full px-8 text-white bg-primary hover:bg-primary-dark cursor-pointer">
              Check My Eligibility
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle></DialogTitle>
            <DialogHeader>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Eligibility Checker
              </h3>
            </DialogHeader>

            <div className="space-y-4">
              <Input
                type="number"
                placeholder="Your Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Highest Level of Education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Migration Goals"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button
                className="text-white cursor-pointer"
                onClick={() => alert("Eligibility Checked")}
              >
                Check Eligibility
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
