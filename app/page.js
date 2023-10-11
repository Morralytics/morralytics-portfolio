'use client'

import AboutMe from "@components/AboutMe";
import TechStack from "@components/TechStack";
import Portfolio from "@components/Portfolio";
import Contact from "@components/Contact";

const page = () => {
  return (
    <container>
      <AboutMe />
      <TechStack />
      <Portfolio />
      <Contact />
    </container>
  )
}

export default page;