import { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import NoMatch from './components/NoMatch';
import { capitalizeFirstLetter, shuffleArray } from './utils/utils';

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const PRODUCTS_AMOUNT = 10;

  const fetchProducts = async (amount) => {
    const productUrl = `https://fakestoreapi.com/products?limit=${amount}`;
    const response = await fetch(productUrl);
    const products = await response.json();

    setProducts(products);
  };

  useEffect(() => {
    fetchProducts(PRODUCTS_AMOUNT);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="products/*" element={<Products products={products} />} />
        <Route
          path="products/:productId"
          element={<Product products={products} />}
        />
        <Route path="product/" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
