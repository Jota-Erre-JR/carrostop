import './styles1.css';
import 'bootstrap/js/dist/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary main-nav">
        <div className="container">
          <Link to={'/'} className="nav-logo-text">
            <h4>Carros Top</h4>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#carrostop-navbar"
            aria-controls="carrostop-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="carrostop-navbar">
            <ul className="navbar-nav offset-md-8 offset-lg-9 offset-xl-9 main-menu">
              <li>
                <NavLink to="/" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <NavLink to="/products" activeClassName="active">
                Catálogo
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
