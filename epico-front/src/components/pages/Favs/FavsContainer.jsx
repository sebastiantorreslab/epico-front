import { useContext} from "react";
import { Favs } from "./Favs";
import { GlobalContext } from "../../../context/GlobalContext";

export const FavsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      <Favs favs={state.favs} dispatch={dispatch} />
    </div>
  );
};
