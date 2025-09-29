"use client";

import { ChevronRightIcon, InfoIcon } from "lucide-react";
import * as motion from "motion/react-m";
import Image from "next/image";
import BackgroundImage2 from "@/public/interior-3.jpg";
import BackgroundImage3 from "@/public/kitchen-5.jpg";
import BackgroundImage1 from "@/public/kitchen-6.jpg";
import { ViewLink } from "./ViewLink";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: InfoIcon,
      title: "Expert Craftsmanship",
      description:
        "Decades of experience delivering precision and quality in every project",
      image: BackgroundImage1,
    },
    {
      icon: InfoIcon,
      title: "Innovative Design",
      description:
        "Creative solutions that blend functionality with aesthetic excellence",
      image: BackgroundImage2,
    },
    {
      icon: InfoIcon,
      title: "Client-Focused Approach",
      description: "Your vision guides our work from concept to completion",
      image: BackgroundImage3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: [0.22, 1, 0.156, 1],
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "easeOut",
    },
  };

  return (
    <section
      id="whychoose"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-background py-16 text-foreground sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 space-y-4 text-center sm:mb-16 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={headerVariants}
        >
          <p className="font-semibold text-sm text-tertiary uppercase tracking-widest sm:text-base">
            Craft & Excellence
          </p>
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Why choose Padilla Design and Build?
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Transforming spaces with skill, creativity, and dedication
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.15 },
                }}
                className="group relative min-h-[400px] overflow-hidden rounded-xl shadow-lg sm:min-h-[450px]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={feature.image}
                    className="size-full object-cover transition-transform duration-400 group-hover:scale-105"
                    alt={feature.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50 transition-colors duration-200 group-hover:via-black/80" />
                </div>

                <div className="relative z-10 flex h-full flex-col p-8 text-white md:p-10">
                  <motion.div
                    className="mb-6"
                    initial={{ scale: 1 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="inline-flex rounded-full bg-tertiary/20 p-4 backdrop-blur-sm">
                      <IconComponent className="size-6 text-tertiary sm:size-7" />
                    </div>
                  </motion.div>

                  <h3 className="mb-4 font-normal text-3xl text-white leading-tight sm:mb-5 lg:text-4xl">
                    {feature.title}
                  </h3>

                  <p className="mb-6 flex-grow text-base text-white/90 sm:mb-8 sm:text-lg">
                    {feature.description}
                  </p>

                  <div className="mt-auto">
                    <ViewLink
                      href="#services"
                      className="group/link inline-flex items-center gap-2 text-sm text-tertiary transition-all hover:gap-3 sm:text-base"
                    >
                      Learn More
                      <ChevronRightIcon className="size-4 transition-transform group-hover/link:translate-x-1" />
                    </ViewLink>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="pointer-events-none absolute top-4 right-4 h-12 w-12 border-tertiary/30 border-t-2 border-r-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
