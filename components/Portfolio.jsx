import Link from "next/link";

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
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-2xl hover:fa-bounce"
              />
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
          <div className="mx-5 my-5 rounded-xl overflow-hidden border border-liver w-72 h-64 shadow-md shadow-persion-orange">
            <img src="/assets/images/Meet-IO-Cropped.png" className=" h-full" />
          </div>
          <div className="mx-5 my-5 rounded-xl overflow-hidden border border-liver w-72 h-64 shadow-md shadow-persion-orange">
            <img src="/assets/images/Home-Chayil-Charitable-Services-Home.png" className="h-full" />
          </div>
          <div className="mx-5 my-5 rounded-xl overflow-hidden border border-liver w-72 h-64 shadow-md shadow-persion-orange">
            <img src="/assets/images/Gen-io-Desktop-Main-Cropped.png" className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
