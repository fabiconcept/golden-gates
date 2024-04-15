import Link from "next/link";

export default function InfoAboutSection() {
    return (
        <section className="py-24 sm:px-24 px-8 grided-black h-fit text-center flex flex-col">
            <h3 className="md:text-4xl sm:text-3xl text-2xl max-w-3xl mx-auto">
                Whether you&apos;re a <span className="text-orange-400">first-time</span> homebuyer or a <span className="text-orange-400">seasoned investor</span>, Goldwater is here to support you every step of the way. Join us on the journey to homeownership and experience the Goldwater difference today!
            </h3>
            <Link href={"https://goldwater.floify.com"} className="px-8 py-4 mt-4 bg-orange-400 font-semibold text-white w-fit mx-auto hover:opacity-100 opacity-80 cursor-pointer active:scale-90 select-none smooth" target="_blank">
                Join Us on the Journey
            </Link>
        </section>
    )
}
