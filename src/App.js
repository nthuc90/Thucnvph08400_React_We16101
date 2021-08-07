import { useEffect, useState } from "react";
import { add, getAll, remove, edit } from "./api/productAPI";
import { getCateAll, removeCate, addCate, editCate } from "./api/categoryAPI";
import Routes from "./Routes";

import "./styles.css";

export default function App() {

// Product
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Danh sach
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  // Xoa san pham
  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  // Them san pham
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = async (item) => {
    try {
      const { data } = await edit(item);
      console.log(data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
// end Product
// Category
  const [category, setCategory] = useState([]);
  useEffect(() => {
    // Danh sach
    const getCategory = async () => {
      try {
        const { data } = await getCateAll();
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);
  // xóa danh mục
  const onRemoveCate = async (id) => {
    try {
      const { data } = await removeCate(id);
      const newCategory = category.filter((item) => item.id !== id);
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  // Them danh mục
  const onAddCate = async (item) => {
    try {
      const { data } = await addCate(item);
      setCategory([...category, data]);
    } catch (error) {
      console.log(error);
    }
  };
  // sửa danh mục
  const onEditCate = async (item) => {
    try {
      const { data } = await editCate(item);
      const newCategory = category.map((category) =>
      category.id == data.id ? data : category
      );
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  // end category
  return (
    <Routes
    // Product
      data={ products }
      onRemove={onHandleRemove}
      onAdd={onHandleAdd}
      onEdit={onHandleEdit}
    // Category
      categoryData = { category }
      onRemoveCate ={ onRemoveCate }
      onAddCate={onAddCate}
      onEditCate={onEditCate}



    />
  );
}
