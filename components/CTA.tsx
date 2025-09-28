import { ChevronRightIcon } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { ViewLink } from "./ViewLink";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-background py-16 text-foreground sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-5 font-bold text-2xl md:mb-6 md:text-4xl lg:text-6xl">
          Ready to start your project
        </h2>
        <p className="md:text-md">
          Get a free consultation and quote for your next construction or
          renovation project. We're ready to bring your vision to life.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <ViewLink
            href="#"
            className={buttonVariants({
              variant: "secondary",
              className: "group",
            })}
          >
            Contact Us
            <ChevronRightIcon className="size-4 transition-all group-hover:translate-x-1" />
          </ViewLink>
        </div>
      </div>
    </section>
  );
}
