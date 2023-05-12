import React from 'react'
import "../assets/js/plugins.init"
import "../assets/css/tailwind.min.css"

const Hero1 = () => {
  return (
    <>
      <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/real/bg/01.jpg')] bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-black opacity-80" />
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Books
            </h3>
          </div>
        </div>
      </section>
      {/* <div className="relative">
    <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
      <svg
        className="w-full h-auto"
        viewBox="0 0 2880 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div> */}
      <div className="container relative -mt-16 z-1">
        <div className="grid grid-cols-1">
          <div className="bg-white dark:bg-slate-900 rounded-md shadow-md dark:shadow-gray-800">
            <form action="#">
              <div className="registration-form text-dark text-start">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                  <div className="filter-search-form relative filter-border p-1">
                    <i className="uil uil-search icons" />
                    <input
                      name="name"
                      type="text"
                      id="job-keyword"
                      className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                      placeholder="Search your keaywords"
                    />
                  </div>
                  <div className='px-2'>
                    <select className="select w-full max-w-xs  mt-3 bg-gray-50 dark:bg-slate-800">
                      <option disabled selected>Pick your favorite Simpson</option>
                      <option>Homer</option>
                      <option>Marge</option>
                      <option>Bart</option>
                      <option>Lisa</option>
                      <option>Maggie</option>
                    </select>
                  </div>

                  <div className='px-2'>
                    <select className="select w-full max-w-xs  mt-2 bg-gray-50 dark:bg-slate-800">
                      <option disabled selected>Pick your favorite Simpson</option>
                      <option>Homer</option>
                      <option>Marge</option>
                      <option>Bart</option>
                      <option>Lisa</option>
                      <option>Maggie</option>
                    </select>

                  </div>
                  <div className='px-2'>
                    <select className="select w-full max-w-xs  mt-2 bg-gray-50 dark:bg-slate-800">
                      <option disabled selected>Pick your favorite Simpson</option>
                      <option>Homer</option>
                      <option>Marge</option>
                      <option>Bart</option>
                      <option>Lisa</option>
                      <option>Maggie</option>
                    </select>

                  </div>
                  {/* <div className="lg:mt-6">
                <input
                  type="submit"
                  id="search"
                  name="search"
                  className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn submit-btn w-full !h-12 rounded"
                  defaultValue="Search"
                />
              </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hero1