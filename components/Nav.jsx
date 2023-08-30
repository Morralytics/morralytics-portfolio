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
    <nav className='flex justify-between w-full mb-16 pt-3 px-3'>
        {/* Logo image that links back to the main page */}
        <div className=''>
            Logo
        </div>

        {/* Mobile nav bar as a dropdown */}
        <div className='sm:hidden'>
            <Bars3Icon 
                className='h-6 w-6'
                onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
                <div>test</div>
            )}
        </div>
    </nav>
  )
}

export default Nav