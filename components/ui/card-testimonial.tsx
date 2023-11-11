import Image, { StaticImageData } from 'next/image';

interface Testimonial2Props {
    text:string,
    name:string,
    job:string,
    image:StaticImageData,
};

const Testimonial2 = ( {text, name, job, image} : Testimonial2Props) => {
  return (
    <div className="flex flex-col gap-6 bg-secondary  p-8 rounded-xl drop-shadow-xl max-w-lg justify-between">
      <p className="text-gray-400">
        {text}
      </p>
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src={image}
            alt="Image"
            fill
            loading="lazy"
            className="object-cover rounded-full ring-4 ring-gray-300 dark:ring-[#0A0A0B]/30"
          />
        </div>
        <div>
          <h3 className="text-indigo-500 font-bold">{name}</h3>
          <p className="text-gray-500 font-medium">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial2;