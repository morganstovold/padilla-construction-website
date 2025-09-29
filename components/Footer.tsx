import { GoogleIcon, YelpIcon } from "./BrandIcons";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";
import { ViewLink } from "./ViewLink";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#whychoose", label: "Why Us" },
    { href: "/#services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.yelp.com/biz/padilla-design-and-build-alamo",
      icon: YelpIcon,
      label: "Yelp",
    },
    {
      href: "",
      icon: GoogleIcon,
      label: "Google",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-alternate text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-8 sm:py-12">
          {/* Top Section */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="mx-auto flex-shrink-0 sm:mx-0">
              <Logo />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <ViewLink
                  key={link.href}
                  href={link.href}
                  className={buttonVariants({
                    variant: "link",
                    className:
                      "group !no-underline relative whitespace-nowrap p-1 font-normal text-white text-xs hover:text-tertiary sm:p-2 sm:text-base",
                  })}
                >
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
                  {link.label}
                </ViewLink>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex gap-4 border-white/20 border-t pt-6 sm:items-center sm:justify-between">
            <p className="text-center text-sm text-white/80">
              © {new Date().getFullYear()} Padilla Design and Build.
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <ViewLink
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="flex-shrink-0 fill-white transition-colors hover:fill-tertiary"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </ViewLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
