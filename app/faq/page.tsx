import { FaMessage, FaQuestion } from "react-icons/fa6";
import NavSection from "../sections/NavSection";
import FooterSection from "../sections/FooterSection";
import FHACollection from "./components/FHACollection";
import GeneralMortgageCollection from "./components/GeneralMortgageCollection";
import FeesandProcessCollection from "./components/FeesandProcessCollection";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Goldwater Home Loans - FAQ",
    description: "Find answers to frequently asked questions about home loans, mortgage financing, and homeownership.",
    keywords: ["Home Loans", "Mortgage Financing", "FAQ", "Homeownership", "Goldwater Home Loans", "Frequently Asked Questions"],
    authors: [{ name: "Favour Tochukwu Ajokubi" }],
    creator: "Favour Ajokubi",
    openGraph: {
        title: "Goldwater Home Loans - FAQ",
        description: "Find answers to frequently asked questions about home loans, mortgage financing, and homeownership.",
        url: "https://goldwaterloans.com/faq",
        locale: "en_US",
        images: [
            {
                url: "https://golden-gates.sirv.com/faq.jpg",
                width: "1200",
                height: "630",
                alt: "Photo of a FAQ"
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Goldwater Home Loans - FAQ',
        description: 'Find answers to frequently asked questions about home loans, mortgage financing, and homeownership.',
        images: ['https://golden-gates.sirv.com/faq.jpg'],
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
            <NavSection main={2} />
            <section className="sm:p-6 p-3 grided-black">
                <section className="p-8 py-12 rounded-2xl bg-orange-50 border border-orange-100">
                    <h3 className="text-3xl text-orange-500 grided-white-wash sm:max-w-sm md:max-w-[80%]">
                        Looking for help? Here are our most frequently asked questions.
                    </h3>
                    <p className="sm:max-w-sm md:max-w-[80%] mt-2 text-orange-950 sm:text-base text-sm flex gap-1 flex-wrap">
                        Everything you need to know about Goldwater and our billing. Can&apos;t find the answer to a question you have? No worries, just click
                        <span className={"whitespace-nowrap"}><span className="px-2 bg-orange-200 rounded-2xl border border-orange-400/50 mx-1 cursor-pointer">I&apos;ve got a question</span> or <span className="px-2 bg-orange-200 rounded-2xl border border-orange-400/50 mx-1 cursor-pointer">Chat to our team</span></span>
                    </p>
                </section>
                <section className="flex gap-3 my-5 flex-wrap">
                    <Link href={"tel:+17706569593"} className="smooth flex-1 rounded-lg p-4 border-2 border-orange-400 text-center flex items-center justify-center gap-2 active:scale-90 cursor-pointer hover:bg-orange-400 hover:text-white min-w-[15rem]">
                        <FaQuestion /> I&apos;ve got a question
                    </Link>
                    <Link href={"mailto:info@goldwaterfm.com"} className="smooth flex-1 rounded-lg p-4 border-2 border-orange-400 text-center flex items-center justify-center gap-2 active:scale-90 cursor-pointer bg-orange-400 text-white min-w-[15rem]">
                        <FaMessage /> Chat with our team
                    </Link>
                </section>

                <section className="flex flex-col gap-8">
                    <GeneralMortgageCollection />
                    <FeesandProcessCollection />
                    <FHACollection />
                </section>

            </section>
            <FooterSection />
        </div>
    )
}
// 