import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBarContainer } from "./components/layout/NavBar/NavBarContainer";
import { FooterContainer } from "./components/layout/Footer/FooterContainer";
import { HomeContainer } from "./components/pages/Home/HomeContainer";
import { ItemContainer } from "./components/pages/Products/ItemContainer";
import { ItemDetailContainer } from "./components/pages/Products/ItemDetailContainer";
import { FavsContainer } from "./components/pages/Favs/FavsContainer";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContextProvider>
          <Routes>
            <Route element={<NavBarContainer />}>
              <Route element={<FooterContainer />}>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/item" element={<ItemContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/favs" element={<FavsContainer />} />
              </Route>
            </Route>
            <Route path="*" element={<h1>404-not found</h1>} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
