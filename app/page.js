import Image from "next/image";

const page = () => {
  return (
    // <section className='w-full flex flex-wrap justify-center items-center mt-14 pl-5'>
    //   <div className="flex flex-col">
    //     <p className="text-7xl w-1/2 font-bold">FULL STACK DEVELOPER.</p>
    //     <section className="text-lg w-1/2 font-normal drop-shadow-md mt-4 p-1">
    //       <p>Central Oregon Based,</p>
    //       <p>Solutions Worldwide.</p>
    //     </section>
    //   </div>
    //   <div className="flex mt-10 bg-gradient-to-br from-white from-50% via-liver via-50% rounded-full drop-shadow-xl border-2 border-y-liver border-opacity-75">
    //     <Image
    //       src='/assets/images/Me_BW.png'
    //       alt="Profile Picture"
    //       width={240}
    //       height={240}
    //       className="rounded-full bg-gradient-to-tr from-persion-orange shadow-2xl p-1"
    //     />
    //   </div>
    // </section>
    
    <container>
      <div className="w-full flex flex-col mt-14 px-5">
        <div className="w-full text-black text-5xl font-bold">FULL <br />STACK<br />DEVELOPER.</div>
        <div className="">
          <p className="w-full text-black text-xl font-light">Central Oregon Based,</p>
          <p className="w-full text-black text-xl font-light">Solutions Anywhere.</p>
        </div>
        <div className="flex mt-10 bg-gradient-to-br from-white from-50% via-liver via-50% rounded-full drop-shadow-xl border-2 border-y-liver border-opacity-75">
          <Image width={240} height={240} className="rounded-full bg-gradient-to-tr from-persion-orange shadow-2xl p-1" src="/assets/images/Me_BW2.png" alt="Profile Picture" />
        </div>
        <div className="w-full py-5 text-center text-black text-base font-light">In Central Oregon, as a web developer, my life blends tech innovation with outdoor adventure. Against the backdrop of the Cascade Mountains, I craft websites and collaborate with local businesses, infusing my work with the region's unique spirit.</div>
        <div className="w-10 h-10 left-[338px] top-[24px]" />
      </div>
    </container>
  )
}

//  bg-gradient-to-br from-persion-orange from-75% to-liver

export default page;