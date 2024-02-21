import HeroSection from "./sections/HeroSection";
import NavSection from "./sections/NavSection";

export default function page() {
    return (
        <div className="bg-black/5 min-h-screen">
            <NavSection />
            <HeroSection />
        </div>
    )
}