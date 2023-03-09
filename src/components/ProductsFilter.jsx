import React from 'react';

export default function ProductsFilter({ categories, filterProduct }) {
  const filterButtons = categories.map((category) => {
    return (
      <button
        key={category}
        onClick={() => filterProduct(category)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      >
        {category}
      </button>
    );
  });
  return (
    <>
      <div className="inline-flex gap-2 my-5">
        {filterButtons}

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => filterProduct('All')}
        >
          All
        </button>
      </div>
    </>
  );
}
