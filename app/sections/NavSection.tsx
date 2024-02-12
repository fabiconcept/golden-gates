import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function NavSection() {
    return (
        <div className='fixed top-0 left-0 px-10 py-4 flex items-center justify-between w-screen z-50 text-white'>
            <div className='flex items-center gap-20'>
                <div className='bg-black/5'>
                    <Image
                        src={"https://golden-gates.sirv.com/web-logo.png"}
                        alt='web logo'
                        height={500}
                        width={500}
                        className='h-8 w-fit object-contain drop-shadow'
                    />
                </div>
                <div className='flex items-center'>
                    <Link className='px-4 text-sm' href={""}>Home</Link>
                    <Link className='px-4 text-sm' href={""}>Cities</Link>
                    <Link className='px-4 text-sm' href={""}>Policy</Link>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='px-6 py-2 cursor-pointer hover:bg-white hover:text-black rounded-[5rem] active:scale-90'>Log in</div>
                <div className='px-6 py-2 cursor-pointer bg-white text-black rounded-[5rem] active:scale-90'>Sign up</div>
            </div>
        </div>
    );
}