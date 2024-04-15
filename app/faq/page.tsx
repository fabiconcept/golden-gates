import { FaMessage, FaQuestion } from "react-icons/fa6";
import NavSection from "../sections/NavSection";
import FooterSection from "../sections/FooterSection";
import FHACollection from "./components/FHACollection";
import GeneralMortgageCollection from "./components/GeneralMortgageCollection";
import FeesandProcessCollection from "./components/FeesandProcessCollection";
import GeneralFAQCollection from "./components/GeneralFAQCollection";
import Link from "next/link";

export default function FaQPage() {
    return (
        <div className="overflow-x-hidden">
            <NavSection main={2} />
            <section className="sm:p-6 p-3 grided-black">
                <section className="p-8 py-12 rounded-2xl bg-orange-50 border border-orange-100">
                    <h3 className="text-3xl text-orange-500 grided-white-wash sm:max-w-sm md:max-w-[80%]">
                        Looking for help? Here are our most frequently asked questions.
                    </h3>
                    <p className="sm:max-w-sm md:max-w-[80%] mt-2 text-orange-950 sm:text-base text-sm">
                        Everything you need to know about Goldwater and our billing. Can&apos;t find the answer to a question you have? No worries, just click
                        <span className="px-2 bg-orange-200 rounded-2xl border border-orange-400/50 mx-1 cursor-pointer">I&apos;ve got a question</span> or <span className="px-2 bg-orange-200 rounded-2xl border border-orange-400/50 mx-1 cursor-pointer">Chat to our team</span>!
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
                    <GeneralFAQCollection />
                    <FeesandProcessCollection />
                    <GeneralMortgageCollection />
                    <FHACollection />
                </section>

            </section>
            <FooterSection />
        </div>
    )
}
// 