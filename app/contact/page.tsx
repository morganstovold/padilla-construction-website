import type { Metadata } from "next";
import ContactForm from "@/components/(contact)/ContactForm";
import Hero from "@/components/(contact)/Hero";
import Footer from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Padilla Design & Build for your home remodeling project. Free consultations available. Serving Alamo, Danville, Walnut Creek, and Contra Costa County.",
  url: "https://padilladesignbuild.com/contact",
});

export default function Contact() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <main>
        <Hero />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
