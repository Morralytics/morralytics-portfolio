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
    <nav className=" w-full mb-10 pt-5 px-4">
      <section className="flex justify-between">
        {/* Logo image that links back to the main page */}
        <Link href="/" className="flex items-end">
          <Image
            src="/assets/icons/PortfolioLogo.png"
            alt="Portfolio Logo"
            width={45}
            height={45}
            className="w-12 h-10"
          />
        </Link>

        {/* Mobile nav bar as a dropdown */}
        <div className="sm:hidden">
          <div className="flex flex-col items-end">
            <Bars3Icon
              className="h-10 w-10 fill-liver"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
          </div>
        </div>
      </section>
      <section className={`absolute w-full pr-10`}>
        <ul
          className={`${
            toggleDropdown
              ? "translate-y-0 opacity-100"
              : "-translate-y-7 opacity-0"
          } duration-300 mt-3 w-full bg-white border-2 border-persion-orange rounded-md flex flex-col gap-2 items-start`}
        >
          <li className="p-3 border-b border-b-persion-orange w-full text-lg font-extralight">
            <Link className="" href="#about-me">
              About me
            </Link>
          </li>
          <li className="p-3 pt-1 border-b border-b-persion-orange w-full text-lg font-extralight">
            <Link href="#tech-stack">Tech Stack</Link>
          </li>
          <li className="p-3 pt-1 border-b border-b-persion-orange w-full text-lg font-extralight">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="p-3 pt-1 w-full text-lg font-extralight">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
