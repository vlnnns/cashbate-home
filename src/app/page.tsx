import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "../components/HowItWorks";
import CashBateCarousel from "@/components/CashBateCarousel";
import Faq from "@/components/Faq";
import Stats from "@/components/Stats"
import Why from "@/components/Why"
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen py-8 gap-10 ">
        {/* Navbar */}
        <Navbar />

        <main className="">
          {/* Hero Section */}
          <HeroSection />
            <WhyChoose />
            <HowItWorks />
            <CashBateCarousel />
            <Faq />
            <Stats />
            <Why />
            <Footer />
        </main>


      </div>
  );
}
