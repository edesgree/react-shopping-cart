import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NpMatch(props) {
  return (
    <div className="flex flex-col h-screen bg-white">
      <img
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt=""
        className="object-cover w-full h-64"
      />

      <div className="flex items-center justify-center flex-1">
        <div className="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We can't find that page.
          </h1>

          <p className="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <NavLink
            to="/"
            className="my-4 tracking-wide  overflow-hidden rounded relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer border-b-4 border-l-2 active:border-violet-600 active:bg-violet-400	before:bg-violet-800 active:shadow-none shadow-lg bg-gradient-to-tr from-violet-600 to-violet-500 border-violet-700 text-white"
          >
            Go Back Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
