import { ChevronUpIcon } from "@heroicons/react/24/solid";

const MobileNavCursor = () => {

    const returnToTop = () => {
        window.scrollTo({
          top:0,
          behavior: 'smooth'
        });
      };
      
  return (
    <div className="justify-center my-5">
      <ChevronUpIcon
        className="h-10 w-10 hover:cursor-pointer"
        onClick={returnToTop}
      />
    </div>
  );
};

export default MobileNavCursor;
