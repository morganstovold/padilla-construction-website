import { CircleArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { ViewLink } from "@/components/ViewLink";
import Background2 from "@/public/background-1.jpg";

export default function Hero() {
  return (
    <section className="relative flex h-200 w-full flex-col items-center overflow-hidden bg-background text-white">
      <Navbar />
      <Image
        src={Background2}
        alt="Background"
        className="absolute z-0 h-full min-w-full object-cover"
      />
      <div className="absolute top-0 left-0 z-1 flex h-full w-full flex-col items-center justify-center bg-black/75">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-medium text-5xl">
            Transforming Spaces & Building Dreams
          </h1>
          <span className="text-xl">
            Creative and innovative solutions for your construction needs
          </span>
          <div className="mt-6 flex gap-4">
            <ViewLink
              href="/about"
              className={buttonVariants({ size: "lg", className: "min-w-32" })}
            >
              About Us
            </ViewLink>
            <ViewLink
              href="/contact"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "min-w-32",
              })}
            >
              Contact Us
            </ViewLink>
          </div>
        </div>

        <ViewLink href="#whychoose" className="absolute bottom-10 opacity-50">
          <CircleArrowDownIcon className="size-8 animate-bounce" />
        </ViewLink>
      </div>
    </section>
  );
}
