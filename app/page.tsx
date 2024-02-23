import ClientsSection from "./sections/ClientsSection";
import EasyService from "./sections/EasyService";
import FototerSection from "./sections/FototerSection";
import HeroSection from "./sections/HeroSection";
import InfoSection from "./sections/Info";
import NavSection from "./sections/NavSection";
import Reviews from "./sections/Reviews";
import WhyUs from "./sections/WhyUs";

export default function page() {
    return (
        <div className="bg-[rgb(0,0,0,0.0125)] min-h-screen grided-black">
            <NavSection />
            <HeroSection />
            <ClientsSection />
            <WhyUs />
            <EasyService />
            <Reviews />
            <InfoSection />
            <FototerSection />
        </div>
    )
}