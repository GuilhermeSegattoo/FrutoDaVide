import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export default function NavbarItem() {
  return (
    <ul className="hidden h-full gap-4 lg:flex">
      {NAV_LINKS.map((link) => (
        <li key={link.key} className="relative">
          <Link
            href={link.href}
            className="regular-16 text-gray-50 flex items-center justify-center cursor-pointer pb-1 transition-all duration-150 ease-linear hover:font-bold hover:text-green-50 
            border-b-2 hover:border-b-green-50"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
