import { room } from "@/assets/images";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-fourth py-14">
      <Container>
        <div className="flex gap-6 flex-col md:flex-row ">
          <div className="relative w-92  basis-1/2 flex justify-end pr-10 rounded-xl">
            <Image
              src={room}
              alt="hero image"
              objectFit="cover"
              objectPosition="center"
              className="rounded-xl"
            />
          </div>
          <div className="basis-1/2 max-w-md space-y-5 flex flex-col justify-center">
            <h3 className="text-blue-500 text-xl ">About us</h3>
            <h2 className="text-4xl tracking-wider">Welcome to Detona Clean</h2>
            <p className="font-light text-black ">
              At Detona Clean, we believe that a clean and organized home is
              essential for a healthy and happy life. Our online vacuum cleaner
              store offers a wide range of high-quality vacuums and other
              cleaning solutions that cater to your unique cleaning needs. Our
              commitment to exceptional customer service and satisfaction is
              what sets us apart.
            </p>
            <div className="flex justify-start">
              <Link href={"./aboutus"} className="hover:text-blue-500 underline">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
