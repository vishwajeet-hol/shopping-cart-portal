import React, {useState} from 'react';
import './App.css';
import List from "./views/List";
import Cart from "./views/cart/Cart";
import Orders from "./views/Orders";
import {AppLayout} from "./components/StyledComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [cartItems, setCartItems] = useState({});

  return (
    <AppLayout>
      <Router>
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
          <Route path="/orders">
            <Orders cartItems={cartItems} />
          </Route>
          <Route path="/">
            <List cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
        </Switch>
      </Router>
    </AppLayout>
  );
}

export default App;
