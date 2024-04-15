"use client"

import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import QA from './QA';
import { FaQs } from '@/lib/FaQ';

export default function GeneralMortgageCollection() {

    const [section01Ref, inView01] = useInView({ threshold: 0.25 });
    const controls = useAnimation();

    const fadeInOutVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    };

    useEffect(() => {
        if (inView01) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView01]);
    return (
        <>
            <motion.section
                className="rounded-2xl bg-orange-500 grided-white-wash sm:p-8 p-5 text-white"
                ref={section01Ref}
                animate={controls}
                initial="hidden"
                variants={fadeInOutVariants}
                transition={{ duration: 0.5 }}
            >
                <div className="md:text-3xl sm:text-xl text-lg pt-2 pb-6 border-b border-b-white/50">
                    General Mortgage Questions
                    <p className="sm:text-base text-sm opacity-80">This section addresses general inquiries about mortgages and related topics.</p>
                </div>
                <div>
                    {FaQs.generalMortgageQuestions.map((faq, index) => (
                        <QA Q={faq.Q} A={faq.A} key={index} sn={index} />
                    ))}
                </div>
            </motion.section>
        </>
    )
}
