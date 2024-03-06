"use client"
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import SwiperContainer from "../components/SwiperContainer";
import { SwiperSlide } from "swiper/react";
import { reviewsData } from "@/lib";

export default function Reviews() {
    return (
        <div className="py-8 bg-white/40" id="clientsreviews">
            <section className="max-w-[1400px] mx-auto py-8 sm:px-24 md:px-8 px-4">
                <h1 className="text-4xl font-semibold py-5 text-center mb-4">What are our Clients saying?</h1>

                <SwiperContainer>
                    {reviewsData.map((review) => (
                        <SwiperSlide key={review.uid}>
                            <div className="border border-black/10 rounded-md hover:border-black/30  hover:bg-slate-100 cursor-pointer bg-white/50 p-4 smooth">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full border overflow-hidden">
                                        <Image
                                            src={review.avatar}
                                            alt={review.fullname}
                                            height={1000}
                                            width={1000}
                                            priority
                                            className={"w-full h-full object-cover"}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{review.fullname}</h3>
                                        <p className="opacity-60">{review.profession}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h5 className="font-semibold">{review.reviewTitle}</h5>
                                    <p className="opacity-50">{review.reviewContent}</p>
                                </div>
                                <div className="flex gap-3 items-center py-4">
                                    <span className="text-yellow-400"><FaStar /></span>
                                    <span className="text-yellow-400"><FaStar /></span>
                                    <span className="text-yellow-400"><FaStar /></span>
                                    <span className="text-yellow-400"><FaStar /></span>
                                    <span className="text-yellow-400"><FaStar /></span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </SwiperContainer>
            </section>
        </div>
    )
}