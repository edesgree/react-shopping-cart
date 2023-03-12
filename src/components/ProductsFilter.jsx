import React from 'react';
import classNames from 'classnames';
export default function ProductsFilter({
  categories,
  filterProduct,
  selectedCat
}) {
  const filterBtnClass =
    'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded';
  const filterButtons = categories.map((category) => {
    return (
      <button
        key={category}
        onClick={() => filterProduct(category)}
        className={classNames(filterBtnClass, {
          'active [&.active]:bg-violet-400': category === selectedCat
        })}
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
          className={classNames(filterBtnClass, {
            'active [&.active]:bg-blue-400': selectedCat === 'All'
          })}
          onClick={() => filterProduct('All')}
        >
          All
        </button>
      </div>
    </>
  );
}
