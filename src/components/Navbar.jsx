import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Nexora CRM</Link>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/product"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Product
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Pricing
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;