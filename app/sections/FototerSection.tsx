import Image from "next/image";

export default function FototerSection() {
    const todayYr: number = new Date().getFullYear();
    return (
        <footer className="py-12 sm:px-24 px-8 bg-orange-400 text-white">
            <section className="flex flex-wrap gap-6">
                <div>
                    <Image
                        src={"https://golden-gates.sirv.com/logo.png"}
                        alt="Logo black"
                        height={200}
                        width={500}
                        className="h-8 object-contain w-fit invert"
                    />
                    <p className="max-w-sm mt-4 opacity-80">We are ready to help you find a comfort home based on what you need. So what are you waiting for?</p>
                </div>
                <div className="flex-1">

                </div>
            </section>
            <p className="mt-8 text-center">© {todayYr} Goldwater all rights reserved</p>

        </footer>
    )
}