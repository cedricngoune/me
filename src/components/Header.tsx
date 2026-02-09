"use client";
import { Button } from "@/src/components/ui/button";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { href: "#about", label: "About me" },
    { href: "#skills", label: "My Skills" },
    { href: "#works", label: "Works" },
  ];
  return (
    <header className="fixed bg-background/80 backdrop-blur-md border-b border-border top-0 left-0 right-0 z-50 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-black hover:text-shadow-white"
            >
              <Image src="/logo.jpg" alt="logo CN" width={100} height={100} />
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-8 ">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#1b1c36] font-sans hover:text-[#0d0d20] transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
