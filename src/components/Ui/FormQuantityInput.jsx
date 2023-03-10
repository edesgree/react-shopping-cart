import React from 'react';

export default function FormQuantityInput({
  productAmount,
  productId,
  handleUpdateQty
}) {
  return (
    <>
      <label htmlFor="Quantity" className="sr-only">
        Quantity
      </label>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => handleUpdateQty(productId, -1)}
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          -
        </button>

        <span>
          <input
            type="number"
            id="Quantity"
            readOnly
            value={productAmount}
            className="w-24 h-10 border-gray-200 rounded dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
          />
        </span>

        <button
          type="button"
          onClick={() => handleUpdateQty(productId, 1)}
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          +
        </button>
      </div>
    </>
  );
}
