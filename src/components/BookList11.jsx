import React from 'react'

const BookList11 = () => {
  return (
    <>
    <div className="flex flex-wrap w-90 mx-auto">
      <div className="w-full md:w-1/4 p-10">
        {/* Search component goes here */}
        <input type="text" placeholder="Search" className="w-full p-2 rounded border-gray-300 border" />
      </div>
      <div className="w-full md:w-3/4 p-4">
        <div className="flex flex-wrap">
          {/* Product card components go here */}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard /> */}
           <div className="w-full md:w-1/3 p-2">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/300x200.png" alt="Product" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-gray-800 font-bold text-2xl mb-2">Product Name</h2>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae, optio velit. Voluptas?</p>
          <div className="flex items-center mt-4">
            <span className="text-gray-800 font-bold">$19.99</span>
            <button className="ml-auto bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/300x200.png" alt="Product" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-gray-800 font-bold text-2xl mb-2">Product Name</h2>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae, optio velit. Voluptas?</p>
          <div className="flex items-center mt-4">
            <span className="text-gray-800 font-bold">$19.99</span>
            <button className="ml-auto bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/300x200.png" alt="Product" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-gray-800 font-bold text-2xl mb-2">Product Name</h2>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae, optio velit. Voluptas?</p>
          <div className="flex items-center mt-4">
            <span className="text-gray-800 font-bold">$19.99</span>
            <button className="ml-auto bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookList11