import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  return (
    <section>
      <div className="w-full flex flex-col mt-14 px-5 sm:px-16 sm:mt-28 lg:px-56">
        <div className="flex flex-col">
          <div className="w-full text-black text-5xl font-bold">
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
        <div>
          <video
            className="mt-8"
            src="/assets/videos/GlazedAndConfusedVideoP2.mp4"
            autoPlay
            muted
            playsInline
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="group hover:bg-[#F7F7F8] relative mx-5 my-5 rounded-xl overflow-hidden border border-liver w-72 h-64 shadow-md shadow-persion-orange">
            <img src="/assets/images/Meet-IO-Cropped.png" className=" h-full" />
            <div className="hidden group-hover:flex flex-col group-hover:bg-[#F7F7F8] group-hover:opacity-80 absolute top-0 h-full">
              <div className="opacity-100">
                <h1 className="font-bold text-2xl">Meet-IO</h1>
                <p className="text-black">
                  Meet-IO is an application rooted to help assist anyone who
                  struggles to keep their plans with family or their work
                  schedule correctly planned.
                </p>
                <div>
                  <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
                  <FontAwesomeIcon icon={faGoogle} className="fa-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="group hover:bg-[#F7F7F8] relative mx-5 my-5 rounded-xl overflow-hidden border border-liver w-72 h-64 shadow-md shadow-persion-orange">
            <img
              src="/assets/images/Home-Chayil-Charitable-Services-Home-Cropped.png"
              className="h-full hover:opacity-20"
            />
            <div className="hidden group-hover:flex flex-col group-hover:bg-[#F7F7F8] group-hover:opacity-80 absolute top-0 h-full">
              <div className="opacity-100">
                <h1 className="font-bold text-2xl">
                  Chayil Charitable Services
                </h1>
                <p className="text-black">
                  My team of developers produced a fully response web page which
                  imforms about new events, create blog posts, and receive
                  donations towards a new non-profit.
                </p>
                <div>
                  <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
                  <FontAwesomeIcon icon={faGoogle} className="fa-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="group hover:bg-[#F7F7F8] relative mx-5 my-5 rounded-xl overflow-hidden border border-liver w-72 h-64 shadow-md shadow-persion-orange">
            <img
              src="/assets/images/Gen-io-Desktop-Main-Cropped.png"
              className="h-full hover:opacity-20"
            />
            <div className="hidden group-hover:flex flex-col group-hover:bg-[#F7F7F8] group-hover:opacity-80 absolute top-0 h-full">
              <div className="flex flex-col items-center opacity-100">
                <h1 className="font-bold text-2xl">Gen-io</h1>
                <p className="text-black">
                  Gen-io is a tool to that allows users to share and discover
                  ChatGPT prompts that can assist through the development
                  process.
                </p>
              </div>
              <div className="text-black">
                <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
                <FontAwesomeIcon icon={faGoogle} className="fa-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
