import React from "react";
import { Link } from "react-router-dom";

const Shopping = ({ bagItems, updateQuantity, removeFromBag }) => {
  const totalPrice = bagItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      {bagItems.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Your Bag is empty.
          </h2>
        </div>
      ) : (
        <div className="h-auto flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-6">
          {/* First Half: Bag Items */}
          <div className="w-full lg:w-2/3 bg-white p-4 shadow rounded-lg overflow-y-auto max-h-[90vh]">
            {bagItems.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex flex-col md:flex-row items-center justify-between border rounded-lg border-gray-300 p-4"
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={item.Image}
                    alt={item.name}
                    className="w-24 h-24 object-cover mr-4 border rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p>${item.price}</p>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, e.target.value)
                      }
                      className="w-16 text-center border rounded mt-2"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromBag(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Second Half: Total and Checkout */}
          <div className="w-full lg:w-1/3 bg-white p-6 shadow rounded-lg text-center lg:text-center flex flex-col items-center lg:items-end">
            <div className="text-xl font-bold mb-6">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center gap-4">
              <Link to="/">
                <button className="w-full bg-gray-300 text-black p-3 rounded hover:bg-gray-400">
                  Back to Home
                </button>
              </Link>
              <button className="w-full bg-blue-900 text-white p-3 rounded hover:bg-blue-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopping;
