import Link from "next/link";

export default function InfoSection() {
    return (
        <section className="py-24 sm:px-24 px-8 grided-black h-fit text-center flex flex-col">
            <h3 className="md:text-4xl sm:text-3xl text-2xl max-w-3xl mx-auto">
                Discover a faster, easier and cheaper way to <span className="text-orange-400">finance your home</span>. Whether you&apos;re <span className="text-orange-400">looking to buy, renovate or refinance</span> - we&apos;ve got you covered.
            </h3>
            <Link href={"https://goldwater.floify.com"} target="_blank" className="px-8 py-4 mt-4 bg-orange-400 font-semibold text-white w-fit mx-auto hover:opacity-100 opacity-80 cursor-pointer active:scale-90 select-none smooth">
                Apply now
            </Link>
        </section>
    )
}