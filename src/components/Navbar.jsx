import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Log In</Link>
      <Link to="/home">Home</Link>
      <Link to="/addpost">Add Listing</Link>
    </nav>
  );
};

export default Navbar;