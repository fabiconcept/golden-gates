import Image from "next/image";
import Link from "next/link";
export default function NavSection() {
    return (
        <nav className="flex bg-white justify-between p-4 sm:px-12 px-6 items-center border-b border-b-black/10">
            <section className="flex items-center gap-12">
                <Image
                    src={"https://golden-gates.sirv.com/logo.png"}
                    alt="Logo black"
                    height={200}
                    width={500}
                    className="h-8 object-contain w-fit"
                 />

                 <div className="flex items-center list-none">
                    <Link href={"#"} className="px-8 hover:font-semibold whitespace-nowrap md:block hidden cursor-pointer">For Rent</Link>
                    <Link href={"#"} className="px-8 hover:font-semibold whitespace-nowrap md:block hidden cursor-pointer">For Sale</Link>
                    <Link href={"#"} className="px-8 hover:font-semibold whitespace-nowrap md:block hidden cursor-pointer">Blog</Link>
                    <Link href={"#"} className="px-8 hover:font-semibold whitespace-nowrap md:block hidden cursor-pointer">Contact Us</Link>
                 </div>
            </section>

            <section className="flex gap-4 items-center">
                <div className="bg-orange-400 text-white p-8 py-3 font-semibold cursor-pointer active:scale-90 hover:scale-105 select-none">
                    Get a Loan
                </div>
                <div className='w-[25px] grid md:hidden gap-1 cursor-pointer'>
                    <div className='h-[2px] w-full bg-black'></div>
                    <div className='h-[2px] w-full bg-black'></div>
                    <div className='h-[2px] w-full bg-black'></div>
                </div>
            </section>

        </nav>
    )
}