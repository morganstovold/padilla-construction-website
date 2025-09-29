import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  TwitterIcon,
} from "./BrandIcons";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";
import { ViewLink } from "./ViewLink";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "", icon: GoogleIcon, label: "Google" },
    { href: "", icon: FacebookIcon, label: "Facebook" },
    { href: "", icon: InstagramIcon, label: "Instagram" },
    { href: "", icon: TwitterIcon, label: "Twitter" },
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
                      "group !no-underline relative whitespace-nowrap p-1 font-normal text-xs hover:text-tertiary sm:p-2 sm:text-base",
                  })}
                >
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
                  {link.label}
                </ViewLink>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-4 border-white/20 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="order-2 text-center text-sm text-white/80 sm:order-1">
              © {new Date().getFullYear()} Padilla Design and Build.
            </p>

            <div className="order-1 flex flex-row justify-between gap-4 sm:order-2 sm:items-center">
              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <ViewLink
                  href="/privacy-policy"
                  target="_blank"
                  className="group !no-underline relative whitespace-nowrap font-normal text-white/75 text-xs hover:text-tertiary sm:text-sm"
                >
                  <div className="-bottom-1 absolute left-0 h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
                  Privacy Policy
                </ViewLink>
                <ViewLink
                  href="/terms-of-use"
                  target="_blank"
                  className="group !no-underline relative whitespace-nowrap font-normal text-white/75 text-xs hover:text-tertiary sm:text-sm"
                >
                  <div className="-bottom-1 absolute left-0 h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
                  Terms of Use
                </ViewLink>
              </div>

              {/* Social Links */}
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
      </div>
    </footer>
  );
}
