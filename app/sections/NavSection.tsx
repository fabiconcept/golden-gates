"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavSection({ main }: { main: number }) {
    const [openNav, setOpenNav] = useState<boolean>(false);

    return (
        <>
            <nav className={`
                flex bg-white/80 backdrop-blur justify-between sm:p-4 p-6 sm:px-12 px-6 items-center border-b border-b-black/10 sticky top-0 z-30               
            `}>
                <Link href={"/"} className="flex items-center gap-12">
                    <Image
                        src={"https://golden-gates.sirv.com/logo-main-01.png"}
                        alt="Logo black"
                        priority
                        height={200}
                        width={500}
                        className="h-8 object-contain w-fit z-30"
                    />

                </Link>
                <div className="items-center list-none md:flex hidden">
                    <Link href={main === 0? "#" : "/" } className={`px-8 hover:font-semibold smooth whitespace-nowrap ${main ===0 ? "text-orange-400": "cursor-pointer active:scale-90 hover:text-orange-400"}`}>
                        Home
                    </Link>
                    <Link href={main === 2 ? "#" : "/faq"} className={`px-8 hover:font-semibold smooth whitespace-nowrap ${main === 2 ? "text-orange-400" : "cursor-pointer active:scale-90 hover:text-orange-400"}`}>
                        FaQ
                    </Link>
                    <Link href={main === 1 ? "#" : "/about-us"} className={`px-8 hover:font-semibold smooth whitespace-nowrap ${main === 1 ? "text-orange-400" : "cursor-pointer active:scale-90 hover:text-orange-400"}`}>
                        About us
                    </Link>
                </div>

                <section className="flex gap-4 items-center">
                    <Link href={"https://goldwater.floify.com"} target="_blank" className="bg-orange-400 smooth text-white p-8 py-3 font-semibold cursor-pointer active:scale-90 hover:scale-105 select-none sm:block hidden">
                        Apply now
                    </Link>
                    <div className='w-[25px] grid md:hidden gap-1 cursor-pointer smooth z-30' onClick={() => setOpenNav(!openNav)}>
                        <div className={`
                        h-[2px] w-full bg-black smooth
                        ${openNav ? "translate-y-2 rotate-45 bg-orange-500" : ""}
                    `}></div>
                        <div className={`
                        h-[2px] w-full bg-black smooth
                        ${openNav ? "opacity-0" : ""}
                    `}></div>
                        <div className={`
                        h-[2px] w-full bg-black smooth
                        ${openNav ? "-translate-y-1 -rotate-45 bg-orange-500" : ""}
                    `}></div>
                    </div>
                </section>

            </nav>
            <section className={`
                fixed z-10 top-0 smooth bg-white/95 backdrop-blur-sm grided-black h-screen w-screen
                ${openNav ? "left-0" : "left-[100%]"}
            `}>
                    <div className="w-full h-full text-xl text-center p-[5rem] grid gap-8 place-content-center">
                    <Link onClick={() => setOpenNav(false)} href={main === 0 ? "#" : "/"} className={`px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 ${main === 0 ? "text-orange-400" : "hover:text-orange-400"}`}>Home</Link>
                    <Link onClick={() => setOpenNav(false)} href={main === 2 ? "#" : "/faq"} className={`px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 ${main === 2 ? "text-orange-400" : "hover:text-orange-400"}`}>FaQ</Link>
                    <Link onClick={() => setOpenNav(false)} href={main === 1 ? "#" : "/about-us"} className={`px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 ${main === 1 ? "text-orange-400" : "hover:text-orange-400"}`}>About us</Link>
                        <Link onClick={()=>setOpenNav(false)} href={"https://goldwater.floify.com"} target="_blank" className="bg-orange-400 smooth text-white p-8 py-3 font-semibold cursor-pointer active:scale-90 hover:scale-105 select-none sm:hidden block">
                            Apply now
                        </Link>
                    </div>
            </section>
        </>
    )
}