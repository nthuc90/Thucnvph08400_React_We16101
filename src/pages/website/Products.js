import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { get, edit } from "../../api/productAPI";
export default function Products(props) {
  console.log(props.data);

  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
      const getProducts = async () => {
          try {
              const { data } = await get(id);
              setProducts(data);
          } catch (error) { }
      };
      getProducts();
  }, []);
  return (
    <div>
      <div class="page-heading products-heading header-text">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <img src="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/products-heading.jpg" width="100%" />
                <h4>new arrivals</h4>
                <h2>sixteen products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="container">
          <div className="row">
            <div class="col-md-12">
              <div class="filters">
                <ul>
                  {props.categoryData.map((cate) => (
                    <li>
                      <Link
                        to={`/ProductCate/${cate.id}`}
                        classname="nav-link link-dark"
                      >
                        {cate.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-10">
              <div className="row">
                {props.data.map((item) => (
                  <div className="col-lg-4 col-md-4 all dev">
                    <div className="product-item">
                      <a href="#">
                        <img src={item.image} alt />
                      </a>
                      <div className="down-content">
                        <Link to={`/DetailProduct/${item.id}`}>
                          <h4>{item.name}</h4>
                        </Link>
                        <h6>{item.price}</h6>
                        <p>{item.description}</p>
                        <ul className="stars">
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                        <span>Reviews (60)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
