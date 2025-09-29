"use client";

import { ChevronRightIcon } from "lucide-react";
import * as motion from "motion/react-m";
import { buttonVariants } from "./ui/button";
import { ViewLink } from "./ViewLink";

export default function CTA() {
  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section
      id="cta"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-background py-16 text-foreground sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ctaVariants}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-4 font-semibold text-sm text-tertiary uppercase tracking-widest sm:text-base">
            Let's Build Together
          </p>
          <h2 className="mb-6 text-3xl leading-tight sm:text-4xl md:mb-8 lg:text-5xl xl:text-6xl">
            Ready to start your project?
          </h2>
          <p className="mb-8 text-base text-muted-foreground sm:text-lg md:mb-10 md:text-xl">
            Get a free consultation and quote for your next construction or
            renovation project. We're ready to bring your vision to life.
          </p>
          <div className="flex items-center justify-center gap-4">
            <ViewLink
              href="#contact"
              className={buttonVariants({
                size: "lg",
                className: "group",
              })}
            >
              Contact Us
              <ChevronRightIcon className="size-4 transition-all group-hover:translate-x-1" />
            </ViewLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
