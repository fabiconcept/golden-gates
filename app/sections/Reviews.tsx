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
                                    src={"https://golden-gates.sirv.com/model-3.jpg"}
                                    alt={"house"}
                                    height={1000}
                                    width={1000}
                                    priority
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Sarah Gwerry</h3>
                                <p className="opacity-60">Wordpress Developer</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="font-semibold">Good work</h5>
                            <p className="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum. Voluptas maxime illum eius deleniti!</p>
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
                                    src={"https://golden-gates.sirv.com/model-4.jpg"}
                                    alt={"house"}
                                    height={1000}
                                    width={1000}
                                    priority
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Sarah Gwerry</h3>
                                <p className="opacity-60">Wordpress Developer</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="font-semibold">Good work</h5>
                            <p className="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum. Voluptas maxime illum eius deleniti!</p>
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
                                <h3 className="text-lg font-semibold">Sarah Gwerry</h3>
                                <p className="opacity-60">Wordpress Developer</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="font-semibold">Good work</h5>
                            <p className="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum. Voluptas maxime illum eius deleniti!</p>
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