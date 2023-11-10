import { asp } from "@/assets";
import Container from "@/components/ui/container";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-400 h-[91vh]">
      <Container className="">
        {/* <Image src={asp} alt="hero image" layout="fill" objectFit="cover" objectPosition="center" className=" z-10"/> */}
        <div className="border max-w-xs space-y-3 items-center " id="hola">
          <h1 className="text-3xl font-bold ">
            Detona Clean - Your Ultimate Cleaning Solutions
          </h1>
        <div>
          <p>
            At our online vacuum cleaner store, we provide the best cleaning
            solutions for all your needs. From powerful uprights to versatile
            canisters, we have a wide selection of high-quality vacuums to
            choose from.
          </p>
        </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
