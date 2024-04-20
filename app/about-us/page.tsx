import NavSection from "../sections/NavSection";
import FooterSection from "../sections/FooterSection";
import InfoAboutSection from "../sections/InfoAbout";
import Top from "./parts/Top";
import Growing from "./parts/Growing";
import { cardsSctions } from "@/lib/Cards";
import Card from "./parts/Card";
import Reviews from "../sections/Reviews";
import { Metadata } from "next";
import MeetTeam from "./parts/MeetTeam";

export const metadata: Metadata = {
    title: "Goldwater Home Loans - About Us",
    description: "Learn more about Goldwater Home Loans, your trusted partner for personalized and transparent home financing solutions.",
    keywords: ["Home Loans", "Mortgage Financing", "About Us", "Homeownership", "Goldwater Home Loans", "Company Overview"],
    authors: [{ name: "Favour Tochukwu Ajokubi" }],
    creator: "Favour Ajokubi",
    openGraph: {
        title: "Goldwater Home Loans - About Us",
        description: "Learn more about Goldwater Home Loans, your trusted partner for personalized and transparent home financing solutions.",
        url: "https://goldwaterloans.com/about-us",
        locale: "en_US",
        images: [
            {
                url: "https://golden-gates.sirv.com/about-img-clear.jpg",
                width: "1200",
                height: "630",
                alt: "Photo of About Us"
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Goldwater Home Loans - About Us',
        description: 'Learn more about Goldwater Home Loans, your trusted partner for personalized and transparent home financing solutions.',
        images: ['https://golden-gates.sirv.com/about-img-clear.jpg'],
    },
    icons: {
        icon: 'icons/android-chrome-192x192.png',
        shortcut: 'icons/android-chrome-512x512.png',
        apple: 'icons/apple-touch-icon.png',
        other: {
            rel: 'icons/favicon-16x16.png',
            url: 'icons/favicon-32x32.png',
        },
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function FaQPage() {
    return (
        <div className="overflow-x-hidden bg-[rgb(0,0,0,0.0125)]">
            <NavSection main={1} />
            <main className="grided-black">
                <Top />
                <Growing />

                <section className="grid grid-cols-[repeat(auto-fill,minmax(clamp(20rem,40%,40rem),1fr))] gap-6 md:px-12 sm:px-6 px-3 sm:py-12 py-6">
                    {cardsSctions.map((card, index)=>(
                        <Card content={card.content} title={card.title} index={index} key={index} />
                    ))}
                </section>
                <MeetTeam />
                <Reviews />
                <InfoAboutSection />
            </main>

            <FooterSection />
        </div>
    )
}