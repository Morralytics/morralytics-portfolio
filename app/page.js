import Image from "next/image";

const page = () => {
  return (
    <section className='w-full flex flex-col'>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Hello and welcome!</h1>
        <p>I'm Nick Morris</p>
        <p>A Full Stack Web Developer</p>
      </div>
      <div className="flex justify-end">
        <Image
          src='/assets/images/Me_BW_Adjusted.png'
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