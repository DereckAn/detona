import { logoBlack } from "@/assets/images";
import { routes } from "@/assets/constants";
import Image from "next/image";
import { BsFillCalendarCheckFill, BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="md:flex items-center py-4" id="hola">
      <div className="flex text-xl items-center basis-1/2 ml-10" id="asd">
        <Image
          src={logoBlack}
          alt="Logo"
          width={100}
          height={100}
          className="border mr-16"
        />
        <ul className="flex gap-5">
          <li>{routes[3].name}</li>
          <li>{routes[0].name}</li>
        </ul>
      </div>

      <div
        className="basis-1/2 flex justify-end items-center gap-5 mr-10"
        id="qwe"
      >
        <button className=" ">{routes[4].name}</button>
        <BsFillCalendarCheckFill size={28} />
        <BsFillPersonFill size={28} />
      </div>
    </div>
  );
};

export default Navbar;
