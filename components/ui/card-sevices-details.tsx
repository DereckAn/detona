import { planty } from "@/assets/images";
import Image from "next/image";
import { GiFloorPolisher, GiVacuumCleaner } from "react-icons/gi";


const CardServicesDetails = () => {
  return (
    <div className="flex bg-black ">
      <div className="rounded-2xl basis-1/2 p-1">
        <Image src={planty} alt="service" className="rounded-2xl" />
      </div>
      <div className="basis-1/2 bg-white flex items-center justify-center">
        <div className=" bg-red-400 p-5   ">
            <GiFloorPolisher  />
          <p>hola</p>
        </div>
      </div>
    </div>
  );
};

export default CardServicesDetails;
