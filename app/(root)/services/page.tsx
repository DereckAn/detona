import CardServicesDetails from "@/components/ui/card-sevices-details";
const Services = () => {
  return (
    <div className="bg-primary sm:mt-[104px] h-screen w-full ">
      <div className="flex flex-col items-center justify-center space-y-3  py-20 bg-secondary">
        <h1 className="text-3xl font-bold ">PROFESSIONAL SERVICES</h1>
        <h2>What We Provide</h2>
      </div>
      <div className="flex">

      <CardServicesDetails />  
      <CardServicesDetails />  
      <CardServicesDetails />  

      </div>

       
    </div>
  );
};

export default Services;
