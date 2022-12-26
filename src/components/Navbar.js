import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="natural-pic/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
}
