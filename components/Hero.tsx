"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Background2 from "@/public/background-3.jpg";
import Navbar from "./Navbar";
import { buttonVariants } from "./ui/button";
import { ViewLink } from "./ViewLink";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative h-svh w-full overflow-hidden bg-black text-white">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <Image
          src={Background2}
          className="h-[120%] w-full object-cover"
          alt="Modern construction background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Centered Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <div
          className={`max-w-4xl text-center transition-all duration-1500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Small Tag */}
          <div
            className={`mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-md transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <span className="font-light text-white text-xs tracking-widest sm:text-sm">
              OVER 20 YEARS OF EXPERIENCE
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`mb-6 font-light text-4xl text-white leading-tight transition-all delay-200 duration-1000 sm:text-5xl md:text-6xl lg:text-7xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Transforming Homes
            <br />
            <span className="font-normal text-tertiary">
              One Room at a Time
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mx-auto mb-12 max-w-2xl font-light text-base text-shadow-lg text-white/90 transition-all delay-400 duration-1000 sm:text-lg md:text-xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Expert kitchen and bathroom remodeling serving the Bay Area
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col items-center justify-center gap-4 transition-all delay-600 duration-1000 sm:flex-row ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <ViewLink
              href="#whychoose"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              About Us
            </ViewLink>
            <ViewLink
              href="/contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Contact Us
            </ViewLink>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ViewLink
        href="#whychoose"
        className={`-translate-x-1/2 absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-2 transition-all delay-800 duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <span className="font-light text-white text-xs tracking-widest opacity-70">
          SCROLL
        </span>
        <svg
          className="h-6 w-6 animate-bounce text-white opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Scroll Indicator</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </ViewLink>

      {/* Decorative Corner Elements */}
      <div className="pointer-events-none absolute inset-0 z-5">
        <div className="absolute top-20 left-4 h-16 w-16 border-white/20 border-t-2 border-l-2 sm:top-32 sm:left-8 sm:h-24 sm:w-24" />
        <div className="absolute right-4 bottom-20 h-16 w-16 border-white/20 border-r-2 border-b-2 sm:right-8 sm:bottom-32 sm:h-24 sm:w-24" />
      </div>
    </section>
  );
}
