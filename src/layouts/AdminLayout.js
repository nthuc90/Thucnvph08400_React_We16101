import React from "react";
import Header from "../components/admin/header";
import Nav from "../components/admin/nav";

const AdminLayout = (props) => {
  return (
    <div>
      <div>
        <Header {...props} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Nav {...props} />
            </div>
            <div className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
