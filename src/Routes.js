import Header from "./components/admin/header";
import Nav from "./components/admin/nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProduct from "./pages/admin/product/list";
import AddProductForm from "./pages/admin/product/add";
import EditProductForm from "./pages/admin/product/edit";
import ListCategory from "./pages/admin/category/list";
import AddCategoryForm from "./pages/admin/category/add";
import EditCategoryForm from "./pages/admin/category/edit";
import Dashboard from "./pages/admin/dashboard";
import AdminLayout from "./layouts/AdminLayout";
import WebsiteLayout from "./layouts/WebsiteLayout";
import AboutPage from "./pages/website/about";
import HomePage from "./pages/website/home";
import ContactPage from "./pages/website/contact";
import DetailProduct from "./pages/website/DetailProduct";
import Products from "./pages/website/Products";
import ProductCate from "./pages/website/ProductCate";
const Routes = (props) => {
  return (
    <BrowserRouter>

      <Switch>
        <AdminLayout {...props} path="/admin" >
          <Switch>
            <Route exact path="/admin/">
              <Dashboard {...props} />
            </Route>
            {/* Product */}
            <Route exact path="/admin/products">
              <ListProduct {...props} />
            </Route>
            <Route exact path="/admin/products/add">
              <AddProductForm {...props} />
            </Route>
            <Route exact path="/admin/products/:id/edit">
              <EditProductForm {...props} />
            </Route>
            {/* category */}
            <Route exact path="/admin/category">
              <ListCategory {...props} />
            </Route>
            <Route exact path="/admin/category/add">
              <AddCategoryForm {...props} />
            </Route>
            <Route exact path="/admin/category/:id/edit">
              <EditCategoryForm {...props} />
            </Route>
          </Switch>
        </AdminLayout>


        <WebsiteLayout >
          <Switch>
            <Route exact path="/">
              <HomePage {...props} />
            </Route>
            <Route exact path="/about">
              <AboutPage {...props} />
            </Route>
            <Route exact path="/contact">
              <ContactPage {...props} />
            </Route>
            <Route exact path="/DetailProduct/:id">
              <DetailProduct {...props} />
            </Route>
            <Route exact path="/Product">
              <Products {...props} />
            </Route>
            <Route exact path="/ProductCate/:id">
              <ProductCate {...props} />
            </Route>
           
          </Switch>
        </WebsiteLayout>
      </Switch>

    </BrowserRouter>
  );
};
export default Routes;
