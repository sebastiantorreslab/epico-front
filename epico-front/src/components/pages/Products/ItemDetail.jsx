import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  return (
    <div>
      <div className="item-detail">
        <br />
        <p>Producto: {item.name}</p>
        <img
          style={{ width: "220px", height: "140px", borderRadius: "10px" }}
          src={item.picFilename}
          alt="it"
        ></img>
        <p>Precio:{item.unitPrice}</p>
        <p>Código:{item.sku}</p>
        <Link to="/item">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};
