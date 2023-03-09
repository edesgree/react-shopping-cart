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
  const [cartCount, setCartCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const PRODUCTS_AMOUNT = 10;

  const fetchProducts = async (PRODUCTS_AMOUNT) => {
    const productUrl = `https://fakestoreapi.com/products?limit=${PRODUCTS_AMOUNT}`;
    const response = await fetch(productUrl);
    const products = await response.json();
    return products;
  };
  const handleAddToCart = (product) => {
    //update cart item quantity if already in cart
    if (cart.some((cartItem) => cartItem.id === product.id)) {
      console.log('already in cart');
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? {
                ...cartItem,
                amount: cartItem.amount + 1
              }
            : cartItem
        )
      );
    } else {
      // Add to cart
      console.log('no in cart yet');
      setCart([
        ...cart,
        { ...product, amount: 1 } // initial amount 1
      ]);
      setCartCount((cartCount) => cartCount + 1);
    }
    console.log('cart', cart);
    console.log('cartCount', cartCount);
  };
  const handleUpdateQty = (productId, number) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.id === productId
          ? cartItem.amount + number < 1
            ? [] // remove item if amount is less than 1
            : [
                {
                  ...cartItem,
                  amount: cartItem.amount + number
                }
              ]
          : [cartItem]
      )
    );
  };
  const getCartCount = () => {
    let totalCount = 0;
    cart.map((item) => (totalCount += item.amount));
    console.log('totalCount', totalCount);
    return totalCount;
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
  useEffect(() => {
    setCartCount(getCartCount());
  }, [cart]);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout cartCount={cartCount} />}>
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
            element={
              <Product products={products} handleAddToCart={handleAddToCart} />
            }
          />

          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                handleUpdateQty={handleUpdateQty}
              />
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
