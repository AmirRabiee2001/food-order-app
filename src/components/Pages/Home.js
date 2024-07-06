import CartProvider from "../../context/CartProvider";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";
import Meals from "../Meals/Meals";
import { useState } from "react";

function Home() {
  // Search Handler
  const [searchQuery, setSearchQuery] = useState("");
  const searchHandler = (query) => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
      <Header onSearch={searchHandler} />
      <Cart />
      <main>
        <Meals searchQuery={searchQuery} />
      </main>
    </CartProvider>
  );
}

export default Home;
