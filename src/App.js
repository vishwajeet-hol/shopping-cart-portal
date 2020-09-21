import React, {useState} from 'react';
import './App.css';
import List from "./views/List";
import Cart from "./views/cart/Cart";
import {VIEW} from "./consts";
import {AppLayout} from "./components/StyledComponent";

function App() {
  // State variables
  const [cartItems, setCartItems] = useState({});
  const [view, setView] = useState(VIEW.LIST);

  // Render
  return (
    <AppLayout>
      {view === VIEW.LIST && <List cartItems={cartItems} setCartItems={setCartItems} setView={setView} />}
      {view === VIEW.CART && <Cart cartItems={cartItems} setCartItems={setCartItems} setView={setView}/>}
    </AppLayout>
  );
}

export default App;
