import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getItemById } from "../../../services/items";
import { GlobalContext } from "../../../context/GlobalContext";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const item = getItemById(id);
    item.then((res) => dispatch({ type: "GET_ITEM_ID", payload: res.data }));
  }, []);

  return (
    <div>
      <ItemDetail item={state.item} />;
    </div>
  );
};
