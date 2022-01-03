import { Link } from "react-router-dom";
import { FaPlus, FaTasks } from "react-icons/fa";

const NavLinks = () => {
  return (
    <ul className="list-none flex bg-gray-800 rounded shadow py-3 px-4 w-1/4 justify-around text-4xl items-center">
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
