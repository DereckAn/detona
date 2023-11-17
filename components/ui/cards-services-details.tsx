import { services2 } from "@/assets/constants";
import CardServicesDetails from "./card-sevices-details";

const CardsServicesDetails = () => {
    return ( 
        <div className="flex flex-wrap gap-5 items-center justify-center py-20">
        {services2.map((service) => (
          <CardServicesDetails key={service.title} {...service} />
        ))}
      </div>
     );
}
 
export default CardsServicesDetails;