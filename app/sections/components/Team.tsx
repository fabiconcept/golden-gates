import Image from 'next/image'

export default function Team() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center w-fit -ml-[2px]">
                <div className="h-10 w-10 rounded-full overflow-hidden grid place-items-center cursor-pointer hover:scale-110 active:scale-90 border-2">
                    <Image
                        src={"https://golden-gates.sirv.com/model-1.jpg"}
                        width={1500}
                        height={1500}
                        alt="model"
                        priority
                        className="object-cover h-full min-w-full"
                    />
                </div>
                <div className="h-10 w-10 rounded-full overflow-hidden grid place-items-center cursor-pointer hover:scale-110 active:scale-90 border-2 -ml-2">
                    <Image
                        src={"https://golden-gates.sirv.com/model-2.jpg"}
                        width={1500}
                        height={1500}
                        alt="model"
                        priority
                        className="object-cover h-full min-w-full"
                    />
                </div>
                <div className="h-10 w-10 rounded-full overflow-hidden grid place-items-center cursor-pointer hover:scale-110 active:scale-90 border-2 -ml-2">
                    <Image
                        src={"https://golden-gates.sirv.com/model-3.jpg"}
                        width={1500}
                        height={1500}
                        alt="model"
                        priority
                        className="object-cover h-full min-w-full"
                    />
                </div>
                <div className="h-10 w-10 rounded-full overflow-hidden grid place-items-center cursor-pointer hover:scale-110 active:scale-90 border-2 -ml-2">
                    <Image
                        src={"https://golden-gates.sirv.com/model-4.jpg"}
                        width={1500}
                        height={1500}
                        alt="model"
                        priority
                        className="object-cover h-full min-w-full"
                    />
                </div>
            </div>
            <div className="w-20 h-[1.5px] rounded-lg bg-white"></div>
            <div className='w-[18rem] leading-tight text-sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sunt maxime illum quam perferendis praesentium incidunt ex laborum quaerat deserunt earum, veritatis omnis.
            </div>
        </div>
    )
}