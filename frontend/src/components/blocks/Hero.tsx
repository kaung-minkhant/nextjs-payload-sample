import Image from "next/image";

interface Props extends Hero {}
export default function Hero({ heading, text, backgroundImage }: Props) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full py-40 relative text-white z-10">
        <h2 className="font-bold text-3xl mb-3">{heading}</h2>
        <p className="text-lg">{text}</p>
      </div>
      <div className="absolute inset-0 bg-black/30 z-[5]"></div>
      <Image
        className="absolute inset-0 object-cover"
        src={backgroundImage.url}
        width={backgroundImage.width}
        height={backgroundImage.height}
        alt={backgroundImage.alt}
      />
    </div>
  );
}
