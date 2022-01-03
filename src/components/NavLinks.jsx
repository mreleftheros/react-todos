import { Link } from "react-router-dom";
import { FaTasks, FaPlus } from "react-icons/fa";

const NavLinks = () => {
  return (
    <ul className="list-none flex bg-red-200 p-2 w-1/4 justify-around text-xl items-center">
      <li>
        <Link to="/">
          <FaTasks color="orange" />
        </Link>
      </li>
      <li>
        <Link to="/new">
          <FaPlus color="orange" />
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
