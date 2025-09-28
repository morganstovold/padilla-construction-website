import { ChevronRightIcon, InfoIcon } from "lucide-react";
import Image from "next/image";
import BackgroundImage1 from "@/public/background-3.jpg";
import BackgroundImage2 from "@/public/background-4.jpg";
import BackgroundImage3 from "@/public/background-5.jpg";
import { ViewLink } from "./ViewLink";

export default function WhyChooseUsSection() {
  return (
    <section
      id="whychoose"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-background py-16 text-foreground sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl space-y-4 text-center sm:mb-12 sm:space-y-6">
          <p className="font-semibold text-sm tracking-wide sm:text-base">
            CRAFT
          </p>
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Why choose Padilla Design and Build?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Transforming spaces with skill and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 text-white md:gap-8 lg:grid-cols-3">
          {[BackgroundImage1, BackgroundImage2, BackgroundImage3].map(
            (image, index) => (
              <div
                key={index}
                className="relative min-h-[300px] overflow-hidden rounded-lg p-6 sm:min-h-[350px] md:p-8"
              >
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/75" />
                  <Image
                    src={image}
                    className="size-full object-cover"
                    alt="Background"
                  />
                </div>
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 md:mb-6">
                    <InfoIcon className="size-5 sm:size-6" />
                  </div>
                  <h3 className="mb-3 font-normal text-3xl text-shadow-lg text-white leading-tight sm:mb-4">
                    Creative solutions for complex projects
                  </h3>
                  <p className="mb-4 flex-grow text-base text-shadow-lg text-white/80 sm:mb-6">
                    We solve design challenges with innovative approaches
                  </p>
                  <div className="mt-auto">
                    <ViewLink
                      href="#"
                      className="group flex items-center gap-1 text-sm sm:text-base"
                    >
                      Learn{" "}
                      <ChevronRightIcon className="size-4 transition-all group-hover:translate-x-1" />
                    </ViewLink>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
