"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavSection() {
    const [openNav, setOpenNav] = useState<boolean>(false);

    return (
        <>
            <nav className={`
                flex bg-white/80 backdrop-blur justify-between sm:p-4 p-6 sm:px-12 px-6 items-center border-b border-b-black/10 sticky top-0 z-30               
            `}>
                <section className="flex items-center gap-12">
                    <Image
                        src={"https://golden-gates.sirv.com/logo.png"}
                        alt="Logo black"
                        height={200}
                        width={500}
                        className="h-8 object-contain w-fit z-30"
                    />

                    <div className="items-center list-none md:flex hidden">
                        <Link href={"#"} className="px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 hover:text-orange-400">For Rent</Link>
                        <Link href={"#"} className="px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 hover:text-orange-400">For Sale</Link>
                        <Link href={"#"} className="px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 hover:text-orange-400">Blog</Link>
                        <Link href={"#"} className="px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 hover:text-orange-400">Contact Us</Link>
                    </div>
                </section>

                <section className="flex gap-4 items-center">
                    <div className="bg-orange-400 smooth text-white p-8 py-3 font-semibold cursor-pointer active:scale-90 hover:scale-105 select-none sm:block hidden">
                        Get a Loan
                    </div>
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
                        <Link href={"#"} className="px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 hover:text-orange-400">For Rent</Link>
                        <Link href={"#"} className="px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 hover:text-orange-400">For Sale</Link>
                        <Link href={"#"} className="px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 hover:text-orange-400">Blog</Link>
                        <Link href={"#"} className="px-8 hover:font-semibold smooth whitespace-nowrap cursor-pointer active:scale-90 hover:text-orange-400">Contact Us</Link>
                    </div>
            </section>
        </>
    )
}