"use client";
import { SendIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="pt-40 pb-60 mx-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-center gap-8 lg:gap-2">
          <div className="flex justify-center lg:justify-center lg:items-center w-full">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full">
              <Image
                src="/cedric.jpeg"
                alt="Cédric"
                className="rounded-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="text-center lg:text-left w-full">
            <h3 className="text-lg sm:text-xl lg:text-xl text-muted-foreground font-semibold mb-2">
              Hey, I&apos;m Cédric 👋🏾
            </h3>
            <h1 className="font-extrabold mb-4 lg:mb-6">
              <span className="text-5xl sm:text-6xl lg:text-8xl text-[#85a9cc] block">
                Fullstack
              </span>
              <span className="text-5xl sm:text-6xl lg:text-8xl block">
                Developer
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground font-light mt-4">
              I&apos;m a fullstack developer based in paris who love building
              <br className="hidden sm:block" />
              web applications at Companies level.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button
                className="cursor-pointer hover:bg-white"
                variant="outline"
              >
                <a href="mailto:gabyngoune@yahoo.fr">Get In Touch</a>
                <SendIcon className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
