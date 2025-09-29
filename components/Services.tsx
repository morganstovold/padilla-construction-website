"use client";

import { ChevronRightIcon } from "lucide-react";
import * as motion from "motion/react-m";
import Image from "next/image";
import BackgroundImage2 from "@/public/background-6.jpg";
import BackgroundImage1 from "@/public/interior-4.jpg";
import { ViewLink } from "./ViewLink";

export default function ServicesSection() {
  const services = [
    {
      tag: "Remodel",
      title: "Kitchen & Bathroom Remodeling",
      description:
        "Expert renovation of kitchens and bathrooms with quality craftsmanship and attention to detail",
      image: BackgroundImage1,
      link: "/contact",
      linkText: "Request Quote",
    },
    {
      tag: "Renovate",
      title: "Home Renovations",
      description:
        "Complete interior transformations including bedrooms, living rooms, and custom projects",
      image: BackgroundImage2,
      link: "/contact",
      linkText: "Get Started",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "easeOut",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section
      id="services"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-alternate py-16 text-white sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 space-y-4 text-center sm:mb-16 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <p className="font-semibold text-sm text-tertiary uppercase tracking-widest sm:text-base">
            Our Services
          </p>
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Expert home remodeling services
          </h2>
          <p className="text-base text-white/80 sm:text-lg">
            Specializing in kitchen and bathroom renovations throughout the Bay
            Area
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl border border-border-alternate shadow-xl"
            >
              <div className="grid h-full grid-cols-1 sm:grid-cols-2">
                {/* Content Side */}
                <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
                  <div>
                    <div className="mb-4 inline-block rounded-full border border-tertiary/30 bg-tertiary/10 px-4 py-1.5 backdrop-blur-sm">
                      <span className="font-medium text-tertiary text-xs uppercase tracking-wider">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mb-4 text-2xl leading-tight transition-colors group-hover:text-tertiary md:text-3xl lg:text-4xl">
                      {service.title}
                    </h3>

                    <p className="text-base text-white/80 sm:text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <ViewLink
                      href={service.link}
                      className="group/link inline-flex items-center gap-2 text-sm text-tertiary transition-all hover:gap-3 sm:text-base"
                    >
                      {service.linkText}
                      <ChevronRightIcon className="size-4 transition-transform group-hover/link:translate-x-1" />
                    </ViewLink>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative h-full overflow-hidden sm:h-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="size-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/25 transition-colors duration-200 group-hover:via-black/55" />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="pointer-events-none absolute top-4 right-4 h-12 w-12 border-tertiary/30 border-t-2 border-r-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
