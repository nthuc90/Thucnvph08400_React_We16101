import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCateAll } from "../../api/categoryAPI";
import { get, edit, getAll } from "../../api/productAPI";
export default function DetailProduct(props) {

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
    const [productsAll, setProductsAll] = useState([]);
    useEffect(() => {
        const getProductsAll = async () => {
            try {
                const { data } = await getAll();
                setProductsAll(data);
            } catch (error) { }
        };
        getProductsAll();
    }, []);
    console.log(productsAll);
    console.log(products);
    return (
        <div >
            <div className="container">
                {/* <div classname="row">
                    <div classname="col-4" >
                        <img src={products.image}  width="400px;" />
                    </div>
                    <div className="col-8">
                        <div>
                            <p className="fs-2">{products.name}</p>
                            <p className="fs-4">{products.price}</p>
                        </div>
                    </div>

                </div> */}
                {productsAll.filter(productsAll => productsAll.cate_id == products.cate_id).map((item) => (
                              <div class="card  row-mt-4 ">
                              <div class="container-fliud">
                                  <div class="wrapper row">
                                      <div class="preview col-md-6">
                                          
                                          <div class="preview-pic tab-content">
                                            <div class="tab-pane active" id="pic-1"><img src={item.image} /></div>
                                            <div class="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                                            <div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                                            <div class="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                                            <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                                          </div>
                                          <ul class="preview-thumbnail nav nav-tabs">
                                            <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmv-2z8qH3YFLTMWrGnYe9LaEIZJFzDKlttZSZwjb8YSvZ4oo6nCUE5P3PFtwKbkEHB_392UyKQ_lE05YMnsythU0cRa6z1A1Ek8xGbpU7&usqp=CAE" /></a></li>
                                            <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                           
                                          </ul>
                                          
                                      </div>
                                      <div class="details col-md-6">
                                          <h3 class="product-title">{item.name}</h3>
                                          <div class="rating">
                                              <div class="stars">
                                                  <span class="fa fa-star checked"></span>
                                                  <span class="fa fa-star checked"></span>
                                                  <span class="fa fa-star checked"></span>
                                                  <span class="fa fa-star"></span>
                                                  <span class="fa fa-star"></span>
                                              </div>
                                              <span class="review-no">41 reviews</span>
                                          </div>
                                          <p class="product-description">{item.short_desc}</p>
                                          <h4 class="price">price: <span>{item.price}</span></h4>
                                          
                                          <h5 class="sizes">sizes:
                                              <span class="size" data-toggle="tooltip" title="small">s</span>
                                              <span class="size" data-toggle="tooltip" title="medium">m</span>
                                              <span class="size" data-toggle="tooltip" title="large">l</span>
                                              <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                                          </h5>
                                          <h5 class="colors">colors:
                                              <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                              <span class="color green"></span>
                                              <span class="color blue"></span>
                                          </h5>
                                          <div class="action">
                                              <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                                              <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                            ))}
            </div>
        </div>

    );
}
