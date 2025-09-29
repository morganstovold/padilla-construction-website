"use client";

import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import * as motion from "motion/react-m";
import { ViewLink } from "./ViewLink";

export default function ContactUsSection() {
  const contactMethods = [
    {
      icon: MailIcon,
      title: "Email",
      value: "info@padilladesignbuild.com",
      href: "mailto:info@padilladesignbuild.com",
      description: "Send us an email anytime",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "(925) 555-0123",
      href: "tel:+19255550123",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: MapPinIcon,
      title: "Office",
      value: "3000 Danville Boulevard Ste 7-103 Alamo, CA 94507",
      href: "https://maps.google.com",
      description: "Visit us for a consultation",
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
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-alternate py-16 text-white sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-3xl space-y-4 text-center sm:mb-16 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <p className="font-semibold text-sm text-tertiary uppercase tracking-widest sm:text-base">
            Connect
          </p>
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Contact Us
          </h2>
          <p className="text-base text-white/80 sm:text-lg">
            Get in touch with our team for your project needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {contactMethods.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-xl border border-border-alternate bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <div className="mb-6">
                  <div className="inline-flex rounded-full bg-tertiary/10 p-4 transition-colors group-hover:bg-tertiary/20">
                    <IconComponent className="size-6 text-tertiary sm:size-7" />
                  </div>
                </div>

                <h3 className="mb-2 font-normal text-2xl leading-tight">
                  {contact.title}
                </h3>

                <p className="mb-4 text-sm text-white/60">
                  {contact.description}
                </p>

                <ViewLink
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  className="inline-block text-base text-tertiary transition-colors hover:text-white"
                >
                  {contact.value}
                </ViewLink>

                {/* Decorative corner accent */}
                <div className="pointer-events-none absolute top-4 right-4 h-8 w-8 border-tertiary/20 border-t-2 border-r-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
