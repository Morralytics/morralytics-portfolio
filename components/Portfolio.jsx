import React from "react";

const Portfolio = () => {
  return (
    <section>
      <div className="w-full flex flex-col mt-14 px-5 sm:px-16 sm:mt-28 lg:px-56">
        <div>
          <div className="w-full text-black text-5xl font-bold">
            My Work Portfolio
          </div>
          <div>
            <p className="w-full text-black text-2xl font-light">
              Check out my favorite project,
            </p>
            <p className="w-full text-black text-2xl font-light">
              Glazed & Confused
            </p>
          </div>
          <div>
            {/* <Github />
                <Google /> */}
          </div>
        </div>
        <div>
          <video
            src="/assets/videos/GlazedAndConfusedVideo.mp4"
            autoplay=''
            muted
          />
        </div>
        <img src="/" />
        <div>
          <div></div>
          <div>
            <img src="/" />
          </div>
          <div>
            <img src="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
