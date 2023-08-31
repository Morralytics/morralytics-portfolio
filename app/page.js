import Image from "next/image";

const page = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <h1 className="text-2xl">Hello and welcome!</h1>
      <p>I'm Nick Morris</p>
      <p>A Full Stack Web Developer</p>
      <Image 
        src='/assets/images/Me_BW_Adjusted.png'
        alt="Profile Picture"
        width={240}
        height={60}
        className="rounded-full"
       
      />
    </section>
  )
}

//  bg-gradient-to-br from-persion-orange from-75% to-liver

export default page;