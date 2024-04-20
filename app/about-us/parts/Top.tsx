"use client"

import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa6';

export default function Top() {
    const [section01Ref, inView01] = useInView({ threshold: 0.25 });
    const [section02Ref, inView02] = useInView({ threshold: 0.1 });

    const controls = useAnimation();
    const controls2 = useAnimation();

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
            controls2.start('visible');
        } else {
            controls2.start('hidden');
        }
    }, [controls2, inView02]);

    return (
        <section className="grid md:grid-cols-2 grided-black">
            <motion.div
                className="py-12 px-12 flex flex-col gap-3 justify-center relative"
                ref={section01Ref}
                animate={controls}
                initial="hidden"
                variants={fadeInOutVariants}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-semibold text-orange-400">Our Story</h1>
                <h3 className="text-xl">Welcome to Goldwater!</h3>
                <p>
                    Founded in 2019 by Vin Wilkinson, Goldwater was born out of a vision to redefine the home buying experience. After 5 years of working within various mortgage brokerages, Vin recognized an opportunity to create something exceptional &ndash; a company dedicated to providing unparalleled service and support to clients throughout their home buying journey.
                </p>

                <Link href={"#down"} className="flex gap-2 items-center md:absolute md:bottom-12 md:left-12 animate-bounce">
                    <FaArrowDown />
                    Scroll down
                </Link>
            </motion.div>

            <motion.div
                className="md:py-12 md:pr-12"
                ref={section02Ref}
                animate={controls2}
                initial="hidden"
                variants={fadeInOutVariants02}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src={"https://golden-gates.sirv.com/about-img-clear.jpg"}
                    alt="about-img"
                    height={2992}
                    width={3992}
                    priority
                    className="h-[clamp(20rem,75vh,39rem)] object-cover"
                />
            </motion.div>
        </section>
    )
}
