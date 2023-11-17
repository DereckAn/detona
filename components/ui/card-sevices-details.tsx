import Image, { StaticImageData } from "next/image";
// import { GiFloorPolisher, GiVacuumCleaner } from "react-icons/gi";

interface CardServicesDetailsProps {
  image: StaticImageData;
  icon: StaticImageData;
  title: string;
  list: string[];
}

const CardServicesDetails = ({
  image,
  icon,
  title,
  list,
}: CardServicesDetailsProps) => {
  return (
    <div className="group content-around bg-gren rounded-2xl hover:bg-blu">
      <div className="p-5">
        <div className=" rounded-2xl  overflow-hidden w-80 ">
          <Image
            src={image}
            alt="service"
            className="rounded-2xl group-hover:scale-110 transition-all duration-300 ease-in-out "
          />
        </div>
      </div>

      <div className=" flex items-center justify-center py-6 ">
        <div className="text-white flex flex-col items-center justify-center gap-y-5">
          <div className="w-20 ">
            <Image src={icon} alt="service" className="rounded-2xl filter invert brightness-max " />
          </div>
          <div>
            <h2 className="text-3xl font-bold  ">{title}</h2>
            <ul className="custom-list ">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServicesDetails;
