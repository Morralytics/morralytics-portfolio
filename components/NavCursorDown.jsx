import { ChevronDownIcon } from "@heroicons/react/24/solid";

const NavigationCursor = () => {
  const DownOneTablet = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  const DownOneDesktop = () => {
    window.scrollTo({
      top: 850,
      behavior: "smooth",
    });
  };

  const DownOneDesktopLg = () => {
    window.scrollTo({
      top: 850,
      behavior: "smooth",
    });
  };

  const DownOneDesktopXlg = () => {
    window.scrollTo({
      top: 940,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Tablet */}
      <div className="hidden sm:flex md:hidden justify-center mt-20 xl:mt-48">
        <ChevronDownIcon
          className="h-10 w-10 hover:cursor-pointer"
          onClick={DownOneTablet}
        />
      </div>
      {/* Desktop */}
      <div className="hidden md:flex lg:hidden justify-center mt-20 xl:mt-48">
        <ChevronDownIcon
          className="h-10 w-10 hover:cursor-pointer"
          onClick={DownOneDesktop}
        />
      </div>
      {/* Desktop Large */}
      <div className="hidden lg:flex xl:hidden justify-center mt-20 xl:mt-48">
        <ChevronDownIcon
          className="h-10 w-10 hover:cursor-pointer"
          onClick={DownOneDesktopLg}
        />
      </div>
      {/* Desktop XLarge */}
      <div className="hidden lg:flex justify-center mt-20 xl:mt-20">
        <ChevronDownIcon
          className="h-10 w-10 hover:cursor-pointer"
          onClick={DownOneDesktopXlg}
        />
      </div>
    </>
  );
};

export default NavigationCursor;
