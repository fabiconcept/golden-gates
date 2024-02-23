import Image from "next/image";

export default function ClientsSection() {
    return (
        <section className="w-full grided-white p-6 bg-orange-400 flex justify-center text-white">
            <div className="w-full flex items-center justify-center flex-wrap gap-12 filter brightness-0 invert">
                <Image
                    src={"https://golden-gates.sirv.com/forbes.svg"}
                    alt=""
                    height={500}
                    width={500}
                    className="max-h-8 min-h-6 h-6 w-fit object-contain"
                />
                <Image
                    src={"https://golden-gates.sirv.com/cnbc.svg"}
                    alt=""
                    height={500}
                    width={500}
                    className="max-h-8 min-h-6 h-6 w-fit object-contain"
                />
                <Image
                    src={"https://golden-gates.sirv.com/BI.svg"}
                    alt=""
                    height={500}
                    width={500}
                    className="max-h-8 min-h-6 h-6 w-fit object-contain"
                />
                <Image
                    src={"https://golden-gates.sirv.com/bloomberg.svg"}
                    alt=""
                    height={500}
                    width={500}
                    className="max-w-24 object-contain"
                />
                <Image
                    src={"https://golden-gates.sirv.com/inc.svg"}
                    alt=""
                    height={500}
                    width={500}
                    className="max-h-6 min-h-6 h-6 w-fit object-contain"
                />
            </div>
        </section>
    )
}