import Image from "next/image";
import Link from "next/link";
import Counter from "../components/AnimatedCountingNumbers";

export default function HeroSection() {
    
    return (
        <section className="pt-12 sm:px-24 md:px-8 px-4 grid md:grid-cols-2 grid-cols-1 gap-8 w-full max-w-[1400px] mx-auto">
            <div className="grid place-content-center sm:text-left text-center">
                <h1 className="sm:text-6xl text-5xl font-bold py-6 relative">
                    Home Loans Made Easy
                    <span>: <i>Goldwater</i></span>
                </h1>
                <p className="text-lg opacity-50 sm:max-w-[90%]">
                    Discover a seamless process, competitive rates, and access to hundreds of loan programs.
                    Apply now in as little as 5 minutes.
                </p>

                <div className="mt-6 flex gap-4 md:pr-12 text-center">
                    <Link href={"https://goldwater.floify.com"} target="_blank" className="flex-1 p-8 py-4 smooth cursor-pointer select-none bg-orange-400 border-2 border-transparent text-white active:scale-90 hover:scale-105 grid place-items-center">
                        Apply Now
                    </Link>
                </div>
            </div>
            <div className="w-full xl:h-[40rem] h-[30rem] bg-slate-400 relative">
                <Image
                    src={"https://golden-gates.sirv.com/bernard-hermant-KqOLr8OiQLU-unsplash.jpg"}
                    alt={"house"}
                    height={1000}
                    width={1000}
                    priority
                    className={"w-full h-full object-cover"}
                />
                <div className="absolute bottom-0 w-full sm:rounded-t-[5rem] rounded-t-[3rem] text-center bg-white p-4 sm:px-12 px-6 grid grid-cols-3 place-content-center">
                    <div className="flex flex-col items-center">
                        <h1 className="sm:text-4xl text-xl font-semibold opacity-80">
                            <Counter key={"8k"} value={8000}/>
                            <span className="text-orange-400">+</span>
                        </h1>
                        <span className="opacity-50 sm:text-base text-sm">In Loan Volume</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="sm:text-4xl text-xl font-semibold opacity-80">
                            <Counter key={"2k"} value={2000} />
                            <span className="text-orange-400">+</span>
                        </h1>
                        <span className="opacity-50 sm:text-base text-sm">Satisfied clients</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="sm:text-4xl text-xl font-semibold opacity-80">
                            <Counter key={"1k"} value={1000} />
                            <span className="text-orange-400">+</span>
                        </h1>
                        <span className="opacity-50 sm:text-base text-sm">Loan programs</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
