import Link from "next/link";
import { getGlobal } from "@/network/cms_methods";

export default async function Footer() {
  const footer = await getGlobal<Footer>({ global: "footer" });
  return (
    // <div>footer</div>
    <div className=" w-screen bg-white py-4 px-6 flex justify-end items-center">
      <div className="flex gap-10">
        {footer.bottomNavLinks.map((link) => {
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
