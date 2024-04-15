"use client"
import NavSection from "../sections/NavSection";
import FooterSection from "../sections/FooterSection";
import InfoAboutSection from "../sections/InfoAbout";
import Top from "./parts/Top";
import Growing from "./parts/Growing";
import { cardsSctions } from "@/lib/Cards";
import Card from "./parts/Card";
import Reviews from "../sections/Reviews";

export default function FaQPage() {
    return (
        <div className="overflow-x-hidden">
            <NavSection main={1} />
            <main className="grided-black">
                <Top />
                <Growing />

                <section className="grid grid-cols-[repeat(auto-fill,minmax(clamp(20rem,40%,40rem),1fr))] gap-6 md:px-12 sm:px-6 px-3 sm:py-12 py-6">
                    {cardsSctions.map((card, index)=>(
                        <Card content={card.content} title={card.title} index={index} key={index} />
                    ))}

                </section>

                <Reviews />

                <InfoAboutSection />
            </main>


            <FooterSection />
        </div>
    )
}