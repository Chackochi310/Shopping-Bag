import React from 'react';

const Shopping = ({ bagItems, updateQuantity, removeFromBag }) => {
  const totalPrice = bagItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Bag</h2>
      {bagItems.length === 0 ? (
        <p className='text-center'>Your bag is empty.</p>
      ) : (
        <div className='px-2 '>
          {bagItems.map((item) => (
            <div key={item.id} className="mb-4 flex justify-between items-center border py-4 ">
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  className="w-12 text-center border rounded"
                />
                <button
                  onClick={() => removeFromBag(item.id)}
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopping;
