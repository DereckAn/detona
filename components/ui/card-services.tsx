import Image, { StaticImageData } from "next/image";

interface CardServicesProps {
    image: StaticImageData;
    title: string;
};

const CardServices = ({image, title} : CardServicesProps) => {
  return (
    <div className="space-y-5">
        <Image src={image} alt="room" className="rounded-xl" />
        <h3 className="text-center text-xl"> {title} </h3>
    </div>
  );
};

export default CardServices;
