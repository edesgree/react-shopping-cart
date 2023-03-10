import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';
export default function Products({
  products,
  categories,
  filteredProducts,
  setFilteredProducts
}) {
  const [selectedCat, setSelectedCat] = React.useState('All');
  const filterProduct = (category) => {
    setSelectedCat(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((newProduct) => {
        return newProduct.category === category;
      });
      setFilteredProducts(filtered);
    }
  };
  const productsElements = filteredProducts.map((product) => {
    return (
      <li key={product.id}>
        <ProductCard key={product.id} product={product} />
      </li>
    );
  });

  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="max-w-md mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ProductsFilter
            categories={categories}
            filterProduct={filterProduct}
            selectedCat={selectedCat}
          />
          <ul className="grid gap-4 mt-8 sm:grid-cols-2 md:grid-cols-4">
            {productsElements}
          </ul>
        </div>
      </section>
    </>
  );
}
