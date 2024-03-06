import Image from "next/image";
import Link from "next/link";
import { FaAt, FaPhone } from "react-icons/fa6";

export default function FooterSection() {
    const todayYr: number = new Date().getFullYear();
    return (
        <footer className="py-12 sm:px-24 px-8 bg-orange-400 text-white">
            <section className="flex flex-wrap gap-6 justify-between">
                <div>
                    <Image
                        src={"https://golden-gates.sirv.com/logo.png"}
                        alt="Logo black"
                        height={200}
                        width={500}
                        className="h-8 object-contain w-fit"
                    />
                    <p className="max-w-sm mt-4 opacity-80">We are ready to help you find a comfort home based on what you need. So what are you waiting for?</p>
                </div>
                <div className="grid gap-2 h-fit my-4">
                    <span id="contact" className="text-black font-semibold uppercase">Contact us:</span>
                    <span className="sm:ml-6 ml-3 flex gap-2 items-center"><FaAt /> <Link href={"mailto:example@gmail.com"}>example@gmail.com</Link></span>
                    <span className="sm:ml-6 ml-3 flex gap-2 items-center"><FaPhone /> <Link href={"tel:+11122233340"}>+1 112 223 3340</Link></span>
                </div>
            </section>
            <p className="mt-8 text-center">© {todayYr} Goldwater all rights reserved</p>

        </footer>
    )
}