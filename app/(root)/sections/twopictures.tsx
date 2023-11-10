import { sala, sala2, sala3 } from "@/assets/images";
import Image from "next/image";

const TwoPictures = () => {
  return (
    <section className="flex">
      <div className="img-container">
        <Image src={sala3} alt="image" className="img-fluid" />
      </div>
      <div className="img-container">
        <Image src={sala2} alt="image" className="img-fluid" />
      </div>
    </section>
  );
};

export default TwoPictures;
