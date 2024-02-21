import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="py-8 md:px-24 px-8 grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="grid place-content-center sm:text-left text-center">
                <h1 className="sm:text-6xl text-5xl font-bold py-6 relative">
                    Your Property Our Priority. 
                    <p>Just in <i>Goldwater</i></p>
                </h1>
                <p className="text-lg opacity-50 max-w-[90%]">
                    We are ready to help you find a comfort home based on what you need. So what are you waiting for?
                </p>

                <div className="mt-6 flex gap-4 md:pr-12 text-center">
                    <div className="flex-1 p-8 py-4 bg-orange-400 border-2 border-transparent text-white active:scale-90 hover:scale-105 grid place-items-center">
                        Request a Loan
                    </div>
                    <div className="flex-1 p-8 py-4 text-orange-400 border-2 border-orange-400 hover:bg-orange-400 hover:border-transparent hover:text-white active:scale-90 hover:scale-105 grid place-items-center">
                        Contact us
                    </div>
                </div>
            </div>
            <div className="w-full h-[30rem] bg-slate-400 relative">
                <Image
                    src={"https://golden-gates.sirv.com/bernard-hermant-KqOLr8OiQLU-unsplash.jpg"}
                    alt={"house"}
                    height={1000}
                    width={1000}
                    priority
                    className={"w-full h-full object-cover"}
                />
                <div className="absolute bottom-0 w-full rounded-t-[5rem] bg-white p-4 sm:px-12 px-6 grid grid-cols-3 place-content-center">
                    <div className="flex flex-col items-center">
                        <h1 className="sm:text-4xl text-xl font-semibold opacity-80">9k<span className="text-orange-400">+</span></h1>
                        <span className="opacity-50 sm:text-base text-sm">Project complete</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="sm:text-4xl text-xl font-semibold opacity-80">3k<span className="text-orange-400">+</span></h1>
                        <span className="opacity-50 sm:text-base text-sm">Satisfied clients</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="sm:text-4xl text-xl font-semibold opacity-80">1k<span className="text-orange-400">+</span></h1>
                        <span className="opacity-50 sm:text-base text-sm">Awards recieved</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
