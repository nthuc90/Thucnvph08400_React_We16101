import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
      <header className>
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <h2>
          <em>Coza store</em>
        </h2>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <span data-feather="shopping-cart">
                Home
              </span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">
              <span data-feather="shopping-cart">
                Products
              </span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <span data-feather="shopping-cart">
                Contact
              </span></Link>
          </li>
        </ul>
        
      </div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</header>

    )
}

export default Header
