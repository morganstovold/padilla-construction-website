import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import BackgroundImage2 from "@/public/image-1.jpg";
import BackgroundImage1 from "@/public/image-6.jpg";
import { ViewLink } from "./ViewLink";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-alternate py-16 text-white sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl space-y-4 text-center sm:mb-12 sm:space-y-6 lg:mb-16">
          <p className="font-semibold text-sm tracking-wide sm:text-base">
            SERVICES
          </p>
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Our construction solutions
          </h2>
          <p className="text-sm text-white/80 sm:text-base">
            Comprehensive building services for residential and commercial
            projects
          </p>
        </div>

        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-xl border border-border-alternate last-of-type:grid last-of-type:auto-cols-fr last-of-type:grid-cols-1 last-of-type:sm:grid-cols-2 lg:last-of-type:col-span-2">
            <div className="block p-6 first-of-type:flex-1 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2">Remodel</p>
                <h2 className="mb-3 text-2xl md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Home renovation and remodeling
                </h2>
                <p>
                  Transform your living spaces with expert design and
                  construction
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <ViewLink
                  href="#"
                  className="group flex items-center gap-1 text-sm sm:text-base"
                >
                  View
                  <ChevronRightIcon className="size-4 transition-all group-hover:translate-x-1" />
                </ViewLink>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-center self-start">
              <Image
                src={BackgroundImage1}
                alt="Home renovation"
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-xl border border-border-alternate last-of-type:grid last-of-type:auto-cols-fr last-of-type:grid-cols-1 last-of-type:sm:grid-cols-2 lg:last-of-type:col-span-2">
            <div className="block p-6 first-of-type:flex-1 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2">Build</p>
                <h2 className="mb-3 text-2xl md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  New construction projects
                </h2>
                <p>Creating modern spaces from foundation to finish</p>
              </div>
              <div className="mt-5 md:mt-6">
                <ViewLink
                  href="#"
                  className="group flex items-center gap-1 text-sm sm:text-base"
                >
                  Explore
                  <ChevronRightIcon className="size-4 transition-all group-hover:translate-x-1" />
                </ViewLink>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-center self-start">
              <Image
                src={BackgroundImage2}
                alt="New construction"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
