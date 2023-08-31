"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Bars3Icon } from "@heroicons/react/24/solid";

const Nav = () => {
  const router = useRouter();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className=" w-full mb-16 pt-3 px-5">
      <section className="flex justify-between">
        {/* Logo image that links back to the main page */}
        <Link href="/">
          <Image
            src="/assets/icons/PortfolioLogo.png"
            alt="Portfolio Logo"
            width={40}
            height={40}
          />
        </Link>

        {/* Mobile nav bar as a dropdown */}
        <div className="sm:hidden">
          <div className="flex flex-col items-end">
            <Bars3Icon
              className="h-8 w-8 "
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
          </div>
        </div>
      </section>
      <section className="absolute w-full pr-10">
        {toggleDropdown && (
          <div className="mt-3 p-5 w-full bg-persion-orange rounded-lg flex flex-col gap-2 items-start">
            <Link href="#about-me">About me</Link>
            <Link href="#tech-stack">Tech Stack</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
        )}
      </section>
    </nav>
  );
};

export default Nav;
