import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
