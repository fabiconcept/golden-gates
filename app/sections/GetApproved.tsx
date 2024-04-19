"use client"
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

export default function GetApproved() {
    const [section01Ref, inView01] = useInView({ threshold: 0.25 });
    const [section02Ref, inView02] = useInView({ threshold: 0.25 });
    const controls = useAnimation();
    const controls02 = useAnimation();

    const fadeInOutVariants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    };
    
    const fadeInOutVariants02 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
    };

    useEffect(() => {
        if (inView01) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }, [controls, inView01]);
    
      useEffect(() => {
        if (inView02) {
          controls02.start('visible');
        } else {
          controls02.start('hidden');
        }
      }, [controls02, inView02]);


    return (
        <section className="py-16 sm:px-24 md:px-8 px-4 bg-white/50" id="service">
            <section className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 w-full md:gap-12 sm:gap-24 gap-8">
                <motion.div 
                    ref={section01Ref}
                    animate={controls}
                    initial="hidden"
                    variants={fadeInOutVariants}
                    transition={{ duration: 0.5 }}
                >
                    <div className="sm:h-[30rem] h-[20rem] w-full overflow-hidden">
                        <Image
                            src={"https://golden-gates.sirv.com/cytonn-photography-n95VMLxqM2I-unsplash.jpg"}
                            alt={"house"}
                            height={1000}
                            width={1000}
                            priority
                            className={"w-full h-full object-cover"}
                        />
                    </div>
                    <h2 className="text-3xl py-4 font-semibold">Get Pre-approved</h2>
                    <p className="opacity-70">We&apos;ll collect some information about you and the type of financing you&apos;re looking for. A member of our team will provide you pre-approval letter so you can take the next step forward.</p>
                    <div className="w-fit mt-4 p-8 py-4 smooth cursor-pointer select-none border-2 border-orange-400 hover:bg-orange-400 hover:border-transparent hover:text-white active:scale-90 hover:scale-105">
                        Get Started
                    </div>
                </motion.div>
                <motion.div 
                    ref={section02Ref}
                    animate={controls02}
                    initial="hidden"
                    className="flex flex-col"
                    variants={fadeInOutVariants02}
                    transition={{ duration: 0.5 }}
                >
                    <div className="sm:h-[30rem] h-[20rem] w-full overflow-hidden">
                        <Image
                            src={"https://golden-gates.sirv.com/scott-graham-5fNmWej4tAA-unsplash.jpg"}
                            alt={"house"}
                            height={1000}
                            width={1000}
                            priority
                            className={"w-full h-full object-cover"}
                        />
                    </div>
                    <h2 className="text-3xl py-4 font-semibold">Mortgage Loans Tailored To You</h2>
                    <p className="opacity-70">Are you a service member? Are you looking to get cash out? Do you have poor credit history? We offer a range of programs that can be tailored to your unique needs.</p>
                    <Link href={"https://goldwater.floify.com"} className="w-fit mt-4 p-8 py-4 smooth cursor-pointer select-none border-2 border-orange-400 hover:bg-orange-400 hover:border-transparent hover:text-white active:scale-90 hover:scale-105">
                        Learn more
                    </Link>
                </motion.div>
            </section>
        </section>
    )
}
