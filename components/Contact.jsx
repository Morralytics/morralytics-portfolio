import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-full justify-around items-center mt-16 py-8 w-full bg-[#F7F7F8] px-5 sm:px-16 sm:mt-28 lg:px-56">
        <Link href="https://github.com/Morralytics" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="h-14" />
        </Link>
        <Link href="/">
          <Image
            src="/assets/icons/PortfolioLogo.png"
            alt="Portfolio Logo"
            width={65}
            height={65}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nick-morris-morralytics/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-14" />
        </Link>
      </div>
      <div className="flex flex-col items-center w-3/4 sm:w-full mt-16 lg:px-28">
        <div className="text-center text-black text-5xl font-bold mb-16">
          Contact Me
        </div>

        {/* Mobile */}
        <div className="flex flex-col w-full items-center sm:hidden">
          {/* Contact form */}
          <div className="flex flex-col w-full mb-2">
            <form className="flex flex-col last:items-end">
              <input
                type="text"
                placeholder="First Name"
                className="border border-liver rounded-md text-liver w-full py-2 px-2 my-1.5 focus:outline-persion-orange"
              />
              <input type="text" placeholder="Email" className="border border-liver rounded-md text-liver w-full py-2 px-2 my-1.5 focus:outline-persion-orange" />
              <textarea placeholder="Message" rows="5" className="border border-liver rounded-md text-liver w-full py-2 px-2 my-1.5 focus:outline-persion-orange resize-none" />
              <input type="submit" className="rounded-md text-white w-1/4 py-2 px-2 my-1.5 bg-gradient-to-b from-persion-orange to-[#CDA584] hover:cursor-pointer"/>
            </form>
          </div>
          {/* Map + Extras */}
          <div className="flex flex-col w-full mb-8">
            <div className="text-black font-semibold text-md py-3">
              <p>LETS GET A COFFEE!</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22936.895343512537!2d-121.32910965030777!3d44.060397544811586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54b8c0ffa5d3d251%3A0x1088e7acc720d1b4!2sBend%2C%20OR!5e0!3m2!1sen!2sus!4v1696975263536!5m2!1sen!2sus"
                width="300"
                height="225"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet */}
        <div className="hidden sm:flex w-full items-center sm:px-5 lg:w-3/4">
          {/* Contact form */}
          <div className="flex flex-col w-3/4 px-3 mb-8 min-[675px]:min-h-[355px] min-[711px]:min-h-[325px] min-[768px]:min-h-[325px] sm:px-1 sm:min-h-[380px] md:min-h-[300px] min-[875px]:min-h-[296px] min-[886px]:min-h-[240px] min-[980px]:min-h-[200px] min-[1083px]:min-h-[300px] min-[1099px]:min-h-[270px] min-[1110px]:min-h-[240px] min-[1204px]:min-h-[210px] lg:min-h-[296px] min-[1300px]:min-h-[190px] min-[1388px]:min-h-[200px] sm:mx-5">
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="First Name"
                className="border w-full"
              />
              <input type="text" placeholder="Email" className="border" />
              <input type="textarea" placeholder="Message" className="border" />
            </form>
          </div>
          {/* Map + Extras */}
          <div className="flex flex-col w-3/4 px-3 mb-8 min-[675px]:min-h-[355px] min-[711px]:min-h-[325px] min-[768px]:min-h-[325px] sm:px-1 sm:min-h-[380px] md:min-h-[300px] min-[1083px]:min-h-[300px] min-[1099px]:min-h-[270px] min-[1110px]:min-h-[240px] min-[1204px]:min-h-[210px] min-[875px]:min-h-[296px] min-[886px]:min-h-[240px] min-[980px]:min-h-[200px] lg:min-h-[296px] min-[1300px]:min-h-[190px] min-[1388px]:min-h-[200px] sm:justify-start sm:mx-0">
            <div className="text-center text-black text-2xl font-normal underline py-3">
              Data and Organization
            </div>
            <div className="text-center text-black text-xl font-light pb-3">
              In data management, I excel with MongoDB, ensuring efficient
              organization, and for collaborative design, I leverage Figma.
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-center mt-20 sm:mb-14 xl:mt-48">
        <ChevronUpIcon
          className="h-10 w-10 hover:cursor-pointer"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default Contact;
