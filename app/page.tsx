// import ClientsSection from "./sections/ClientsSection";
import EasyService from "./sections/EasyService";
import FooterSection from "./sections/FooterSection";
import GetApproved from "./sections/GetApproved";
import HeroSection from "./sections/HeroSection";
import InfoSection from "./sections/Info";
import NavSection from "./sections/NavSection";
import Reviews from "./sections/Reviews";
import WhyUs from "./sections/WhyUs";

export default function page() {
    return (
        <div className="bg-[rgb(0,0,0,0.0125)] scroll-smooth min-h-screen grided-black overflow-x-hidden relative">
            <NavSection main={0} />
            <HeroSection />
            {/* <ClientsSection /> */}
            <GetApproved />
            <WhyUs />
            <EasyService />
            <Reviews />
            <InfoSection />
            <FooterSection />
        </div>
    )
}