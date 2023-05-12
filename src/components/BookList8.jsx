import React from 'react'
import { book13 } from '../assets'


const BookList8 = () => {
  return (
    <>
      <div className="container mt-16 md:mt-24">
        <div className="grid items-center grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-6">
            <h6 className="mb-2 text-sm font-bold text-indigo-600 uppercase">
              Blogs
            </h6>
            <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
              Reads Our Latest <br /> News &amp; Blog
            </h3>
          </div>
          <div className="md:col-span-6">
            <p className="max-w-xl text-slate-400">
              Start working with Techwind that can provide everything you need to
              generate awareness, drive traffic, connect.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
          <div className="relative overflow-hidden rounded-md shadow blog dark:shadow-gray-800">
            <img src={book13} alt="" />
            <div className="p-6 content">
              <a
                href="blog-detail.html"
                className="text-lg font-medium duration-500 ease-in-out title h5 hover:text-indigo-600"
              >
                Design your apps in your own way
              </a>
              <p className="mt-3 text-slate-400">
                The phrasal sequence of the is now so that many campaign and benefit
              </p>
              <div className="mt-4">
                <a
                  href="blog-detail.html"
                  className="font-normal duration-500 ease-in-out btn btn-link hover:text-indigo-600 after:bg-indigo-600"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md shadow blog dark:shadow-gray-800">
            <img src={book13} alt="" />
            <div className="p-6 content">
              <a
                href="blog-detail.html"
                className="text-lg font-medium duration-500 ease-in-out title h5 hover:text-indigo-600"
              >
                How apps is changing the IT world
              </a>
              <p className="mt-3 text-slate-400">
                The phrasal sequence of the is now so that many campaign and benefit
              </p>
              <div className="mt-4">
                <a
                  href="blog-detail.html"
                  className="font-normal duration-500 ease-in-out btn btn-link hover:text-indigo-600 after:bg-indigo-600"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md shadow blog dark:shadow-gray-800">
            <img src={book13} alt="" />
            <div className="p-6 content">
              <a
                href="blog-detail.html"
                className="text-lg font-medium duration-500 ease-in-out title h5 hover:text-indigo-600"
              >
                Smartest Applications for Business
              </a>
              <p className="mt-3 text-slate-400">
                The phrasal sequence of the is now so that many campaign and benefit
              </p>
              <div className="mt-4">
                <a
                  href="blog-detail.html"
                  className="font-normal duration-500 ease-in-out btn btn-link hover:text-indigo-600 after:bg-indigo-600"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookList8