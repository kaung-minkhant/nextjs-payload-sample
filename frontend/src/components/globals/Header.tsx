import { getGlobal } from "@/network/cms_methods";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const header = await getGlobal<Header>({ global: "header" });
  return (
    <div className=" w-screen bg-white py-4 px-6 flex justify-between items-center">
      <div className="relative h-10 w-10">
        <Image
          src={header.logo.url}
          fill
          alt={header.logo.alt}
          className="object-contain"
        />
      </div>
      <div className="flex gap-10">
        {header.navLinks.map((link) => {
          return (
            <div key={link.label}>
              <Link href={link.link}>{link.label}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
