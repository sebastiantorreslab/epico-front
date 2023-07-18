import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ state, dispatch }) => {
  return (
    <div className="container">
      {state.items.map((item) => {
        return (
          <div className="item-card" key={item.id}>
            <br />
            <p>Producto: {item.name}</p>
            <img
              style={{ width: "220px", height: "140px", borderRadius: "10px" }}
              src={item.picFilename}
              alt="dt"
            ></img>
            <p>Precio: {item.unitPrice}</p>
            <Link to={`/item/${item.id}`}>
              <button>Details</button>
            </Link>
            <button
              style={{
                backgroundColor: state.favs.some(
                  (element) => element.id === item.id
                )
                  ? "#00b57f"
                  : "",
              }}
              onClick={() => dispatch({ type: "ADD_FAV", payload: item })}
            >
              Favorite
            </button>
          </div>
        );
      })}
    </div>
  );
};
