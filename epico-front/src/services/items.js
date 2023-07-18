import axios from "axios";

export const getItems = () => {
  const items = axios.get("http://localhost:8080/item/get");
  return items;
};

export const getItemById = (id) => {
  const item = axios.get(`http://localhost:8080/item/get/${id}`);
  return item;
};
