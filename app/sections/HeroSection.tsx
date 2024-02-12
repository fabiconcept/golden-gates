import Image from "next/image";
import Team from "./components/Team";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="w-screen h-screen relative text-white">
            <div className="top-0 left-0 absolute grid place-items-center w-full h-full overflow-hidden bg-black select-none pointer-events-none">
                <Image
                    src={"https://golden-gates.sirv.com/bg-one.jpg"}
                    width={1500}
                    height={1500}
                    alt="bg-one"
                    priority
                    className="object-cover h-full min-w-full opacity-60 saturate-150 brightness-50"
                />
            </div>

            <div className="flex flex-col items-center justify-between xl:pt-40 pt-32 relative z-10 h-full">
                <div className="flex flex-col items-center w-full -gap-4">
                    <div className="relative z-10 -mb-10 -rotate-2 bg-black/20 border border-white/60 font-semibold capitalize text-sm px-8 py-1 backdrop-blur-lg w-fit rounded-3xl">we have an offer for you!</div>                \
                    <div className="backdrop-blur-sm w-fit xl:max-w-[50%] max-w-[60%] bg-black/20 bg-gradient-to-b from-white/30 to-transparent relative border border-white/50 rounded-[5rem] py-6 px-12 xl:text-6xl text-5xl text-center font-semibold flex flex-col items-center">
                        <span>A dream residence at our <span className="text-primary-color-500">Jungle House</span>.</span>
                    </div>
                </div>
                <div className="p-6 px-12 grid grid-cols-[20rem_1fr_20rem] flex-wrap w-full items-end">
                    <Team />
                    <Link href={"#"} className="flex gap-2 items-center justify-center cursor-pointer">
                        Explorer 
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff" height="12px" width="12px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
                            <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                        </svg>
                    </Link>

                    <div className="p-2 flex items-center bg-white rounded-[5rem] cursor-pointer text-black justify-between w-[18rem]">
                        <span className="px-6">Search in properties</span>
                        <div className="h-12 w-12 rounded-full bg-primary-color-500 text-black grid place-items-center">
                            <span className="-rotate-45">
                                <Image
                                    src={"https://golden-gates.sirv.com/down-arrow-2.svg"}
                                    width={20}
                                    height={20}
                                    alt="arrow down"
                                    priority
                                    className="object-cover h-full min-w-full opacity-60 saturate-150 brightness-50"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}