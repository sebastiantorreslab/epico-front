import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import "./Footer.css";
import { GlobalContext } from "../../../context/GlobalContext";

export const Footer = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div>
      <Outlet />
      <div className={state.isDark ? "footer-light" : "footer-dark"}>
        <h3>Epico-store</h3>

        <ul>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
