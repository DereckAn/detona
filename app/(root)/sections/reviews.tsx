import { reviews } from "@/assets/constants";
import Testimonial2 from "@/components/ui/card-testimonial";
import Container from "@/components/ui/container";

const Reviews = () => {
  return (
    <section className="bg-white">
      <Container>
        <div>
          <h2>Our Customers speak for us</h2>
        </div>
        <div>
          <Testimonial2 job={reviews[0].job} image={reviews[0].image} name={reviews[0].name} text={reviews[0].text}/>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
