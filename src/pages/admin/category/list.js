import { Link } from "react-router-dom";

export default function ListCategory(props) {
  // {}
  return (
    <div>
      <hr />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Quản lý danh mục</h2>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/admin/category/add" className="btn btn-sm btn-outline-primary">
            Thêm danh mục
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên danh mục</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.categoryData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-right">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => props.onRemoveCate(item.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary btn-sm ms-1"
                    to={`/admin/category/${item.id}/edit`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
