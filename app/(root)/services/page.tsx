 import { informationservice } from "@/assets/constants";
import CardsServicesDetails from "@/components/ui/cards-services-details"; 
import CleanService from "@/components/ui/clean-service";
const Services = () => {
  return (
    <div className="bg-primary sm:mt-[104px]  w-full ">
      <div className="flex flex-col items-center justify-center space-y-3  py-20 bg-fourth mt-[18vw] sm:mt-0  ">
        <h1 className="text-3xl font-bold ">PROFESSIONAL SERVICES</h1>
        <h2>What We Provide</h2>
      </div>
      <CardsServicesDetails />
      {informationservice.map((info) => (
        <CleanService key={info.id} {...info} />
      ))}
    </div>
  );
};

export default Services;
