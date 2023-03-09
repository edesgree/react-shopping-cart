import { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import { capitalizeFirstLetter, shuffleArray } from './utils/utils';
import Loading from './components/Ui/Loading';

// PAGES
const Home = lazy(() => import('./components/Home'));
const Products = lazy(() => import('./components/Products'));
const Product = lazy(() => import('./components/Product'));
const Cart = lazy(() => import('./components/Cart'));
function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const PRODUCTS_AMOUNT = 10;

  const fetchProducts = async (PRODUCTS_AMOUNT) => {
    const productUrl = `https://fakestoreapi.com/products?limit=${PRODUCTS_AMOUNT}`;
    const response = await fetch(productUrl);
    const products = await response.json();
    return products;
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts();
      setProducts(data);
      const uniqueCategories = [
        // make a list of existing category using a Set on all products
        ...new Set(data.map((product) => product.category))
      ];
      setCategories(uniqueCategories);
      setFilteredProducts(data);
    }
    fetchData();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="products/*"
            element={
              <Products
                fetchProducts={fetchProducts}
                setProducts={setProducts}
                products={products}
                categories={categories}
                setFilteredProducts={setFilteredProducts}
                filteredProducts={filteredProducts}
              />
            }
          />
          <Route
            path="products/:productId"
            element={<Product products={products} />}
          />
          <Route path="product/" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
