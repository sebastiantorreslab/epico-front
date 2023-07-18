import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div>
        <img
          style={{ width: "220px", height: "140px", borderRadius: "10px" }}
          src="https://pbs.twimg.com/media/EhlO8NFWsAE3ms5?format=jpg&name=large"
          alt="epico-prueba"
        ></img>
        <p>Bienvenido Epico-store</p>
        <label htmlFor="">
          <Link to="/item">
            <button>Iniciar</button>
          </Link>
        </label>
      </div>
    </div>
  );
};
