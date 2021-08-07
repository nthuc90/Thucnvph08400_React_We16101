import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { get, edit, getAll } from "../../api/productAPI";
export default function ProductCate(props) {

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await getAll();
                setProducts(data);
            } catch (error) { }
        };
        getProducts();
    }, []);
    return (
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-2">
                    <div class="card bg-light mb-3">
                <div class="card-bg text-center"><i class="fa fa-list"></i> Categories</div>
                <ul class="nav nav-pills flex-column mb-auto text-center">
                {props.categoryData.map((cate) => (
                                    <li>
                                        <Link to={`/ProductCate/${cate.id}`} classname="nav-link link-dark text-center">
                                            <hr></hr>
                                            {cate.name}
                                        </Link>
                                    </li>
                                ))}
                </ul>
            </div>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            {products.filter(products => products.cate_id == id).map((item) => (
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

    );
}
