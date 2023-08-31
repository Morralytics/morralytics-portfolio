'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { Bars3Icon } from '@heroicons/react/24/solid'

const Nav = () => {
    const router = useRouter();
    const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className='flex justify-between w-full mb-16 pt-3 px-5'>
        {/* Logo image that links back to the main page */}
        <Link
            href='/'
        >
            <Image 
                src='/assets/icons/PortfolioLogo.png'
                alt='Portfolio Logo'
                width={30}
                height={30}
            />
        </Link>

        {/* Mobile nav bar as a dropdown */}
        <div className='relative sm:hidden'>
            <div className='flex'>
                <Bars3Icon 
                    className='h-6 w-6'
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />
            
            {toggleDropdown && (
                <div className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg min-w-[210px] flex flex-col gap-2 justify-end items-end'>
                    <Link
                        href='#about-me'
                    >
                        About me</Link>
                    <Link
                        href='#tech-stack'
                    >
                        Tech Stack</Link>
                    <Link
                        href='#projects'
                    >
                        Projects</Link>
                    <Link
                        href='#contact'
                    >
                        Contact</Link>
                </div>
            )}
            </div>
        </div>
    </nav>
  )
}

export default Nav