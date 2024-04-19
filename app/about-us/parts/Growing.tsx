"use client"


import Counter from '@/app/components/AnimatedCountingNumbers';
import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Growing() {

    const [section01Ref, inView01] = useInView({ threshold: 0.25 });
    const controls = useAnimation();

    const fadeInOutVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
    };

    useEffect(() => {
        if (inView01) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView01]);

    return (
        <motion.section
            id="down"
            className="flex flex-col items-center sm:p-12 p-6 gap-4"
            ref={section01Ref}
            animate={controls}
            initial="hidden"
            variants={fadeInOutVariants}
            transition={{ duration: 0.5 }}
        >
            <h1 className="sm:text-3xl text-2xl font-semibold text-center">We&apos;re Growing Fast</h1>
            <div className="w-full text-center bg-white p-4 sm:px-12 px-4 md:gap-8 sm:gap-6 gap-4 flex sm:justify-around justify-between">
                <div className="flex flex-col items-center">
                    <h1 className="sm:text-3xl text-lg font-semibold opacity-80">
                        <Counter key={"8k"} value={50000000} />
                        <span className="text-orange-400">+</span>
                    </h1>
                    <span className="opacity-50 sm:text-base text-sm">Loan originations</span>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="sm:text-3xl text-lg font-semibold opacity-80">
                        <Counter key={"2k"} value={100} />
                        <span className="text-orange-400">+</span>
                    </h1>
                    <span className="opacity-50 sm:text-base text-sm">Homes financed</span>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="sm:text-3xl text-lg font-semibold opacity-80">
                        <Counter key={"1k"} value={200} />
                        <span className="text-orange-400">+</span>
                    </h1>
                    <span className="opacity-50 sm:text-base text-sm">Clients satisfied</span>
                </div>
            </div>
        </motion.section>
    )
}
