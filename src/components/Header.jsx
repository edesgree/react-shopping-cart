import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Ui/Logo';
export default function Header({ cartCount }) {
  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
    { title: 'Product', path: '/product' },
    { title: 'Cart', path: '/cart' }
  ];
  const [mobileMenu, setmobileMenu] = React.useState(false);
  return (
    <>
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setmobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={` md:flex md:items-center md:w-auto w-full order-3 md:order-1 ${
              mobileMenu ? 'block' : 'hidden'
            }`}
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li>
                  <NavLink
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    to="/products"
                  >
                    Shop
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="order-1 md:order-2">
            <Logo />
          </div>

          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <NavLink
              to="/cart"
              className="relative pl-3 inline-flex no-underline hover:text-black"
            >
              <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />{' '}
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cartCount}
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
