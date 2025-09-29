"use client";

import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/useIsMobile";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";
import { ViewLink } from "./ViewLink";

export default function Navbar() {
  const isMobile = useIsMobile();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#whychoose", label: "Why Us" },
    { href: "#services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLinkComponent = ({
    href,
    label,
    mobile = false,
  }: {
    href: string;
    label: string;
    mobile?: boolean;
  }) => (
    <ViewLink
      href={href}
      className={buttonVariants({
        variant: "link",
        className: mobile
          ? "group !no-underline relative justify-start p-0 font-medium text-lg tracking-wide hover:text-tertiary"
          : "group !no-underline relative whitespace-nowrap font-medium text-base text-shadow-lg text-white tracking-wide hover:text-tertiary",
      })}
    >
      <div className="absolute bottom-0 left-0 h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
      {label}
    </ViewLink>
  );

  return (
    <nav className="absolute top-0 right-0 left-0 z-20 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-2 sm:gap-4">
            {navLinks.map((link) => (
              <NavLinkComponent
                key={link.href}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md transition-colors hover:bg-white/10"
                aria-label="Open menu"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] border-white/20 border-l sm:w-[350px]"
            >
              <SheetHeader className="border-b">
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <NavLinkComponent
                      href={link.href}
                      label={link.label}
                      mobile
                    />
                  </SheetClose>
                ))}
              </div>

              <SheetFooter className="mt-auto pt-6">
                <div className="text-sm opacity-75">
                  © {new Date().getFullYear()} Padilla Design and Build.
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
}
