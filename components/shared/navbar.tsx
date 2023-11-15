import { logoBlack } from "@/assets/images";
import { routes } from "@/assets/constants";
import Image from "next/image";
import { BsFillCalendarCheckFill, BsFillPersonFill } from "react-icons/bs";
import { FiAlignLeft } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="md:flex items-center fixed w-full top-0 z-50 bg-white " id="hola">
      <div className="flex text-xl items-center basis-1/2 ml-8" id="asd">
        <Image
          src={logoBlack}
          alt="Logo"
          width={180}
          height={100}
          className=" mr-16 object-cover "
        />
        <ul className="md:flex gap-5 hidden ">
          <li>{routes[3].name}</li>
          <li>{routes[0].name}</li>
        </ul>
      </div>

      <div
        className="basis-1/2 flex justify-end items-center gap-7 mr-10"
        id="qwe"
      >
        <button className=" ">{routes[4].name}</button>
        <BsFillCalendarCheckFill size={28} className="hidden md:block" />
        <BsFillPersonFill size={28} className=" hidden md:block" />
        <FiAlignLeft  size={20} className="block md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
