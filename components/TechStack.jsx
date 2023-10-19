import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

import NavigationCursor from "./NavCursorDown";
import Filler from "./Filler";

const TechStack = () => {
  return (
    <section className="flex flex-col items-center" id="tech_stack">
      <div className="flex w-full justify-around items-center py-8 w-full bg-[#F7F7F8] px-5 sm:px-16 sm:mt-28 lg:px-56">
        <FontAwesomeIcon icon={faHtml5} className="h-16" />
        <FontAwesomeIcon icon={faCss3Alt} className="h-16" />
        <FontAwesomeIcon icon={faReact} className="h-16" />
        <FontAwesomeIcon icon={faEnvira} className="h-16" />
        <FontAwesomeIcon icon={faFigma} className="h-16" />
      </div>
      <div className="flex flex-col items-center w-3/4 sm:w-full mt-16 px-5 lg:px-28">
        <div className="text-center text-black text-5xl font-bold mb-16">
          Tech Stack
        </div>

        <div className="flex flex-col w-full justify-around items-center sm:items-start sm:flex-row sm:px-5 lg:w-3/4">
          <div className="flex flex-col w-full justify-center items-center px-3 mb-8 min-[675px]:min-h-[355px] min-[711px]:min-h-[325px] min-[768px]:min-h-[325px] sm:px-1 sm:min-h-[380px] md:min-h-[300px] min-[875px]:min-h-[296px] min-[886px]:min-h-[240px] min-[980px]:min-h-[200px] min-[1083px]:min-h-[300px] min-[1099px]:min-h-[270px] min-[1110px]:min-h-[240px] min-[1204px]:min-h-[210px] lg:min-h-[296px] min-[1300px]:min-h-[190px] min-[1388px]:min-h-[200px] sm:mx-5 sm:justify-start border border-liver rounded-xl shadow-md shadow-persion-orange">
            <div className="w-full text-center text-black text-2xl font-normal underline py-3">
              Web Structure and Design
            </div>
            <div className="text-center text-black text-xl font-light pb-3">
              Skilled in HTML5 and CSS3, I excel at crafting visually engaging
              and responsive web designs using up-to-date coding techniques.
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center px-3 mb-8 min-[675px]:min-h-[355px] min-[711px]:min-h-[325px] min-[768px]:min-h-[325px] sm:px-1 sm:min-h-[380px] md:min-h-[300px] min-[1083px]:min-h-[300px] min-[1099px]:min-h-[270px] min-[1110px]:min-h-[240px] min-[1204px]:min-h-[210px] min-[875px]:min-h-[296px] min-[886px]:min-h-[240px] min-[980px]:min-h-[200px] lg:min-h-[296px] min-[1300px]:min-h-[190px] min-[1388px]:min-h-[200px] sm:justify-start sm:mx-0 border border-liver rounded-xl shadow-md shadow-persion-orange">
            <div className="text-center text-black text-2xl font-normal underline py-3">
              Data and Organization
            </div>
            <div className="text-center text-black text-xl font-light pb-3">
              In data management, I excel with MongoDB, ensuring efficient
              organization, and for collaborative design, I leverage Figma.
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center px-3 mb-8 min-[675px]:min-h-[355px] min-[711px]:min-h-[325px] min-[768px]:min-h-[325px] sm:px-1 sm:min-h-[380px] md:min-h-[300px] min-[1083px]:min-h-[300px] min-[1099px]:min-h-[270px] min-[1110px]:min-h-[240px] min-[1204px]:min-h-[210px] min-[875px]:min-h-[296px] min-[886px]:min-h-[240px] min-[980px]:min-h-[200px] lg:min-h-[296px] min-[1300px]:min-h-[190px] min-[1388px]:min-h-[200px] sm:justify-start sm:mx-5 border border-liver rounded-xl shadow-md shadow-persion-orange">
            <div className="text-center text-black text-2xl font-normal underline py-3">
              Frontend Development
            </div>
            <div className="text-center text-black text-xl font-light pb-3">
              Passionate about UI/UX, I specialize in React and Next.js,
              creating high-performance web applications with cutting-edge tools
              and technologies.
            </div>
          </div>
        </div>
      </div>
      <NavigationCursor />
      <Filler />
    </section>
  );
};

export default TechStack;
