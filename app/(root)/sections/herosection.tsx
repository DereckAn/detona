import { asp } from "@/assets";
import Container from "@/components/ui/container";
import Image from "next/image";

const HeroSection = () => {
    return ( 
        <section className="bg-orange-600 h-[91vh]">
            <Container>
            <Image src={asp} alt="hero image" layout="fill" objectFit="cover" objectPosition="center" className=" z-10"/>
                <div className=" border">
                        <h1 className="text-2xl">Detona Clean - Your Ultimate Cleaning Solutions</h1>
                        <p>Professional cleaning services</p>

                </div>
            </Container>
        </section>
     );
}
 
export default HeroSection;