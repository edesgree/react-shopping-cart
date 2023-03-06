import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import NoMatch from './components/NoMatch';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/*" element={<Products />} />
        <Route path="products/:productName" element={<Product />} />
        <Route path="product/" element={<Product />} />
        <Route path="cart" element={<Cart />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
