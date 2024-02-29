import Image from "next/image";

interface Props extends TwoColumn {}
export default function TwoColumn({ heading, direction, image, text }: Props) {
  return (
    <div className="flex items-start w-full px-5 text-black py-10">
      <div className="flex flex-col items-start w-[50%]">
        <h2 className="font-bold text-xl">{heading}</h2>
        <p className="text-sm">{text}</p>
      </div>
      <Image
        className="object-cover w-[50%]"
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.alt}
      />
    </div>
  );
}
