import { logo } from "@/assets";
import { routes } from "@/assets/constants";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="flex justify-around border-spacing-3 bg-slate-500 items-center">
      <div>
        <ul className="flex gap-5 text-xl text-yellow-500 border">
          {routes.map((route) => (
            <li className=" text-shadow" key={route.name}>
              {route.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Image src={logo} alt="Logo" width={100} height={100} className="border"/>
      </div>
    </div>
  );
};

export default SideBar;
