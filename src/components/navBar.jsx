import { Link, NavLink } from "react-router-dom";
import Logo from "../components/logo";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light card-shadow">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-4">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0 gap-2 w-100 d-flex justify-content-around align-items-center">
            <li className="nav-item">
              <NavLink
                to="/components/home"
                className="btn btn-outline-primary"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/pages/allCountries"
                className="btn btn-outline-primary"
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pages/northAmerica"
                className="btn btn-outline-primary"
              >
                North America
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/europe" className="btn btn-outline-secondary">
                Europe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/asia" className="btn btn-outline-warning">
                Asia
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/africa" className="btn btn-outline-success">
                Africa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pages/southAmerica"
                className="btn btn-outline-danger"
              >
                South America
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/oceania" className="btn btn-outline-info">
                Oceania
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
