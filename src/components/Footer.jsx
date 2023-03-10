import React from 'react';
import Logo from './Ui/Logo';
import { NavLink } from 'react-router-dom';
export default function Footer(props) {
  return (
    <>
      <footer aria-label="Site Footer" className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center  sm:justify-start">
              <Logo />
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2023{' '}
              <a
                href="https://github.com/edesgree"
                target="_blank"
                rel="noopener"
              >
                edesgree
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
