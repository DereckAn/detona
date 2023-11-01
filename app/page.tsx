import { larga, trap } from "@/assets";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between  items-start  h-[400px] relative">
        <div className="">
          <Image
            src={larga}
            alt="Background Image"
            layout="fill"
            className="-z-10"
          />

          <ul className="flex gap-5 text-3xl text-yellow-500 ">
            <li className=" text-shadow">Home</li>
            <li className=" text-shadow">Calendar</li>
            <li className=" text-shadow">Contact us </li>
            <li className=" text-shadow">Reviews</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl">DetonaClean</h1>
          <p>Professional cleaning services</p>
        </div>
      </div>
      <div className="w-full flex gap-8 mt-8 justify-around pl-8 pr-8">
        <div className="items-center justify-center border rounded-2xl h-[700px] w-[700px]">
          <p className="text-3xl border max-w-xl  items-center justify-center ">
            We offer cleaning services for office buildings, turnover rentals,
            carpet cleaning, janitorial services, and more. We customize our
            services to meet your specific needs. Please ask us about daily,
            weekly, and bi-weekly services. Contracts welcome.
          </p>
        </div>

        <div className="h-[700px] w-[700px] rounded-xl ">
          <img
            src="https://th.bing.com/th/id/R.d5fc033fccc62d31285a4c7efc6448d2?rik=bWcV0775SSeyNw&riu=http%3a%2f%2fwww.dynamickleaning.com%2fwp-content%2fuploads%2f2012%2f03%2fDynamic-Kleaning-Floor-Care.jpg&ehk=e5%2fsNrzha%2bZXKvnDlA1j1QadRH9YmPN7dwupkW%2bD33M%3d&risl=&pid=ImgRaw&r=0"
            width={700}
            height={700}
            alt="Background Image  "
            className="rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
