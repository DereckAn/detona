import { asp } from "@/assets/images";
import Container from "@/components/ui/container";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white  flex items-center relative ">
      <Image
        src={asp}
        alt="hero image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className=" z-0 absolute w-full "
      />
      <div className="absolute w-full h-full bg-black opacity-40 z-10"></div>
      <Container className="realtive z-10 my-20 flex">
        <div className="space-y-10 items-center py-10  basis-1/2"  id="hola">
          <h1 className="text-7xl font-black text-white max-w-lg tracking-wide">
            Detona Clean - Your Ultimate Cleaning Solutions
          </h1>
            <p className="text-white poppins">
              At our online vacuum cleaner store, we provide the best cleaning
              solutions for all your needs. From powerful uprights to versatile
              canisters, we have a wide selection of high-quality vacuums to
              choose from.
            </p>
          <div className="space-x-6 ">
            <button className="px-7 py-4 rounded-md border-2 text-white hover:text-black hover:bg-white">
              Contact Us
            </button>
            <button className="px-7 py-4 rounded-md border-2 text-white hover:text-black hover:bg-white">
              Services
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
