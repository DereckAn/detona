import { reviews } from "@/assets/constants";
import Testimonial2 from "@/components/ui/card-testimonial";
import Container from "@/components/ui/container";

const Reviews = () => {
  return (
    <section className="bg-white py-20">
      <Container className="space-y-5" >
        <div className=" flex items-center justify-center ">
          <h2 className="text-4xl font-extrabold">Our Customers speak for us</h2>
        </div>
        <div className="flex gap-5 flex-col md:flex-row">
          {reviews.map((review) => (
            <Testimonial2 key={review.name} {...review} />
          ))}
        </div>
        <div className="flex items-center justify-center pt-5">
            <p className="text-xl font-bold">4.8 average rating from 1814 reviews</p>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
