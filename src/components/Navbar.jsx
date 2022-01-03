import NavLinks from "./NavLinks";

const Navbar = ({ logoText }) => {
  return (
    <nav className="h-full flex justify-end items-center">
      <NavLinks />
    </nav>
  );
};

export default Navbar;
