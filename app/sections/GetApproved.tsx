import Image from "next/image";

export default function GetApproved() {
    return (
        <section className="py-16 sm:px-24 px-8 bg-white/50">
            <section className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 w-full md:gap-12 gap-24">
                <div>
                    <div className="sm:h-[30rem] h-[20rem] w-full overflow-hidden">
                        <Image
                            src={"https://golden-gates.sirv.com/cytonn-photography-n95VMLxqM2I-unsplash.jpg"}
                            alt={"house"}
                            height={1000}
                            width={1000}
                            priority
                            className={"w-full h-full object-cover"}
                        />
                    </div>
                    <h2 className="text-3xl py-4 font-semibold">Get pre-approved</h2>
                    <p className="opacity-70">We&apos;ll collect some information about you and the type of home that you&apos;re looking for, and then we&apos;ll provide you with a pre-approval letter to use when you&apos;re ready.</p>
                    <div className="w-fit mt-4 p-8 py-4 smooth cursor-pointer select-none border-2 border-orange-400 hover:bg-orange-400 hover:border-transparent hover:text-white active:scale-90 hover:scale-105">
                        Get Started
                    </div>
                </div>
                <div>
                    <div className="sm:h-[30rem] h-[20rem] w-full overflow-hidden">
                        <Image
                            src={"https://golden-gates.sirv.com/scott-graham-5fNmWej4tAA-unsplash.jpg"}
                            alt={"house"}
                            height={1000}
                            width={1000}
                            priority
                            className={"w-full h-full object-cover"}
                        />
                    </div>
                    <h2 className="text-3xl py-4 font-semibold">Find a loan program tailored to you</h2>
                    <p className="opacity-70">Are you a service member? Are you looking to get cash out? Do you have poor credit history? We offer a range of programs that can be tailored to your unique needs.</p>
                    <div className="w-fit mt-4 p-8 py-4 smooth cursor-pointer select-none border-2 border-orange-400 hover:bg-orange-400 hover:border-transparent hover:text-white active:scale-90 hover:scale-105">
                        Learn more
                    </div>
                </div>
            </section>
        </section>
    )
}