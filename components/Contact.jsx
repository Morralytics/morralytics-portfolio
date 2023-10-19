import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import NavCursor from "./NavCursorDown";
import MobileNavCursor from "./MobileNavCursor";
import ContactTags from "./ContactTags";

import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="flex flex-col items-center" id="contact_me">
      <div className="flex w-full justify-around items-center py-8 w-full bg-[#F7F7F8] px-5 sm:px-16 lg:px-56">
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
              <input
                type="text"
                placeholder="Email"
                className="border border-liver rounded-md text-liver w-full py-2 px-2 my-1.5 focus:outline-persion-orange"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="border border-liver rounded-md text-liver w-full py-2 px-2 my-1.5 focus:outline-persion-orange resize-none"
              />
              <input
                type="submit"
                className="rounded-md text-white w-1/4 py-2 px-2 my-1.5 bg-gradient-to-b from-persion-orange to-[#CDA584] hover:cursor-pointer"
              />
            </form>
          </div>
          {/* Map + Extras */}
          <div className="flex flex-col w-full">
            <div className="text-black font-semibold text-md py-2">
              <p className="pb-2">LETS GET A COFFEE!</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22936.895343512537!2d-121.32910965030777!3d44.060397544811586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54b8c0ffa5d3d251%3A0x1088e7acc720d1b4!2sBend%2C%20OR!5e0!3m2!1sen!2sus!4v1696975263536!5m2!1sen!2sus"
                width="300"
                height="225"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
          <ContactTags />
          <MobileNavCursor />
        </div>

        {/* Desktop/Tablet */}
        <div className="hidden sm:flex w-full items-center sm:items-start sm:px-5">
          {/* Contact form */}
          <div className="flex flex-col w-full mb-2 sm:px-5 sm:pt-3">
            <form className="flex flex-col last:items-end">
              <input
                type="text"
                placeholder="First Name"
                className="border border-liver rounded-md text-liver w-full py-2 px-2 my-1.5 focus:outline-persion-orange"
              />
              <input
                type="text"
                placeholder="Email"
                className="border border-liver rounded-md text-liver w-full py-2 px-2 my-1.5 focus:outline-persion-orange"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="border border-liver rounded-md text-liver w-full py-2 px-2 my-1.5 focus:outline-persion-orange resize-none"
              />
              <input
                type="submit"
                className="rounded-md text-white w-1/4 py-2 px-2 my-1.5 bg-gradient-to-b from-persion-orange to-[#CDA584] hover:cursor-pointer"
              />
            </form>
          </div>
          {/* Map + Extras */}
          <div className="flex flex-col w-full mb-8 sm:px-5">
            <div className="text-black font-semibold text-md py-3">
              <p>LETS GET A COFFEE!</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22936.895343512537!2d-121.32910965030777!3d44.060397544811586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54b8c0ffa5d3d251%3A0x1088e7acc720d1b4!2sBend%2C%20OR!5e0!3m2!1sen!2sus!4v1696975263536!5m2!1sen!2sus"
                width="300"
                height="225"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
            <ContactTags />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
