import { CircleArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Background2 from "@/public/background-2.jpg";
import Navbar from "../Navbar";
import { buttonVariants } from "../ui/button";
import { ViewLink } from "../ViewLink";

export default function Hero() {
  return (
    <section className="relative flex max-h-[60rem] min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-background text-white">
      <Navbar />
      <div className="absolute inset-0 z-0">
        <Image
          src={Background2}
          className="size-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <div className="container z-1 mx-auto flex h-full w-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-5 font-medium text-2xl md:mb-6 md:text-4xl lg:text-6xl">
          Transforming Spaces & Building Dreams
        </h1>
        <span className="text-base">
          Creative and innovative solutions for your construction needs
        </span>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
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

      <ViewLink href="#whychoose" className="absolute bottom-1/6 opacity-50">
        <CircleArrowDownIcon className="size-8 animate-bounce" />
      </ViewLink>
    </section>
  );
}
