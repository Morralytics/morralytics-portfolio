import ProfileLogo from "@components/ProfileLogo";

const page = () => {
  return (
    <container>
      <div className="w-full flex flex-col mt-14 px-5 space-y-1">
        <div className="w-full text-black text-5xl font-bold">FULL <br /></div>
        <div className="w-full text-black text-5xl font-bold">STACK<br /></div>
        <div className="w-full text-black text-5xl font-bold">DEVELOPER.</div>
        <div className="space-y-1">
          <p className="w-full text-black text-xl font-light">Central Oregon Based,</p>
          <p className="w-full text-black text-xl font-light">Solutions Anywhere.</p>
        </div>
        <ProfileLogo />
        <div className="w-full py-5 text-center text-black text-base font-light">In Central Oregon, as a web developer, my life blends tech innovation with outdoor adventure. Against the backdrop of the Cascade Mountains, I craft websites and collaborate with local businesses, infusing my work with the region's unique spirit.</div>
        <div className="w-10 h-10 left-[338px] top-[24px]" />
      </div>
    </container>
  )
}

export default page;