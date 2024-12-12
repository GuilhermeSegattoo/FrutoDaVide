
import Link from "next/link";
// import { NAV_LINKS } from "@/constants"
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <h1 className="text-2xl font-normal">FrutoDa<span className="font-bold text-primary">Vide</span></h1>
      </Link>

      <NavbarItem />
    </nav>
  );
};

export default Navbar;
