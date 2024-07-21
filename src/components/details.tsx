import Image, { StaticImageData } from "next/image";

interface IDetailsProps {
  image: StaticImageData;
  alt: string;
  text: string;
}

export const Details = ({ image, alt, text }: Readonly<IDetailsProps>) => {
  return (
    <div className="grid grid-row-2 gap-4 justify-items-center md:grid-row-0 md:grid-cols-2 md:gap-12 md:w-[800px] md:items-center border border-4 border-black p-6 bg-red-500">
      <Image src={image} alt={alt} />
      <p className="text-white">{text}</p>
    </div>
  );
};
