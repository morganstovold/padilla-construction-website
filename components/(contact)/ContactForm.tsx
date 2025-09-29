"use client";

import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import * as motion from "motion/react-m";
import { useEffect } from "react";
import { ViewLink } from "../ViewLink";

export default function ContactForm() {
  useEffect(() => {
    if (!document.querySelector('link[href*="work_request_embed.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
      link.media = "screen";
      document.head.appendChild(link);
    }

    const containerId = "8d54c3c3-881d-4849-a185-6f48b7faa48b-1042146";
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", containerId);
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/8d54c3c3-881d-4849-a185-6f48b7faa48b/public/work_request/embedded_work_request_form?form_id=1042146",
    );
    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "(925) 305-6316",
      href: "tel:+19253056316",
    },
    {
      icon: MailIcon,
      label: "Email",
      value: "noe@PadillaDesignandBuild.com",
      href: "mailto:noe@PadillaDesignandBuild.com",
    },
    {
      icon: MapPinIcon,
      label: "Office",
      value: "3000 Danville Blvd Ste 7-103 Alamo, CA 94507",
      href: "https://maps.google.com",
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

  const formVariants = {
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
      id="contact-form"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-background py-16 text-foreground sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-3xl space-y-4 text-center sm:mb-16 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <p className="font-semibold text-shadow-xs text-sm text-tertiary uppercase tracking-widest sm:text-base">
            Request a Quote
          </p>
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Tell us about your project
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Contact Info Sidebar */}
          <motion.div
            className="space-y-6 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <div className="rounded-xl border border-tertiary/20 bg-card p-8 shadow-sm">
              <h3 className="mb-6 font-medium text-xl">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-full bg-tertiary/10 p-3">
                        <IconComponent className="size-5 text-tertiary" />
                      </div>
                      <div>
                        <p className="mb-1 font-medium text-muted-foreground text-sm">
                          {info.label}
                        </p>
                        <ViewLink
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          className="text-base transition-colors hover:text-tertiary"
                        >
                          {info.value}
                        </ViewLink>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border-tertiary/20 border-t pt-8">
                <p className="mb-3 font-medium text-sm">Business Hours</p>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Jobber Form */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <div className="overflow-hidden rounded-xl border border-tertiary/20 bg-card shadow-sm">
              <div
                id="8d54c3c3-881d-4849-a185-6f48b7faa48b-1042146"
                suppressHydrationWarning
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
