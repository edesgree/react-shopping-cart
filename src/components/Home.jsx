import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Footer(props) {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 md:py-16 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:order-last md:h-full">
              <img
                alt="shop"
                src="https://images.unsplash.com/photo-1522682078546-47888fe04e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Welcome to my shop
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <NavLink
                to="/products"
                className="mt-8  tracking-wide  overflow-hidden rounded relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer border-b-4 border-l-2 active:border-violet-600 active:bg-violet-400	before:bg-violet-800 active:shadow-none shadow-lg bg-gradient-to-tr from-violet-600 to-violet-500 border-violet-700 text-white"
              >
                Browse the store
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
