import React from 'react'
import { FiUser, FiMail, FiKey } from "react-icons/fi";
import { seoSVG, mobileNotificationSVG }  from '../assets'

const HowItWork = () => {
  return (
    <>
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white">Lorem Ipsum ?</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-5">
              <img src={seoSVG} alt="" />
            </div>
            <div className="lg:col-span-7 mt-8 md:mt-0">
              <div className="lg:ml-10">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white">Lorem Ipsum</h3>
                <p className="text-slate-400 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="list-none text-slate-400 mt-4">
                  <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="page-aboutus.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <i className="uil uil-angle-right-b align-middle" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container md:mt-24 mt-16">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-5 md:order-2 order-1">
              <div className="lg:ml-10">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-md shadow dark:shadow-gray-800">
                  <img src={mobileNotificationSVG} alt="" />
                  <div className="mt-8">
                    <form>
                      <div className="grid grid-cols-1">
                        <div className="mb-5">
                          <label className="form-label font-medium dark:text-white">Your Name : <span className="text-red-600">*</span></label>
                          <div className="form-icon relative mt-2">
                            {/* <i data-feather="user" className="w-4 h-4 absolute top-3 left-4" /> */}
                            <FiUser className="w-4 h-4 absolute top-3 left-4 dark:text-white" />
                            <input type="text" className="form-input pl-12" placeholder="Name" name="name" required />
                          </div>
                        </div>
                        <div className="mb-5">
                          <label className="form-label font-medium dark:text-white">Your Email : <span className="text-red-600">*</span></label>
                          <div className="form-icon relative mt-2">
                            {/* <i data-feather="mail" className="w-4 h-4 absolute top-3 left-4" /> */}
                            <FiMail className="w-4 h-4 absolute top-3 left-4 dark:text-white" />
                            <input type="email" className="form-input pl-12" placeholder="Email" name="email" required />
                          </div>
                        </div>
                        <div className="mb-5">
                          <label className="form-label font-medium dark:text-white">Enter Password : <span className="text-red-600">*</span></label>
                          <div className="form-icon relative mt-2">
                            {/* <i data-feather="key" className="w-4 h-4 absolute top-3 left-4" /> */}
                            <FiKey className="w-4 h-4 absolute top-3 left-4 dark:text-white" />
                            <input type="password" className="form-input pl-12" placeholder="Password" required />
                          </div>
                        </div>
                        <div className="">
                          <button className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Download</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 md:order-1 order-2 mt-8 md:mt-0">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Speed up your development <br /> with <span className="text-indigo-600">GERGI.</span></h3>
              <p className="text-slate-400 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
              </ul>
              <div className="mt-4">
                <a href="page-aboutus.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <i className="uil uil-angle-right-b align-middle" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWork