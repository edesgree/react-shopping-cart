import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <NavLink to="/">Go to the home page</NavLink>
      </p>
    </div>
  );
}
export default App;
