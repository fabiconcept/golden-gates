import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function NavSection() {
    return (
        <div className='fixed top-0 left-0 px-10 py-4 flex items-center justify-between w-screen z-50 text-white'>
            <div className='w-[12rem]'>
                <Image
                    src={"https://golden-gates.sirv.com/web-logo.png"}
                    alt='web logo'
                    height={500}
                    width={500}
                    className='h-8 w-fit object-contain drop-shadow'
                />
            </div>
            <div className='md:flex hidden items-center'>
                <Link className='px-4 text-sm' href={""}>Home</Link>
                <Link className='px-4 text-sm' href={""}>Cities</Link>
                <Link className='px-4 text-sm' href={""}>Policy</Link>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='flex items-center gap-2 w-[12rem] justify-end'>
                    <div className='px-6 py-2 cursor-pointer border-2 hover:border-transparent focus:border-transparent text-white hover:text-black focus:text-black hover:bg-white focus:bg-white rounded-[5rem] active:scale-90 select-none' tabIndex={4}>Request a Loan</div>
                </div>
                <div className='w-[25px] grid md:hidden gap-1 cursor-pointer'>
                    <div className='h-[2px] w-full bg-white'></div>
                    <div className='h-[2px] w-full bg-white'></div>
                    <div className='h-[2px] w-full bg-white'></div>
                </div>
            </div>
        </div>
    );
}