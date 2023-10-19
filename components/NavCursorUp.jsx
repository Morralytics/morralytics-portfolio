import { ChevronUpIcon } from "@heroicons/react/24/solid";

const NavCursorUp = () => {

    const returnToTop = () => {
        window.scrollTo({
          top:0,
          behavior: 'smooth'
        });
      };
      
  return (
    <div className="flex justify-center my-5">
      <ChevronUpIcon
        className="h-10 w-10 hover:cursor-pointer"
        onClick={returnToTop}
      />
    </div>
  );
};

export default NavCursorUp;
