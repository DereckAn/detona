import { asp2 } from "@/assets/images";
import Image from "next/image";

const Footer = () => {
  return (
    <section >
      <div className="bg-red-700  flex relative h-full w-full items-center justify-center py-20">
        <Image
          src={asp2}
          alt="hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className=" z-0 absolute  w-full h-full"
        />
        <div className="absolute w-full h-full bg-black opacity-40 z-10"></div>

        <div className="relative z-10 my-20 flex flex-col space-y-6 items-center justify-center">
          <h1 className="text-4xl font-black text-white tracking-wide text-center ">
            Our Mission: Your Clean Home
          </h1>
          <p className="bg-transparent text-white ml-5  max-w-5xl text-center ">
            At Detona Clean, our mission is to provide the best cleaning
            solutions for your home. We are committed to exceptional customer
            service, expert cleaning solutions, and sustainability. Our goal is
            to ensure that your home is a clean, organized, and healthy space
            for you and your family.
          </p>
          <div className="space-x-6 pt-6">
          <button className=" px-7 py-4 rounded-md border-2 text-white hover:text-gold hover:bg-blu2 hover:border-0">
              Contact Us
            </button>
            <button className="px-7 py-4 rounded-md border-2 text-white hover:text-gold hover:bg-blu2 hover:border-0">
              Services
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
