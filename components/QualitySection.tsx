"use client";

import { CheckIcon, ChevronRightIcon } from "lucide-react";
import * as motion from "motion/react-m";
import Image from "next/image";
import BackgroundImage1 from "@/public/bedroom-1.jpg";
import { buttonVariants } from "./ui/button";
import { ViewLink } from "./ViewLink";

export default function QualitySection() {
  const features = [
    "Skilled tradespeople ensure precision",
    "Premium materials selected for durability",
    "Rigorous quality control at every stage",
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section
      id="quality"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-background py-16 text-foreground sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
          >
            <p className="mb-3 font-semibold text-shadow-xs text-sm text-tertiary uppercase tracking-widest sm:text-base md:mb-4">
              Quality
            </p>
            <h2 className="mb-5 text-3xl leading-tight sm:text-4xl md:mb-6 lg:text-5xl xl:text-6xl">
              Uncompromising craftsmanship and materials
            </h2>
            <p className="mb-6 text-base text-muted-foreground md:mb-8 md:text-lg">
              We deliver exceptional results through meticulous attention to
              detail and superior materials. Our commitment is your
              satisfaction.
            </p>

            <div className="mb-8 space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex-shrink-0 rounded-full bg-tertiary/10 p-1">
                    <CheckIcon className="size-4 text-tertiary" />
                  </div>
                  <p className="text-base">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <ViewLink href="#contact" className={buttonVariants()}>
                Get Started
              </ViewLink>
              <ViewLink
                href="#services"
                className={buttonVariants({
                  variant: "link",
                  className: "group",
                })}
              >
                Learn More
                <ChevronRightIcon className="size-4 transition-all group-hover:translate-x-1" />
              </ViewLink>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            className="group relative overflow-hidden rounded-xl shadow-xl"
          >
            <Image
              src={BackgroundImage1}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Quality craftsmanship"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
