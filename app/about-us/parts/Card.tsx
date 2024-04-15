"use client"

import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Card({ content, index, title }: { title: string, content: string, index: number }) {
    const [section01Ref, inView01] = useInView({ threshold: 0.25 });
    const controls = useAnimation();

    const fadeInOutVariants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 },
    };
    
    const fadeInOutVariantsEven = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
    };

    useEffect(() => {
        if (inView01) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView01]);

    return (
        <motion.div
            ref={section01Ref}
            animate={controls}
            initial="hidden"
            variants={index % 2 == 0 ? fadeInOutVariantsEven : fadeInOutVariants}
            transition={{ duration: 0.5 }}
            className="bg-black/5 grided-white p-4 flex flex-col gap-3 hover:bg-black/10 hover:scale-[1.005] group smooth"
        >
            <h1 className="sm:text-2xl text-lg font-semibold group-hover:text-orange-400 smooth">{title}</h1>
            <p>
                {content}
            </p>
        </motion.div>
    );
}