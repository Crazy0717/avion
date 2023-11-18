import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Bars from "../components/bars/Bars";
// links
import Plant_pots from "../pages/plant pots/Plant_pots";
import CeramicsPage from "../pages/product/ProductPage";
import Tables from "../pages/tables/Tables";
import Chairs from "../pages/chairs/Chairs";
import Crockery from "../pages/crockery/Crockery";
import Tableware from "../pages/tableware/Tableware";
import Cutlery from "../pages/cutlery/Cutlery";
import useFetch from "../hooks/useFetch";
import Cart from "../pages/cart/Cart";
import About from "../pages/about/About";
import AllPraducts from "../pages/AllPraducts/AllPraducts";
const App = () => {
  const [barState, setBarState] = useState(false);

  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const { data, error, isPending } = useFetch(url);
  const [productId, setProductId] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Bars barState={barState} setBarState={setBarState} />
        <Routes>
          <Route
            path="/"
            element={<Home setBarState={setBarState} barState={barState} />}
          />
          <Route
            path="/plant_pots"
            element={
              <Plant_pots setBarState={setBarState} barState={barState} />
            }
          />
          <Route
            path="/ceramics/:id"
            element={
              <CeramicsPage
                setProductId={setProductId}
                productId={productId}
                setBarState={setBarState}
                barState={barState}
              />
            }
          />
          <Route path="/tables" element={<Tables />} />
          <Route path="/chairs" element={<Chairs />} />
          <Route path="/crockery" element={<Crockery />} />
          <Route path="/tableware" element={<Tableware />} />
          <Route path="/cuterly" element={<Cutlery />} />
          <Route
            path="/cart"
            element={<Cart setBarState={setBarState} barState={barState} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/allproducts" element={<AllPraducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
