import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

const TechStack = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3Alt} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faEnvira} />
        <FontAwesomeIcon icon={faFigma} />
      </div>
  )
}

export default TechStack