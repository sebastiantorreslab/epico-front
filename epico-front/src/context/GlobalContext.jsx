import { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const initialState = {
  items: [],
  item: {},
  isDark: false,
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const removeFiltered = (id, state) => {
  let filtered = state.favs.filter((fav) => fav.id !== id);
  return filtered;
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, items: action.payload };

    case "GET_ITEM_ID":
      return { ...state, item: action.payload };

    case "SWITCH_MODE":
      return { ...state, isDark: !state.isDark };

    case "ADD_FAV":
      let exist = state.items.some(
        (element) => element.id === action.payload.id
      );
      let repetaed = state.favs.some(
        (element) => element.id === action.payload.id
      );
      if (exist) {
        if (repetaed) {
          return state;
        } else {
          localStorage.setItem(
            "favs",
            JSON.stringify([...state.favs, action.payload])
          );
          return { ...state, favs: [...state.favs, action.payload] };
        }
      }

    case "REMOVE_FAV":
      localStorage.setItem(
        "favs",
        JSON.stringify([
          ...state.favs,
          removeFiltered(action.payload.id, state),
        ])
      );
      return {
        ...state,
        favs: removeFiltered(action.payload.id, state),
      };

    default:
      state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
