import { Link } from "react-router-dom";
import "./Favs.css";

export const Favs = ({ favs, dispatch }) => {
  return (
    <div className="container">
      {favs.map((fav) => {
        return (
          <div className="item-favs" key={fav.id}>
            <br />
            <p>Producto: {fav.name}</p>
            <img
              style={{ width: "220px", height: "140px", borderRadius: "10px" }}
              src={fav.picFilename}
              alt="dt"
            ></img>
            <p>Disponible: {fav.available ? "Disponible" : "No disponible"}</p>
            <Link to={`/item/${fav.id}`}>
              <button>Ver más</button>
            </Link>
            <button
              onClick={() => dispatch({ type: "REMOVE_FAV", payload: fav })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
