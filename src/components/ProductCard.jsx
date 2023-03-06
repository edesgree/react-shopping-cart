import React from 'react';

export default function ProductCard(props) {
  return (
    <a href={props.name} className="block overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />

      <div className="relative pt-3 bg-white">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {props.name}
        </h3>

        <p className="mt-2">
          <span className="sr-only"> Regular Price </span>

          <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
        </p>
      </div>
    </a>
  );
}
