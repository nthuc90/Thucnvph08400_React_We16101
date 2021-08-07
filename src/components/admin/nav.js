import { NavLink } from "react-router-dom";

export default function Nav(props, countProduct = 0, countCate = 0) {
  countProduct = props.data.map((item, index) => (
    <td>{index + 1}</td>
  ).length);

  countCate = props.categoryData.map((item, index) => (
    <td>{index + 1}</td>
  ).length);
  return (
    <nav>
    <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/"
            >
              <span data-feather="home" />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/products">
              <span data-feather="shopping-cart" />
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/category">
              <span data-feather="shopping-cart" />
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
