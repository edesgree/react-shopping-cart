import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <NavLink
      to={`/products/${product.id}`}
      className="block overflow-hidden group"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-[150px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[150px]"
      />

      <div className="relative pt-3 bg-white">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {product.title}
        </h3>

        <p className="mt-2">
          <span className="sr-only"> Regular Price </span>

          <span className="tracking-wider text-gray-900">${product.price}</span>
        </p>
      </div>
    </NavLink>
  );
}
