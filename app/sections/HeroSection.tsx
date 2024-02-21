"use client"
import Image from "next/image";
import Team from "./components/Team";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6"
import { useEffect, useMemo, useState } from "react";

export default function HeroSection() {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const handleScroll = (): void => {
        const scrollTop = window.scrollY;
        setScrollPosition(scrollTop);
     }

     const zoomValue = useMemo(() => {
        return (scrollPosition*0.0005) + 1;
     }, [scrollPosition]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-screen h-screen relative text-white">
            <div className="top-0 left-0 absolute grid place-items-center w-full h-full overflow-hidden bg-black select-none pointer-events-none">
                <Image
                    src={"https://golden-gates.sirv.com/pexels-the-lazy-artist-gallery-1642125.jpg"}
                    width={1500}
                    height={1500}
                    alt="bg-one"
                    priority
                    style={{
                        transform: `scale(${zoomValue})`
                    }}
                    className="object-cover h-full min-w-full opacity-60 saturate-150 brightness-50 no-transition"
                />
            </div>

            <div className="flex flex-col items-center justify-between xl:pt-40 md:pt-[25vh] pt-[30vh] relative z-10 h-full">
                <div className="flex flex-col items-center w-full -gap-4">
                    <div className="relative z-10 -mb-4 -rotate-2 bg-black/20 border border-white/60 font-semibold capitalize sm:text-sm text-xs px-8 py-1 backdrop-blur-lg w-fit rounded-3xl">we have an offer for you!</div>
                    <div className="backdrop-blur-sm w-fit xl:max-w-[50%] md:max-w-[60%] max-w-[80%] bg-black/20 bg-gradient-to-b from-white/30 to-transparent relative border border-white/50 rounded-[5rem] py-6 sm:px-12 px-6 xl:text-6xl lg:text-5xl md:text-3xl text-3xl text-center font-semibold flex flex-col items-center">
                        <span>A dream residence at our <span className="text-primary-color-500">Jungle House</span>.</span>
                    </div>
                </div>
                <div className="p-6 px-12 flex md:justify-between justify-center w-full items-end">
                    <div className="md:block hidden">
                        <Team />
                    </div>
                    <Link href={"#"} className="flex sm:flex-row flex-col gap-2 items-center justify-center cursor-pointer">
                        Explorer 
                        <FaAngleDown />
                    </Link>
                </div>
            </div>

        </div>
    )
}