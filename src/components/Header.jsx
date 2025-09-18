import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';

export default function Header(){
    return (
        <header className='bg-[#F8F2E3] flex justify-between h-20 items-center px-5'>

            {/* Logo Link */}
            <div>

                <Link href="https://aicte-jk-scholarship-gov.in/" className='h-full w-1/2'>
                    <Image
                        src={logo}
                        alt="Aicte logo"
                        loading='lazy'
                        height={50}
                        width='auto'
                        className="object-contain"
                    />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="w-1/5 flex flex-row items-center justify-evenly">
                <Link href="https://aicte-jk-scholarship-gov.in/">
                    Notification
                </Link>

                <Link href="https://www.aicte-india.org/contact">
                    Contact Us
                </Link>
            </nav>
        </header>
    );
}
