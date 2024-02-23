import ClientsSection from "./sections/ClientsSection";
import HeroSection from "./sections/HeroSection";
import NavSection from "./sections/NavSection";
import WhyUs from "./sections/WhyUs";

export default function page() {
    return (
        <div className="bg-black/5 min-h-screen grided-black">
            <NavSection />
            <HeroSection />
            <ClientsSection />
            <WhyUs />
        </div>
    )
}