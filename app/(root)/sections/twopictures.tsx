import { cardclean } from "@/assets/constants";
import { sala2, sala3 } from "@/assets/images";
import CardClean from "@/components/ui/card-clean";
import Image from "next/image";

const TwoPictures = () => {
  return (
    <section className="flex py-20 px-5 flex-col md:flex-row items-center justify-center gap-10 bg-secondary ">
      {/* <div className=" rounded-xl h-96 ">
        <Image
          src={sala3}
          alt="image"
          className="rounded-xl  object-cover h-96  z-0"
        />
      </div>
      <div className="h-96  hover:bg-black  ">
        <Image
          src={sala2}
          alt="image"
          className=" rounded-xl  object-cover h-96 "
        />
      </div> */}

      {cardclean.map((card) => (
        <CardClean {...card} key={card.title} />
      ))}

    </section>
  );
};

export default TwoPictures;
