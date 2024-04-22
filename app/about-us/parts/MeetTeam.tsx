"use client"
import { teamList } from "@/lib/TeamList";
import Image from "next/image";
import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MeetTeam() {
    return (
        <section className="flex flex-col gap-4 sm:p-12 md:px-32 sm:px-20 px-6 p-3">
            <h1 className="text-4xl font-semibold text-center">Meet The Team</h1>
            <p className="text-center opacity-60">Get to know the talented individuals who make <span className="text-orange-500">Goldwater</span> a success.</p>
            <div className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-x-6 gap-y-8 justify-center">
                {teamList.map((team, index) => (
                    <TeamMember
                        avatar={team.avatar}
                        name={team.fullName}
                        role={team.role}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
}


const TeamMember = ({ name, role, avatar }: { name: string, role: string, avatar: string }) => {
    const [divRef, inView01] = useInView({ threshold: 0.25 });
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
        <motion.div 
            className="flex flex-col gap-4 w-full" 
            ref={divRef}
            animate={controls}
            initial="hidden"
            variants={fadeInOutVariants}
            transition={{ duration: 0.5 }}
        >
            <div className="h-[20rem] border overflow-hidden smooth hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[0.5rem_0.5rem_rgba(249,115,22)]">
                <div className="h-full w-full grid place-items-center pointer-events-none select-none">
                    <Image
                        src={avatar}
                        alt={`${name} photo`}
                        height={2992}
                        width={3992}
                        priority
                        className="h-full w-full object-cover pointer-events-none select-none"
                    />
                </div>
            </div>
            <div className="grid sm:text-left text-center">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <span className="text-base opacity-70">{role}</span>
            </div>
        </motion.div>
    )
}