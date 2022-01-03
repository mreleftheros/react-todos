import NavLinks from "./NavLinks";

const Navbar = ({ logoText }) => {
  return (
    <nav className="h-full flex justify-between items-center">
      <div>
        <h2 className="font-mono text-4xl font-bold italic p-2">{logoText}</h2>
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
