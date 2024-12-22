
import Link from "next/link";
// import { NAV_LINKS } from "@/constants"
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <h1 className="text-2xl font-bold text-primary">Fruto Da Vide</h1>
        <p className="text-xl font-medium text-primary">Decorações</p>
      </Link>

      <NavbarItem />
    </nav>
  );
};

export default Navbar;
