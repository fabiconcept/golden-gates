"use client"
import Image from "next/image";
import { FaHouseUser, FaMoneyCheckDollar } from "react-icons/fa6";    
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Counter from "../components/AnimatedCountingNumbers";


export default function WhyUs() {
    const [section01Ref, inView01] = useInView({ threshold: 0.25 });
    const [section02Ref, inView02] = useInView({ threshold: 0.25 });
    const controls = useAnimation();
    const controls02 = useAnimation();

    const fadeInOutVariantsImg01 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
    };
    
    const fadeInOutVariantsImg02 = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
    };
    
    const fadeInOutVariantsText01 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
    };
    
    const fadeInOutVariantsText02 = {
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
        <section className="py-16 sm:px-24 md:px-8 px-4 bg-white/50" id="whyus">
            <section className="max-w-[1400px] mx-auto">
                <h2 className="text-4xl font-semibold pt-5 pb-12">Why choose us?</h2>
                <section className="grid md:grid-cols-2 grid-cols-1 w-full md:gap-12 gap-24">

                    <motion.div 
                        className="flex flex-col gap-6"
                        ref={section01Ref}
                    >
                        <div className="relative min-h-[30rem] h-full w-full">
                            <motion.div 
                                className="absolute h-[70%] w-[70%] bg-black"
                                animate={controls}
                                initial="hidden"
                                variants={fadeInOutVariantsImg01}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={"https://golden-gates.sirv.com/joel-filipe-RFDP7_80v5A-unsplash.jpg"}
                                    alt={"house"}
                                    height={1000}
                                    width={1000}
                                    priority
                                    className={"w-full h-full object-cover opacity-90"}
                                />
                            </motion.div>
                            <motion.div 
                                className="absolute h-[70%] w-[70%] bottom-[0%] right-0"
                                animate={controls}
                                initial="hidden"
                                variants={fadeInOutVariantsImg02}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={"https://golden-gates.sirv.com/jason-briscoe-UV81E0oXXWQ-unsplash.jpg"}
                                    alt={"house"}
                                    height={1000}
                                    width={1000}
                                    priority
                                    className={"w-full h-full object-cover"}
                                />
                            </motion.div>

                            <motion.div 
                                className="absolute sm:bottom-[20%] -top-[5%] left-[15%] w-[16rem] h-fit p-3 bg-white shadow border grided-black border-black/20 flex flex-col gap-2"
                                animate={controls}
                                initial="hidden"
                                variants={fadeInOutVariantsText01}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-sm font-semibold">First-Time Homebuyer Programs</span>
                                <p className="flex items-center">
                                    <span className="text-base p-3 text-orange-400"><FaHouseUser /></span>
                                    <span className="text-xs opacity-50">
                                    &quot;We have countless first time Homebuyer programs designed to save you time and money!&quot;
                                    </span>
                                </p>
                            </motion.div>

                            <motion.div 
                                className="absolute -bottom-[10%] left-[0%] w-[16rem] p-3 bg-white shadow border grided-black border-black/20 flex flex-col gap-2"
                                animate={controls}
                                initial="hidden"
                                variants={fadeInOutVariantsText02}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-sm font-semibold">Investment Loan Programs</span>
                                <p className="flex items-center">
                                    <span className="text-base p-3 text-orange-400"><FaMoneyCheckDollar /></span>
                                    <span className="text-xs opacity-50">
                                    &quot;Elevate your investment portfolio with our exclusive investment loan programs - Expert guidance awaits you here!&quot;
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={section02Ref}
                        animate={controls02}
                        initial="hidden"
                        variants={fadeInOutVariants02}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-semibold">We have a proven track record of Success.</h2>
                        <p className="py-5 sm:text-xl text-base opacity-50">We provide competitive loan options at the price you want without the fees.</p>
                        <div className="py-6">
                            <h3 className="text-xl font-semibold opacity-70">Save Time</h3>
                            <h1 className="text-2xl font-bold py-2 text-orange-400"><Counter key={"18d"} value={18}/> Days</h1>
                            <p className="opacity-50">Close your home fast and hassle free. Leverage the speed of Goldwater&apos;s lightning fast
                                financing to get ahead of the competition. With an average of <Counter key={"18days"} value={18}/> days from loan
                                submission to close we are industry experts with a reputation for speed.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="text-xl font-semibold opacity-70">Save Money</h3>
                            <h1 className="text-2xl font-bold py-2 text-orange-400"><Counter key={"2kand"} value={2000}/>+</h1>
                            <p className="opacity-50">We&apos;ll match you with the right loan program for you, saving the average client on
                                average <Counter key={"2kandm"} value={2000}/>+ in closing costs.</p>
                        </div>
                    </motion.div>
                </section>
            </section>
        </section>
    )
}