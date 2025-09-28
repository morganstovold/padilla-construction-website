import { MailIcon, MapIcon, PhoneIcon } from "lucide-react";

export default function ContactUsSection() {
  const contactMethods = [
    {
      icon: <MailIcon className="size-12" />,
      title: "Email",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "info@padilladesignbuild.com",
        url: "#",
      },
    },
    {
      icon: <PhoneIcon className="size-12" />,
      title: "Phone",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "+1 (925) 555-0123",
        url: "#",
      },
    },
    {
      icon: <MapIcon className="size-12" />,
      title: "Office",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: {
        label: "Get directions >",
        url: "#",
      },
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-alternate py-16 text-white sm:gap-12 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-lg md:mb-20">
          <p className="mb-3 font-semibold text-sm tracking-wide sm:text-base md:mb-4">
            Connect
          </p>
          <h2 className="mb-5 text-4xl md:mb-6 lg:text-6xl">Contact Us</h2>
          <p>Get in touch with our team for your project needs</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-14">
          {contactMethods.map((contact, index) => (
            <div key={index}>
              <div className="mb-5 lg:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6">{contact.description}</p>
              <a className="underline" href={contact.link.url}>
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
