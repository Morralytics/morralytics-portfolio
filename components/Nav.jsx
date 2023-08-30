'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
    const router = useRouter();
    const [toggerDropdown, setToggerDropdown] = useState(false);

  return (
    <nav>
        {/* Logo image that links back to the main page */}


        {/* Mobile nav bar as a dropdown */}
        <div className='sm:hidden'>
            Drop
        </div>
    </nav>
  )
}

export default Nav