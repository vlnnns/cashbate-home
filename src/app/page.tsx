import HeroSection from "@/components/home/HeroSection";
import WhyChoose from "@/components/home/WhyChoose";
import HowItWorks from "@/components/home/HowItWorks";
import CashBateCarousel from "@/components/home/CashBateCarousel";
import Faq from "@/components/home/Faq";
import Stats from "@/components/home/Stats";
import Why from "@/components/home/Why";
import ImageCarousel from "@/components/home/ImageCarousel"; // Добавим и этот компонент

// Это содержимое для главной страницы (/)
export default function HomePage() {
    return (
        <>
            <HeroSection />
            <WhyChoose />
            <HowItWorks />
            <CashBateCarousel />
            <Faq />
            <Stats />
            <div id="examples-carousel" className="scroll-mt-20">
                <ImageCarousel />
            </div>
            <Why />
        </>
    );
}
