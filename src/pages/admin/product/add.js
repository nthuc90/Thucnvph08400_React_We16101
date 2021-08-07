import { useForm, } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import firebase from "../../../firebase";
const AddProductForm = (props) => {
  console.log(props.categoryData);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const productImage = data.image[0];
    let storageRef = firebase.storage().ref(`image/product/${productImage.name}`);
    storageRef.put(productImage).then(function () {
      storageRef.getDownloadURL().then((url) => {
        console.log(url);
        const newItem = {
          id: Math.random().toString(7).substring(5),
          ...data,
          image: url
        };
          // console.log(newItem);
        props.onAdd(newItem);
        history.push("/admin/products");
      })

    })



  };
  return (
    <>
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Add Product</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true, minLength: 6 })}
          />

          {errors.name && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này và độ dài ít nhất phải 6 ký tự
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" >Image</label>
          <input
            type="file"
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="d-block mt-2 text-danger">
              Vui lòng chọn ảnh
            </span>
          )}

        </div>
        <div className="mb-3">
          <label className="form-label" id="product-image">Price</label>
          <input
            type="number"
            className="form-control"
            {...register("price", { required: true, min: 1 })}
          />
          {errors.price && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này và giá tối thiểu = 1
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" id="product-image">Quanlity</label>
          <input
            type="number"
            className="form-control"
            {...register("quanlity", { required: true, min: 1 })}
          />
          {errors.quanlity && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này và giá tối thiểu = 1
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" id="product-image">Description</label>
          <input
            type="text"
            className="form-control"
            {...register("description", { required: true, min: 1 })}
          />
          {errors.description && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này và giá tối thiểu = 1
            </span>
          )}
        </div>
        <div className="mb-3">
          <select className="form-control" {...register("cate_id")}>
            {props.categoryData.map((item, index) =>(
                <option value={item.id} >{item.name}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </>
  );
};
export default AddProductForm;
