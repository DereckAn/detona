import Image, { StaticImageData } from "next/image";

interface CleanServiceProps {
  title: string;
  description: string;
  image: StaticImageData;
  id:number;
}

const CleanService = ({title, description, image, id} : CleanServiceProps) => {
  return (
    <div className="bg-third py-14 flex flex-row items-center justify-evenly">
      {id % 2 === 0 ? (
        <>
          <div className="flex flex-col" id="dos">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="max-w-2xl">
              {description}
            </p>
          </div>
          <div className="w-96" id="uno" >
            <Image
              src={image}
              alt="hero image"
              objectFit="cover"
              objectPosition="center"
              className="rounded-xl object-cover"
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-96" id="uno" >
            <Image
              src={image}
              alt="hero image"
              objectFit="cover"
              objectPosition="center"
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col" id="dos">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="max-w-2xl">
              {description}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CleanService;
