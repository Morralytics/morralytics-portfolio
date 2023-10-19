import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import NavigationCursor from "./NavCursorDown";

import Link from "next/link";
const Portfolio = () => {
  return (
    <section className="mb-16 sm:-mt-24" id="portfolio">
      {/* Mobile */}
      <div className="sm:hidden w-full flex flex-col mt-14 px-5 sm:px-16 lg:px-56">
        <div className="flex flex-col">
          <div className="w-full text-black text-5xl font-bold md:w-1/4">
            My Work Portfolio
          </div>
          <div>
            <p className="w-full mt-3 text-black text-2xl font-light">
              Check out my favorite project,
            </p>
            <p className="w-full text-black text-2xl font-light">
              Glazed & Confused
            </p>
          </div>
          <div className="flex justify-between w-1/5 mt-3">
            <a
              href="https://github.com/Morralytics/Glazed-and-Confused"
              target="_blank"
              className=""
            >
              <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
            </a>
            <a
              href="https://glazed-and-confused-app.herokuapp.com/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGoogle} className="fa-2xl" />
            </a>
          </div>
        </div>
        <div className="flex-col">
          <div>
            <video
              className="mt-8"
              src="/assets/videos/GlazedAndConfusedVideoP2.mp4"
              autoPlay
              muted
              playsInline
            />
          </div>

          <div className="flex flex-col items-center sm:-pt-5">
            <div className="group hover:bg-[#F7F7F8] relative mx-5 my-5 rounded-xl overflow-hidden border border-liver w-72 h-64 shadow-md shadow-persion-orange">
              <img
                src="/assets/images/Meet-IO-Cropped.png"
                className=" h-full"
              />
              <div className="hidden group-hover:flex flex-col group-hover:bg-[#F7F7F8] group-hover:opacity-[.85] absolute top-0 h-full">
                <div className="flex flex-col items-center opacity-100 px-6">
                  <h1 className="font-bold text-2xl">Meet-IO</h1>
                  <p className="text-black text-center">
                    Meet-IO is an application rooted to help assist anyone who
                    struggles to keep their plans with family or their work
                    schedule correctly planned.
                  </p>
                  <div className="text-black py-5">
                    <Link
                      href="https://github.com/Morralytics/Meet-IO"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-2xl px-2"
                      />
                    </Link>
                    <Link
                      href="https://meetio-workspace.herokuapp.com/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="fa-2xl px-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover:bg-[#F7F7F8] relative mx-5 my-5 rounded-xl overflow-hidden border border-liver w-72 h-64 shadow-md shadow-persion-orange">
              <img
                src="/assets/images/Home-Chayil-Charitable-Services-Home-Cropped.png"
                className="h-full hover:opacity-20"
              />
              <div className="hidden group-hover:flex flex-col group-hover:bg-[#F7F7F8] group-hover:opacity-[.85] absolute top-0">
                <div className="flex flex-col items-center opacity-100 px-4">
                  <h1 className="font-bold text-2xl text-center">
                    Chayil Charitable Services
                  </h1>
                  <p className="text-black text-center">
                    My team of developers produced a fully response web page
                    which imforms about new events, create blog posts, and
                    receive donations towards a new non-profit.
                  </p>
                  <div className="text-black py-2">
                    <Link
                      href="https://github.com/Morralytics/Chayil-48in48"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-2xl px-2"
                      />
                    </Link>
                    <Link
                      href="https://chayilcharitableservices.com/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="fa-2xl px-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover:bg-[#F7F7F8] relative mx-5 my-5 rounded-xl overflow-hidden border border-liver w-72 h-64 shadow-md shadow-persion-orange">
              <img
                src="/assets/images/Gen-io-Desktop-Main-Cropped.png"
                className="h-full hover:opacity-20"
              />
              <div className="hidden group-hover:flex flex-col group-hover:bg-[#F7F7F8] group-hover:opacity-[.85] absolute top-0 h-full">
                <div className="flex flex-col items-center opacity-100 px-6">
                  <h1 className="font-bold text-2xl">Gen-io</h1>
                  <p className="text-black text-center">
                    Gen-io is a tool to that allows users to share and discover
                    ChatGPT prompts that can assist through the development
                    process.
                  </p>
                  <div className="text-black py-5">
                    <Link
                      href="https://github.com/Morralytics/gen-io"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-2xl px-2"
                      />
                    </Link>
                    <Link href="https://gen-io.vercel.app/" target="_blank">
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="fa-2xl px-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop/Tablet */}
      <div className="hidden sm:flex w-full flex flex-col mt-14 px-5 sm:px-16 sm:mt-28 justify-center items-center">
        <div className="flex items-center lg:px-44">
          <div className="flex flex-col">
            <div className="w-full text-black text-5xl font-bold md:w-1/4">
              My Work Portfolio
            </div>
            <div>
              <p className="w-full mt-3 text-black text-2xl font-light">
                Check out my favorite project,
              </p>
              <p className="w-full text-black text-2xl font-light">
                Glazed & Confused
              </p>
            </div>
            <div className="flex justify-between w-1/5 mt-3">
              <a
                href="https://github.com/Morralytics/Glazed-and-Confused"
                target="_blank"
                className=""
              >
                <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
              </a>
              <a
                href="https://glazed-and-confused-app.herokuapp.com/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGoogle} className="fa-2xl sm:pr-12" />
              </a>
            </div>
          </div>
          <div>
            <video
              className="mt-8 sm:max-w-[320px] sm:pt-2"
              src="/assets/videos/GlazedAndConfusedVideoP2.mp4"
              autoPlay
              muted
              playsInline
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center sm:-pt-5 sm:flex-row sm:flex-wrap sm:w-full lg:w-fit sm:justify-center lg:flex-nowrap">
            <div className="group hover:bg-[#F7F7F8] relative mx-5 my-5 rounded-xl overflow-hidden border border-liver w-70 h-60 shadow-md shadow-persion-orange">
              <img
                src="/assets/images/Meet-IO-Cropped.png"
                className=" h-full"
              />
              <div className="hidden group-hover:flex flex-col group-hover:bg-[#F7F7F8] group-hover:opacity-[.85] absolute top-0 h-full">
                <div className="flex flex-col items-center opacity-100 px-6">
                  <h1 className="font-bold text-2xl">Meet-IO</h1>
                  <p className="text-black text-center">
                    Meet-IO is an application rooted to help assist anyone who
                    struggles to keep their plans with family or their work
                    schedule correctly planned.
                  </p>
                  <div className="text-black py-5">
                    <Link
                      href="https://github.com/Morralytics/Meet-IO"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-2xl px-2"
                      />
                    </Link>
                    <Link
                      href="https://meetio-workspace.herokuapp.com/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="fa-2xl px-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover:bg-[#F7F7F8] relative mx-5 my-5 rounded-xl overflow-hidden border border-liver w-70 h-60 shadow-md shadow-persion-orange">
              <img
                src="/assets/images/Home-Chayil-Charitable-Services-Home-Cropped.png"
                className="h-full hover:opacity-20"
              />
              <div className="hidden group-hover:flex flex-col group-hover:bg-[#F7F7F8] group-hover:opacity-[.85] absolute top-0 h-full">
                <div className="flex flex-col items-center opacity-100 px-6">
                  <h1 className="font-bold text-2xl text-center">
                    Chayil Charitable Services
                  </h1>
                  <p className="text-black text-center">
                    My team of developers produced a fully response web page
                    which imforms about new events, create blog posts, and
                    receive donations towards a new non-profit.
                  </p>
                  <div className="text-black py-2">
                    <Link
                      href="https://github.com/Morralytics/Chayil-48in48"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-2xl px-2"
                      />
                    </Link>
                    <Link
                      href="https://chayilcharitableservices.com/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="fa-2xl px-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group hover:bg-[#F7F7F8] relative mx-5 my-5 rounded-xl overflow-hidden border border-liver w-70 h-60 shadow-md shadow-persion-orange">
              <img
                src="/assets/images/Gen-io-Desktop-Main-Cropped.png"
                className="h-full hover:opacity-20"
              />
              <div className="hidden group-hover:flex flex-col group-hover:bg-[#F7F7F8] group-hover:opacity-[.85] absolute top-0 h-full">
                <div className="flex flex-col items-center opacity-100 px-6">
                  <h1 className="font-bold text-2xl">Gen-io</h1>
                  <p className="text-black text-center">
                    Gen-io is a tool to that allows users to share and discover
                    ChatGPT prompts that can assist through the development
                    process.
                  </p>
                  <div className="text-black py-5">
                    <Link
                      href="https://github.com/Morralytics/gen-io"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-2xl px-2"
                      />
                    </Link>
                    <Link href="https://gen-io.vercel.app/" target="_blank">
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="fa-2xl px-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationCursor />
    </section>
  );
};

export default Portfolio;
