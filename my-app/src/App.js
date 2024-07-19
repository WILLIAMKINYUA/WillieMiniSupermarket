import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart';
import Nav from './Nav/Nav';
import './index.css';
import Header from './Nav/Header/Header';
import Product from './Pages/Product/Product';
import { ProductContext } from './Context/ProductContext';
import { PRODUCT } from './PRODUCT';

function App() {
  const [product, setProduct] = useState(PRODUCT);
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [search, setSearch] = useState("");
  const [item, setItem] = useState(PRODUCT);

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  const searchBtn = (product) => {
    const change = PRODUCT.filter((x) => {
      return x.cat === product;
    });
    setItem(change);
  };

  const filterProduct = (product) => {
    const update = PRODUCT.filter((x) => {
      return x.cat === product;
    });
    setProduct(update);
  };

  const AllProduct = () => {
    setProduct(PRODUCT);
  };

  const addToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This product is already added");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Product is added to cart");
    }
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{
        product,
        filterProduct,
        AllProduct,
        cart,
        setCart,
        addToCart,
        setClose,
        view,
        detail,
        close,
        searchBtn,
        search,
        setSearch
      }}>
        <Router>
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
