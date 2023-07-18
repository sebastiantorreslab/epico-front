import { NavBar } from "./NavBar";
import { React, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const NavBarContainer = () => {

  const { dispatch } = useContext(GlobalContext);

  return <div><NavBar dispatch={dispatch}/></div>;
};
