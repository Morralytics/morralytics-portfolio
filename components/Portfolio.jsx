import React from "react";

const Portfolio = () => {
  return (
    <section>
      <div className="w-full flex flex-col mt-14 px-5 sm:px-16 sm:mt-28 lg:px-56">
        <div className="flex flex-col">
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
            className="mt-12"
            src="/assets/videos/GlazedAndConfusedVideoP2.mp4"
            autoPlay
            muted
            playsInline
          />
        </div>
        {/* <img src="/" />
        <div>
          <div></div>
          <div>
            <img src="/" />
          </div>
          <div>
            <img src="/" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
