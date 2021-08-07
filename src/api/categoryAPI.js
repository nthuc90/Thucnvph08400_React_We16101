import instance from "./instance";

export const getCateAll = () => {
  const url = "/category";
  return instance.get(url);
};
export const getCate = (id) => {
  const url = `/category/${id}`;
  return instance.get(url);
};
export const removeCate = (id) => {
  const url = `/category/${id}`;
  return instance.delete(url);
};
export const editCate = (item) => {
  const url = `/category/${item.id}`;
  return instance.put(url, item);
};
export const addCate = (item) => {
  const url = "/category";
  return instance.post(url, item);
};
