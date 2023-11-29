import Image from "next/image";
import { asp } from "@/assets/images";

const HeaderContactUS = () => {
  return (
    <section className="bg-white  flex items-center relative sm:mt-[104px] md:justify-center">
      <Image
        src={asp}
        alt="hero image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className=" z-0 absolute w-full "
      />
      <div className="absolute w-full h-full bg-black opacity-40 z-10"></div>

      <div className="realtive z-10 my-20 flex md:justify-center ">
        <div className="space-y-10 items-center py-10  basis-1/2" id="hola">
          <h1 className="text-7xl font-black text-white max-w-lg tracking-wide">
            Why Detona Clean?
          </h1>
          <p className="text-white poppins">
            At our online vacuum cleaner store, we provide the best cleaning
            solutions for all your needs. From powerful uprights to versatile
            canisters, we have a wide selection of high-quality vacuums to
            choose from.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default HeaderContactUS;