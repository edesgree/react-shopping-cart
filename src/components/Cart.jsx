import React from 'react';
import { NavLink } from 'react-router-dom';
import FormQuantityInput from './Ui/FormQuantityInput';
export default function Cart({ cart, setCart, handleUpdateQty }) {
  console.log('my cart', cart);
  const handleDelete = (productId) => {
    setCart((cart) => cart.filter((item) => item.id !== productId));
  };
  const price = cart.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );
  return (
    <section>
      <div className="max-w-screen-xl flex flex-col  p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Your cart</h2>
        {cart.length > 0 ? (
          <>
            <ul className="flex flex-col divide-y divide-gray-700">
              {cart.map((product, i) => (
                <li
                  key={i}
                  className="flex flex-col py-6 sm:flex-row sm:justify-between"
                >
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                      src={product.thumbnail}
                      alt={product.title}
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                            {product.title}
                          </h3>
                          <p className="text-sm dark:text-gray-400">
                            {product.brand}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            Price: ${product.price}
                          </p>
                          <p className="text-sm  dark:text-gray-600">
                            Subtotal: ${product.amount * product.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-sm justify-between">
                        <button
                          type="button"
                          className="flex px-6 py-2 border rounded-md dark:border-violet-400 gap-1 items-center"
                          onClick={() => handleDelete(product.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fill-current"
                          >
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect
                              width="32"
                              height="200"
                              x="168"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="240"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="312"
                              y="216"
                            ></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                          </svg>
                          <span>Remove</span>
                        </button>
                        <form>
                          <FormQuantityInput
                            productId={product.id}
                            productAmount={product.amount}
                            handleUpdateQty={handleUpdateQty}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold"> ${price}</span>
              </p>
              <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <NavLink to="/products">
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md dark:border-violet-400"
                >
                  Back to shop
                </button>
              </NavLink>
              <button
                type="button"
                className="tracking-wide  overflow-hidden rounded relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer border-b-4 border-l-2 active:border-violet-600 active:bg-violet-400	before:bg-violet-800 active:shadow-none shadow-lg bg-gradient-to-tr from-violet-600 to-violet-500 border-violet-700 text-white"
              >
                <span className="sr-only sm:not-sr-only">Continue to </span>
                Checkout
              </button>
            </div>
          </>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    </section>
  );
}
