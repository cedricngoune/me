"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

import { Button } from "./ui/button";
import { LinkedinIcon } from "./icons/linkedin";
import { GithubIcon } from "./icons/github";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="pt-60 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="shrink-0">
            <div className="lg:w-80 lg:h-80 rounded-full  p-2 flex items-center justify-center">
              <Image
                src="/cedric.jpeg"
                alt="Cédric NGOUNÉ"
                className="rounded-full object-cover"
                width={320}
                height={320}
              />
            </div>
          </div>
          <div className="flex-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  mb-4">
              Hi, I&apos;m <span className="text-primary">Cédric NGOUNÉ</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-semibold mb-6">
              Fullstack developer, craft enthusiast
            </p>
            <p className="text-lg text-foreground max-w-2xl mx-auto font-light mt-8">
              I love building web applications that serve companies, customers
              and the world
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="outline" asChild>
                <a href="mailto:gabyngoune@yahoo.fr">Get In Touch</a>
              </Button>
            </div>

            <div className="mt-16 text-left">
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToAbout}
                className="bg-white hover:bg-white border-none cursor-pointer transition-colors animate-bounce"
              >
                <ArrowDown className="h-5 w-5" />
                <span className="text-lg font-medium">Scroll down</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mb-12">
            <a
              href="https://www.linkedin.com/in/c%C3%A9dric-ngoun%C3%A9-4105bb172/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon height={24} width={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/cedricngoune/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon height={24} width={24} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
