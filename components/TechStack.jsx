import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

const TechStack = () => {
  return (
    <section>
      <div className="flex w-full justify-around items-center mt-16 py-8 w-full bg-[#F7F7F8] px-5 sm:px-16 sm:mt-28 lg:px-56">
        <FontAwesomeIcon icon={faHtml5} className="h-16" />
        <FontAwesomeIcon icon={faCss3Alt} className="h-16" />
        <FontAwesomeIcon icon={faReact} className="h-16" />
        <FontAwesomeIcon icon={faEnvira} className="h-16" />
        <FontAwesomeIcon icon={faFigma} className="h-16" />
      </div>
      <div className="flex w-full flex-col bg-white">


        <div className="text-center text-black text-6xl font-bold">
          Tech Stack
        </div>

        <div className="">
          <div className="">
            <div className="" />
            <div className="text-center text-black text-2xl font-normal underline">
              Web Structure and Design
            </div>
          </div>
          <div className="text-center text-black text-xl font-light">
            Skilled in HTML5 and CSS3, I excel at crafting visually engaging and
            responsive web designs using up-to-date coding techniques.
          </div>
        </div>


        <div className="">
          <div className="">
            <div className="text-center text-black text-2xl font-normal underline">
              Data and Organization
            </div>
          </div>
          <div className="text-center text-black text-xl font-light">
            For data management, I excel with MongoDB, ensuring efficient
            organization, and for collaborative design, I leverage Figma.
          </div>
        </div>


        <div className="">
          <div className="">
            <div className="text-center text-black text-2xl font-normal underline">
              Frontend Development
            </div>
          </div>
          <div className="text-center text-black text-xl font-light">
            Passionate about UI/UX, I specialize in React and Next.js, creating
            high-performance web applications with cutting-edge tools and
            technologies.
          </div>
        </div>


      </div>
    </section>
  );
};

export default TechStack;
