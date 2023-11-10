import { asp } from "@/assets/images";
import Container from "@/components/ui/container";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-400  flex items-center relative ">
      <Image
        src={asp}
        alt="hero image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className=" z-0 absolute w-full "
      />
      <div className="absolute w-full h-full bg-black opacity-30 z-10"></div>
      <Container className="realtive z-10 my-20">
        <div className=" max-w-lg  space-y-10 items-center  py-10" id="hola">
          <h1 className="text-7xl font-black text-white ">
            Detona Clean - Your Ultimate Cleaning Solutions
          </h1>
          <div className="">
            <p>
              At our online vacuum cleaner store, we provide the best cleaning
              solutions for all your needs. From powerful uprights to versatile
              canisters, we have a wide selection of high-quality vacuums to
              choose from.
            </p>
          </div>
          <div className="space-x-6 ">
            <button className="bg-white text-black px-7 py-4 rounded-md">
              Contact Us
            </button>
            <button className="bg-white text-black px-7 py-4 rounded-md">
              Services
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
