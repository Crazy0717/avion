import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Bars from "../components/bars/Bars";
// links
import CeramicsPage from "../pages/product/ProductPage";
import Tables from "../pages/tables/Tables";
import Chairs from "../pages/chairs/Chairs";
import Crockery from "../pages/crockery/Crockery";
import Tableware from "../pages/tableware/Tableware";
import Cutlery from "../pages/cutlery/Cutlery";
import Cart from "../pages/cart/Cart";
import About from "../pages/about/About";
import AllPraducts from "../pages/AllPraducts/AllPraducts";
import Search from "../pages/Search/Search";
const App = () => {
  const [barState, setBarState] = useState(false);

  const [productId, setProductId] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);  


  return (
    <div className="App">
      <BrowserRouter>
        <Bars barState={barState} setBarState={setBarState} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartQuantity={cartQuantity}
                setBarState={setBarState}
                barState={barState}
              />
            }
          />
          {/* <Route
            path="/plant_pots"
            element={
              <Plant_pots setBarState={setBarState} barState={barState} />
            }
          /> */}
          <Route
            path="/ceramics/:id"
            element={
              <CeramicsPage
                cartQuantity={cartQuantity}
                setCartQuantity={setCartQuantity}
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
            element={
              <Cart
                cartQuantity={cartQuantity}
                setCartQuantity={setCartQuantity}
                productId={productId}
                setProductId={setProductId}
                setBarState={setBarState}
                barState={barState}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/allproducts" element={<AllPraducts />} />
          <Route path="/search" element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
