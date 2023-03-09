import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductCard(props) {
  return (
    <NavLink to={`${props.id}`} className="block overflow-hidden group">
      <img
        src={props.image}
        alt={props.title}
        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />

      <div className="relative pt-3 bg-white">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {props.title}
        </h3>

        <p className="mt-2">
          <span className="sr-only"> Regular Price </span>

          <span className="tracking-wider text-gray-900">
            {' '}
            £{props.price} GBP{' '}
          </span>
        </p>
      </div>
    </NavLink>
  );
}
