"use client"
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';


export default function EasyService() {
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
        <div className="py-8 bg-white" id="easysteps">
            <section className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 py-8 sm:px-24 px-4">
                <motion.div 
                    ref={section01Ref}
                    animate={controls}
                    initial="hidden"
                    variants={fadeInOutVariants}
                    transition={{ duration: 0.5 }} 
                    className="flex flex-col gap-6 sm:px-0 px-2"
                >
                    <h1 className="sm:text-5xl text-3xl sm:text-left text-center uppercase font-semibold">Easy Steps To Get Started</h1>
                    <div className="flex gap-4 mt-8">
                        <div className="bg-orange-400 text-3xl px-2 py-1 h-fit text-white">01</div>
                        <div>
                            <h2 className="text-xl font-semibold">Get Pre-approved</h2>
                            <p className="opacity-50">Discover a hassle-free pre-approval process tailored to your needs. Our streamlined approach ensures swift decisions and clear pathways to homeownership.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-orange-400 text-3xl px-2 py-1 h-fit text-white">02</div>
                        <div>
                            <h2 className="text-xl font-semibold">Connect with an Agent</h2>
                            <p className="opacity-50">Experience personalized assistance as you navigate the real estate landscape. Our dedicated agents are committed to guiding you towards your dream home, ensuring a smooth journey.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-orange-400 text-3xl px-2 py-1 h-fit text-white">03</div>
                        <div>
                            <h2 className="text-xl font-semibold">Settle into Your New Home</h2>
                            <p className="opacity-50">Effortlessly transition into homeownership with our expert support. We simplify the move-in process, providing you with the keys to your new home sooner than you think.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-orange-400 text-3xl px-2 py-1 h-fit text-white">04</div>
                        <div>
                            <h2 className="text-xl font-semibold">Indulge in Homeownership Bliss</h2>
                            <p className="opacity-50">Revel in the joys of your new home. Our commitment to excellence ensures that your homeownership experience is not just a transaction but a delightful journey.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    ref={section02Ref}
                    animate={controls02}
                    initial="hidden"
                    variants={fadeInOutVariants02}
                    transition={{ duration: 0.5 }} 
                    className="min-h-[25rem] max-h-[35rem]"
                >
                    <Image
                        src={"https://golden-gates.sirv.com/easy-unsplash.jpg"}
                        alt={"house"}
                        height={1000}
                        width={1000}
                        priority
                        className={"h-full object-cover"}
                    />
                </motion.div>
            </section>
        </div>
    )
}