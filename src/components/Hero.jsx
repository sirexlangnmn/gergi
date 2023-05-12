import React from 'react'
import { startUpSVG } from '../assets'


const Hero = () => {
  return (
    <>
    {/* <div>Hero</div> */}
     <section className="relative table w-full py-36 lg:py-44 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="md:col-span-7">
              <div className="md:mr-6">
                <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white font-roboto">Our Creativity Is Your <span className="text-indigo-600">Success</span></h4>
                <p className="text-slate-400 text-lg max-w-xl font-roboto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                <div className="mt-6">
                  <a href="contact-one.html" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"><i className="uil uil-envelope" /> Get Started</a>
                  <a href="documentation.html" className="btn bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2"><i className="uil uil-book-alt" /> Documentation</a>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <img src={startUpSVG} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero