import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function Reviews() {
    return (
        <div className="py-8 bg-white/40">
            <section className="max-w-[1400px] mx-auto py-8 sm:px-24 px-8">
                <h1 className="text-4xl font-semibold py-5 text-center">What are our Clients saying?</h1>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] justify-center gap-4 mt-6">
                    <div className="border border-transparent hover:border-black/5 hover:scale-105 hover:bg-white bg-white/50 p-4 smooth">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full border overflow-hidden">
                                <Image
                                    src={"https://golden-gates.sirv.com/pexels-craig-adderley-3658708.jpg"}
                                    alt={"house"}
                                    height={1000}
                                    width={1000}
                                    priority
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Maria Rodriguez</h3>
                                <p className="opacity-60">Financial Analyst</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="font-semibold">Effortless pre-approval</h5>
                            <p className="opacity-50">Effortless pre-approval, expert guidance, and a seamless move-in process. This mortgage service delivers a five-star home buying experience!</p>
                        </div>
                        <div className="flex gap-3 items-center py-4">
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                        </div>
                    </div>
                    <div className="border border-transparent hover:border-black/5 hover:scale-105 hover:bg-white bg-white/50 p-4 smooth">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full border overflow-hidden">
                                <Image
                                    src={"https://golden-gates.sirv.com/pexels-david-kwewum-2743754.jpg"}
                                    alt={"house"}
                                    height={1000}
                                    width={1000}
                                    priority
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Jamal Thompson</h3>
                                <p className="opacity-60">Software Engineer</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="font-semibold">Quick pre-approval</h5>
                            <p className="opacity-50">Quick pre-approval, invaluable agent support, and a smooth transition to my dream home. Exceptional service from start to finish!</p>
                        </div>
                        <div className="flex gap-3 items-center py-4">
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                        </div>
                    </div>
                    <div className="border border-transparent hover:border-black/5 hover:scale-105 hover:bg-white bg-white/50 p-4 smooth">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full border overflow-hidden">
                                <Image
                                    src={"https://golden-gates.sirv.com/model-2.jpg"}
                                    alt={"house"}
                                    height={1000}
                                    width={1000}
                                    priority
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Kelsey White</h3>
                                <p className="opacity-60">Marketing Specialist</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="font-semibold">Top-notch experience</h5>
                            <p className="opacity-50">Top-notch experience! Efficient pre-approval, outstanding agent guidance, and a joyful move-in. Highly recommend for a pleasant home buying journey!</p>
                        </div>
                        <div className="flex gap-3 items-center py-4">
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                            <span className="text-yellow-400"><FaStar /></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}