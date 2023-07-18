import { useContext, useEffect } from "react";
import { getItems } from "../../../services/items";
import { Item } from "./Item";
import { GlobalContext } from "../../../context/GlobalContext";

export const ItemContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const products = getItems();
    products
      .then((res) => dispatch({ type: "GET_ITEMS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Item state={state} dispatch={dispatch} />
    </div>
  );
};
