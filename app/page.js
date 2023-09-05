import Image from "next/image";

const page = () => {
  return (
    <section className='w-full flex flex-wrap justify-center items-center mt-16'>
      <div className="flex flex-col">
        <p className="text-7xl w-1/2 font-bold">FULL STACK DEVELOPER.</p>
        <section className="text-lg w-1/2 font-normal mt-4 p-1">
          <p>Central Oregon Based,</p>
          <p>Solutions Worldwide.</p>
        </section>
      </div>
      <div className="flex mt-10">
        <Image
          src='/assets/images/Me_BW.png'
          alt="Profile Picture"
          width={240}
          height={240}
          className="rounded-full"
        />
      </div>
    </section>
  )
}

//  bg-gradient-to-br from-persion-orange from-75% to-liver

export default page;