import { useForm,  } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
const AddCategoryForm = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const newItem = {
      id: Math.random().toString(7).substring(5),
      ...data
    };
    console.log(newItem);

    props.onAddCate(newItem);
    history.push("/admin/category");
  };
  return (
    <>
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Quản lý danh mục</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên danh mục</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true, minLength: 6 })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này độ dài tối thiểu 6 ký tự
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm danh mục
        </button>
      </form>
    </>
  );
};
export default AddCategoryForm;
