import Image from "next/image";
import { FaMapPin } from "react-icons/fa6"

export default function WhyUs() {
    return (
        <section className="py-12 sm:px-24 px-8 bg-white/50">
            <section className="grid sm:grid-cols-2 grid-cols-1 w-full max-w-[1400px] mx-auto">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold">Why choose us?</h2>
                    <div className="relative min-h-[30rem] h-full w-full">
                        <div className="absolute h-[70%] w-[70%] bg-black">
                            <Image
                                src={"https://golden-gates.sirv.com/joel-filipe-RFDP7_80v5A-unsplash.jpg"}
                                alt={"house"}
                                height={1000}
                                width={1000}
                                priority
                                className={"w-full h-full object-cover opacity-90"}
                            />
                        </div>
                        <div className="absolute h-[70%] w-[70%] bottom-[0%] right-0">
                            <Image
                                src={"https://golden-gates.sirv.com/jason-briscoe-UV81E0oXXWQ-unsplash.jpg"}
                                alt={"house"}
                                height={1000}
                                width={1000}
                                priority
                                className={"w-full h-full object-cover"}
                            />
                        </div>

                        <div className="absolute bottom-[20%] left-[15%] w-[60%] p-3 bg-white shadow border grided-black border-black/20 flex flex-col gap-2">
                            <span className="text-sm font-semibold">Head cloudy residence</span>
                            <p className="flex items-center">
                                <span className="text-base p-3 text-orange-400"><FaMapPin /></span>
                                <span className="text-xs opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati autem cum magni! Distinctio, nihil?</span>
                            </p>
                        </div>
                        
                        <div className="absolute -bottom-[10%] left-[0%] w-[60%] p-3 bg-white shadow border grided-black border-black/20 flex flex-col gap-2">
                            <span className="text-sm font-semibold">Head cloudy residence</span>
                            <p className="flex items-center">
                                <span className="text-base p-3 text-orange-400"><FaMapPin /></span>
                                <span className="text-xs opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati autem cum magni! Distinctio, nihil?</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">We are </h2>
                </div>
            </section>
        </section>
    )
}