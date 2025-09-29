import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import BackgroundImage1 from "@/public/background-3.jpg";
import { buttonVariants } from "./ui/button";
import { ViewLink } from "./ViewLink";

export default function QualitySection() {
  const features = [
    "Skilled tradespeople ensure precision",
    "Premium materials selected for durability",
    "Rigorous quality control at every stage",
  ];

  return (
    <section
      id="quality"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-background py-16 text-foreground sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-sm tracking-wide sm:text-base md:mb-4">
              Quality
            </p>
            <h1 className="mb-5 text-4xl md:mb-6 lg:text-6xl">
              Uncompromising craftsmanship and materials
            </h1>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              We deliver exceptional results through meticulous attention to
              detail and superior materials. Our commitment is your
              satisfaction.
            </p>
            <ul className="my-4 list-disc pl-5">
              {features.map((feature, index) => (
                <li key={index} className="my-1 self-start pl-2">
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <ViewLink
                href="#"
                className={buttonVariants({ variant: "secondary" })}
              >
                Learn
              </ViewLink>
              <ViewLink
                href="#"
                className={buttonVariants({
                  variant: "link",
                  className: "group",
                })}
              >
                Details
                <ChevronRightIcon className="size-4 transition-all group-hover:translate-x-1" />
              </ViewLink>
            </div>
          </div>
          <div>
            <Image
              src={BackgroundImage1}
              className="w-full rounded-xl object-cover"
              alt="Background"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
