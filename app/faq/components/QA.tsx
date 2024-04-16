"use client"
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

const QA = ({ Q, A, sn }: { Q: string, A: { __html: string | TrustedHTML }, sn: number }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const controls = useAnimation();

    const variants: Variants = {
        open: { opacity: 1, height: "auto", pointerEvents: "auto" },
        collapsed: { opacity: 0, height: 0, pointerEvents: "none" }
    }

    const transition = {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98]
    }

    const handleToggle = () => {
        setExpanded(!expanded);
    }

    React.useEffect(() => {
        if (expanded) {
            controls.start('open');
            return;
        }
        controls.start('collapsed');
    }, [expanded, controls]);

    return (
        <div className={`w-full flex flex-col py-4 border-b ${!expanded ? "border-b-white/20 " : "border-b-white gap-2"}`}>
            <div className="w-full flex gap-6 items-center cursor-pointer" onClick={handleToggle}>
                <p className={`flex-1 md:text-lg text-base ${expanded ? "opacity-60" : ""}`}><span className="text-sm opacity-75">({sn + 1}).</span> {Q}</p>
                <span className={`smooth mr-4 text-lg ${expanded ? "rotate-180" : ""}`}>
                    <FaAngleDown />
                </span>
            </div>
            <AnimatePresence initial={false}>
                <motion.section
                    key="content"
                    initial="collapsed"
                    animate={controls}
                    variants={variants}
                    className="h-0 opacity-0 flex flex-col gap-3 px-3 md:text-base text-sm drop-shadow-md"
                    transition={transition}
                    dangerouslySetInnerHTML={A}
                >
                </motion.section>
            </AnimatePresence>
        </div>
    );
};

export default QA