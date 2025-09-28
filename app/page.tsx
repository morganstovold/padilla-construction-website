import ContactUsSection from "@/components/ContactUsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import QualitySection from "@/components/QualitySection";
import ServiceSection from "@/components/ServiceSection";
import ServicesSection from "@/components/Services";
import WhyChooseUsSection from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <QualitySection />
      <ServiceSection />
      <CTA />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
