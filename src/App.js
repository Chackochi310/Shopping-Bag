import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../src//components/footer";
import Header from "../src//components/header";
import ProductList from "../src//components/productList";
import ShoppingBag from "../src//components/shoppingBag";

import shoe1 from "./assets/Images/addidas.webp";
import shoe2 from "./assets/Images/fila.jpeg";
import shoe3 from "./assets/Images/nike.jpeg";
import shoe4 from "./assets/Images/puma.jpg";
import shoe5 from "./assets/Images/reebok.jpeg";
import shoe6 from "./assets/Images/woodland.webp";

const App = () => {
  const [products] = useState([
    { id: 1, name: "Addidas", price: 4000, Image: shoe1 },
    { id: 2, name: "Fila", price: 3999, Image: shoe2 },
    { id: 3, name: "Crocs", price: 4500, Image: shoe3 },
    { id: 4, name: "Puma One8", price: 7000, Image: shoe4 },
    { id: 5, name: "Reebok", price: 3500, Image: shoe5 },
    { id: 6, name: "Wood Land", price: 4200, Image: shoe6 },
  ]);

  const [bagItems, setBagItems] = useState([]);
  

  useEffect(() => {
    const storedBagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
    setBagItems(storedBagItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
  }, [bagItems]);

  const addToBag = (product) => {
    const existingItem = bagItems.find((item) => item.id === product.id);
    if (existingItem) {
      setBagItems(
        bagItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setBagItems([...bagItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setBagItems(
      bagItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  const removeFromBag = (id) => {
    setBagItems(bagItems.filter((item) => item.id !== id));
  };
  const totalQuantity = bagItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  console.log(bagItems);

  return (
    <div className="relative">
      <Routes>
        {/* <ProductList products={products} addToBag={addToBag} /> */}
        <Route
          exact
          path="/"
          element={
            <>
              <Header bagCount={totalQuantity}></Header>
              <ProductList products={products} addToBag={addToBag} />
              <Footer />
            </>
          }
        ></Route>
        <Route
          exact
          path="/cart"
          element={
            <>
            <Header bagCount={totalQuantity}></Header>
            <ShoppingBag
              bagItems={bagItems}
              updateQuantity={updateQuantity}
              removeFromBag={removeFromBag}
            />
           <Footer />
            </>
            
          }
        ></Route>

       
       
      </Routes>
    </div>
  );
};

export default App;
