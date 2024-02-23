import Image from "next/image";

export default function EasyService() {
    return (
        <div className="py-8 bg-white">
            <section className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 py-8 sm:px-24 px-4">
                <div className="flex flex-col gap-6 sm:px-0 px-4">
                    <h1 className="sm:text-5xl text-3xl sm:text-left text-center uppercase font-semibold">Easy steps to use our service</h1>
                    <div className="flex gap-4 mt-8">
                        <div className="bg-orange-400 text-3xl px-2 py-1 h-fit text-white">01</div>
                        <div>
                            <h2 className="text-xl font-semibold">Find you comfort</h2>
                            <p className="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem enim, iure veniam cupiditate nam.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-orange-400 text-3xl px-2 py-1 h-fit text-white">02</div>
                        <div>
                            <h2 className="text-xl font-semibold">Get your agent</h2>
                            <p className="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem enim, iure veniam cupiditate nam.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-orange-400 text-3xl px-2 py-1 h-fit text-white">03</div>
                        <div>
                            <h2 className="text-xl font-semibold">Move in</h2>
                            <p className="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem enim, iure veniam cupiditate nam.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-orange-400 text-3xl px-2 py-1 h-fit text-white">04</div>
                        <div>
                            <h2 className="text-xl font-semibold">Pay whenever you want</h2>
                            <p className="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem enim, iure veniam cupiditate nam.</p>
                        </div>
                    </div>
                </div>
                <div className="min-h-[25rem] max-h-[35rem]">
                    <Image
                        src={"https://golden-gates.sirv.com/easy-unsplash.jpg"}
                        alt={"house"}
                        height={1000}
                        width={1000}
                        priority
                        className={"h-full object-cover"}
                    />
                </div>
            </section>
        </div>
    )
}