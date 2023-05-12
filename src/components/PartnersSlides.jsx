import React, { useEffect, useRef } from 'react';
import 'tiny-slider/dist/tiny-slider.css';
import { tns } from 'tiny-slider/src/tiny-slider';

import { client01, client02, client03, client04, client05, client06, } from '../assets'

const PartnersSlides = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize the Tiny Slider
    if (sliderRef.current) {
      tns({
        items: 3,
        slideBy: 'page',
        autoplay: true,
        container: '.tiny-two-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            768: {
                items: 2
            },
        },
      });
    }
  }, []);


  return (
    <>
     <div>
        <section className="relative md:py-24 py-16 dark:bg-slate-900">
          <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h6 className="mb-4 text-base font-medium text-indigo-600">We believe in building each other and hence</h6>
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white">Work with some amazing partners</h3>
              <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
            <div className="grid relative grid-cols-1 mt-8">
              <div ref={sliderRef} className="tiny-two-item">
                <div className="tiny-slide">
                  <div className="lg:flex p-6 lg:p-0 relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-2">
                    <img className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto" src={client01} alt="" width={384} height={512} />
                    <div className="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                      <p className="text-base text-slate-400">&quot; It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. &quot;</p>
                      <div>
                        <span className="text-indigo-600 block mb-1">Thomas Israel</span>
                        <span className="text-slate-400 text-sm dark:text-white/60 block">Staff Engineer, Algolia</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tiny-slide">
                  <div className="lg:flex p-6 lg:p-0 relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-2">
                    <img className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto" src={client02} alt="" width={384} height={512} />
                    <div className="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                      <p className="text-base text-slate-400">&quot; The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. &quot;</p>
                      <div>
                        <span className="text-indigo-600 block mb-1">Carl Oliver</span>
                        <span className="text-slate-400 text-sm dark:text-white/60 block">Staff Engineer, Algolia</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tiny-slide">
                  <div className="lg:flex p-6 lg:p-0 relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-2">
                    <img className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto" src={client03} alt="" width={384} height={512} />
                    <div className="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                      <p className="text-base text-slate-400">&quot; One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. &quot;</p>
                      <div>
                        <span className="text-indigo-600 block mb-1">Barbara McIntosh</span>
                        <span className="text-slate-400 text-sm dark:text-white/60 block">Staff Engineer, Algolia</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tiny-slide">
                  <div className="lg:flex p-6 lg:p-0 relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-2">
                    <img className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto" src={client04} alt="" width={384} height={512} />
                    <div className="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                      <p className="text-base text-slate-400">&quot; Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. &quot;</p>
                      <div>
                        <span className="text-indigo-600 block mb-1">Jill Webb</span>
                        <span className="text-slate-400 text-sm dark:text-white/60 block">Staff Engineer, Algolia</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tiny-slide">
                  <div className="lg:flex p-6 lg:p-0 relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-2">
                    <img className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto" src={client05} alt="" width={384} height={512} />
                    <div className="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                      <p className="text-base text-slate-400">&quot; One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. &quot;</p>
                      <div>
                        <span className="text-indigo-600 block mb-1">Barbara McIntosh</span>
                        <span className="text-slate-400 text-sm dark:text-white/60 block">Staff Engineer, Algolia</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tiny-slide">
                  <div className="lg:flex p-6 lg:p-0 relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-2">
                    <img className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto" src={client06} alt="" width={384} height={512} />
                    <div className="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                      <p className="text-base text-slate-400">&quot; Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. &quot;</p>
                      <div>
                        <span className="text-indigo-600 block mb-1">Jill Webb</span>
                        <span className="text-slate-400 text-sm dark:text-white/60 block">Staff Engineer, Algolia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container md:mt-24 mt-16">
            <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
              <div className="lg:col-span-5">
                <div className="lg:text-left text-center">
                  <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white">Our Comfortable Rates</h3>
                  <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                  <div className="mt-6">
                    <a href="page-pricing.html" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"><i className="uil uil-master-card" /> Subscribe Now</a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 mt-8 lg:mt-0">
                <div className="lg:ml-8">
                  <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px]">
                    <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md md:scale-110 z-3 bg-white dark:bg-slate-900">
                      <div className="p-6 py-8">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Starter</h6>
                        <div className="flex mb-5">
                          <span className="text-xl font-semibold dark:text-white">$</span>
                          <span className="price text-4xl font-semibold mb-0 dark:text-white">39</span>
                          <span className="text-xl font-semibold self-end mb-1 dark:text-white">/mo</span>
                        </div>
                        <ul className="list-none text-slate-400">
                          <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> Full Access</li>
                          <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> Source Files</li>
                          <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> Free Appointments</li>
                          <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> Enhanced Security</li>
                        </ul>
                        <a href='#' className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</a>
                      </div>
                    </div>
                    <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800">
                      <div className="p-6 py-8 md:pl-10">
                        <h6 className="font-bold uppercase mb-5 text-indigo-600">Professional</h6>
                        <div className="flex mb-5">
                          <span className="text-xl font-semibold dark:text-white">$</span>
                          <span className="price text-4xl font-semibold mb-0 dark:text-white">59</span>
                          <span className="text-xl font-semibold self-end mb-1 dark:text-white">/mo</span>
                        </div>
                        <ul className="list-none text-slate-400">
                          <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> Full Access</li>
                          <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> Source Files</li>
                          <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> Free Appointments</li>
                          <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2" /> Enhanced Security</li>
                        </ul>
                        <a href='#' className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
            <svg className="w-full h-auto" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartnersSlides