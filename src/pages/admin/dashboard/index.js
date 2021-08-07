import { Link } from "react-router-dom";

export default function Dashboard(props,countProduct = 0,countCate = 0) {
    // {}
    countProduct = props.data.map((item, index)=>(
        <td>{index+1}</td>
    ).length);
    
    countCate = props.categoryData.map((item, index)=>(
        <td>{index+1}</td>
    ).length);
    return (
        
        <div className=" px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Dashboard</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2" /></svg>
                    </div>
                    <h2>Sản Phẩm</h2>
                    <p>Tổng có {JSON.stringify(countProduct.length)} sản phẩm</p>
                    <Link to="/admin/products" className="icon-link">
                        Xem sản phẩm
                    </Link>
                </div>
                <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                        <svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle" /></svg>
                    </div>
                    <h2>Danh mục</h2>
                    <p>Tổng có {JSON.stringify(countCate.length)} danh mục</p>
                    <Link to="/admin/category" className="icon-link">
                        Xem danh mục
                    </Link>
                </div>
            </div>
        </div>
        
        
    );
}
