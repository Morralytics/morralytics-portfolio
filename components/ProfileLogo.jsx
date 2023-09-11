import Image from "next/image";

const ProfileLogo = () => {
  return (
    <section className="flex justify-center">
    <div className="flex mt-10 bg-gradient-to-br from-white from-50% via-liver via-50% rounded-full drop-shadow-xl border-2 border-y-liver border-opacity-75">
      <Image
        width={240}
        height={240}
        className="rounded-full bg-gradient-to-tr from-persion-orange shadow-2xl p-1 sm:w-[200px]"
        src="/assets/images/Me_BW2.png"
        alt="Profile Picture"
      />
    </div>
    </section>
  );
};

export default ProfileLogo;