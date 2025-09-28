import Hero from "@/components/(about)/Hero";
import Footer from "@/components/Footer";
import Solutions from "@/components/Services";
import WhyChoose from "@/components/WhyChooseUs";

export default function About() {
  return (
    <main className="relative flex flex-col items-center">
      <Hero />
      <WhyChoose />
      <Solutions />
      <WhyChoose />
      <Footer />
    </main>
  );
}
