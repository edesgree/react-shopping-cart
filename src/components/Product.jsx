import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Ui/Loading';
import classNames from 'classnames';
export default function Product({ products, handleAddToCart }) {
  // get params from Route in App ('/products/:productId')
  const { productId, productTitle } = useParams();
  // get corresponding data for this product
  const [btnClick, setBtnClick] = React.useState(false);
  //const [rating,setRating]=React.useState(currentProduct.rating)
  const currentProduct = products.find(
    (product) => product.id === parseInt(productId)
  );
  const handleChangeButtonColor = (btn) => {
    setBtnClick(true);
    setTimeout(() => {
      setBtnClick(false);
    }, 1500);
  };

  const getRatings = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      return (
        <svg
          className={`h-5 w-5 ${
            i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-200'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          key={i}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    });
  };
  return (
    <>
      {currentProduct.title ? (
        <section>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                  alt={currentProduct.title}
                  src={currentProduct.thumbnail}
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <div className="grid grid-cols-2 gap-4 lg:mt-4">
                  {currentProduct.images.slice(0, -1).map((image, i) => {
                    return (
                      <img
                        key={i}
                        alt={currentProduct.title}
                        src={image}
                        className="aspect-square w-full rounded-xl object-cover"
                      />
                    );
                  })}
                </div>
              </div>

              <div className="sticky top-0">
                <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                  {currentProduct.category}
                </strong>

                <div className="mt-8 flex justify-between">
                  <div className="max-w-[35ch] space-y-2">
                    <h1 className="text-xl font-bold sm:text-2xl">
                      {currentProduct.title}
                    </h1>

                    <p className="text-sm">{currentProduct.brand}</p>

                    <div className="-ml-0.5 flex">
                      {getRatings(currentProduct.rating)}
                    </div>
                  </div>

                  <p className="text-lg font-bold">${currentProduct.price}</p>
                </div>

                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p>{currentProduct.description}</p>
                  </div>
                </div>

                <form className="mt-8">
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={(btn) => {
                        btn.preventDefault();
                        handleAddToCart(currentProduct);
                        handleChangeButtonColor(btn);
                      }}
                      type="button"
                      className={classNames(
                        ' tracking-wide  overflow-hidden rounded relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer border-b-4 border-l-2 active:border-violet-600 active:bg-violet-400	before:bg-violet-800 active:shadow-none shadow-lg bg-gradient-to-tr from-violet-600 to-violet-500 border-violet-700 text-white',
                        {
                          clicked: btnClick
                        }
                      )}
                    >
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                      <span className="relative">Add to cart</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
