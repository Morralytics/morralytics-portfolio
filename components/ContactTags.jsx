import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactTags = () => {
  return (
    <div className="flex flex-col w-full pb-3">
      <h1 className="text-black font-semibold text-md pb-3">CONTACTS</h1>
      <div className="flex">
        <div className="flex flex-col justify-between py-1 pr-3">
          <FontAwesomeIcon icon={faLocationDot} className="h-4" />
          <FontAwesomeIcon icon={faEnvelope} className="h-4" />
        </div>
        <div className="flex flex-col">
          <p className="pb-1">Bend, Oregon USA</p>
          <p>morralytics@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactTags;
