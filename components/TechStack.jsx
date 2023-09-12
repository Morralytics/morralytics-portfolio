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
      <div>
        
      </div>
    </section>
  );
};

export default TechStack;
