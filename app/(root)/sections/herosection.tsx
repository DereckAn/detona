import { vacu } from "@/assets/images";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="">
      <div className="w-full relative">
        <div className="absolute -z-10 w-full">
          <Image
            src={vacu}
            alt="vacu2"
            className="w-full "
            width={1000}
            height={1000}
          />
        </div>
        <div className="max-w-screen-lg m-auto h-[200vh] py-5 px-5 my-10 text-center text-2xl rounded-2xl ">
            <h1 className="text-black">hola a todos</h1>c
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
