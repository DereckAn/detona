import { vacu } from "@/assets/images";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="" >
            <div className="w-full">
                <Image src={vacu} alt="vacu2"/>
            </div>
        </section> 
     );
}
 
export default HeroSection;