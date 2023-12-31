import ProfileLogo from "@components/ProfileLogo";

import NavigationCursor from "./NavCursorDown";

const AboutMe = () => {
  return (
    <section className="mb-16" id="about_me">
      <div className="w-full flex flex-col mt-14 px-5 sm:px-16 sm:mt-28 lg:px-56">
        <div className="sm:flex justify-between sm:mb-14 sm:items-center xl:justify-around">
          <div className="sm:flex flex-col">
            <div className="-space-y-4">
              <div className="w-full text-black text-[56px] font-bold">
                FULL <br />
              </div>
              <div className="w-full text-black text-[56px] font-bold">
                STACK
                <br />
              </div>
              <div className="w-full text-black text-[56px] font-bold">
                DEVELOPER.
              </div>
            </div>
            <div className="space-y-1">
              <p className="w-full text-black text-2xl font-light">
                Central Oregon Based,
              </p>
              <p className="w-full text-black text-2xl font-light">
                Solutions Anywhere.
              </p>
            </div>
          </div>
          <ProfileLogo />
        </div>
        <div className="w-full text-xl py-5 text-center text-black text-base font-light xl:px-56">
          In Central Oregon, as a web developer, my life blends tech innovation
          with outdoor adventure. Against the backdrop of the Cascade Mountains,
          I craft websites and collaborate with local businesses, infusing my
          work with the region's unique spirit.
        </div>
      </div>
      <NavigationCursor />
    </section>
  );
};

export default AboutMe;
