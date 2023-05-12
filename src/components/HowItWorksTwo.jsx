import React from 'react'
import { FiHelpCircle } from "react-icons/fi";

const HowItWorksTwo = () => {
  return (
    <>
    <div>
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
          <div className="container">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
              <div className="flex">
                {/* <i data-feather="help-circle" className="fea icon-ex-md text-indigo-600 mr-3" /> */}
                <FiHelpCircle className="text-indigo-600 mr-3 mt-1 h-6 w-6" />
                <div className="flex-1">
                  <h5 className="mb-2 text-xl font-semibold dark:text-white">How our <span className="text-indigo-600">Techwind</span> work ?</h5>
                  <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                </div>
              </div>
              <div className="flex">
                {/* <i data-feather="help-circle" className="fea icon-ex-md text-indigo-600 mr-3 mt-10" /> */}
                <FiHelpCircle className="text-indigo-600 mr-3 mt-1 h-6 w-6" />
                <div className="flex-1">
                  <h5 className="mb-2 text-xl font-semibold  dark:text-white"> What is the main process open account ?</h5>
                  <p className="text-slate-400">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                </div>
              </div>
              <div className="flex">
                {/* <i data-feather="help-circle" className="fea icon-ex-md text-indigo-600 mr-3" /> */}
                <FiHelpCircle className="text-indigo-600 mr-3 mt-1 h-6 w-6" />
                <div className="flex-1">
                  <h5 className="mb-2 text-xl font-semibold dark:text-white"> How to make unlimited data entry ?</h5>
                  <p className="text-slate-400">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                </div>
              </div>
              <div className="flex">
                {/* <i data-feather="help-circle" className="fea icon-ex-md text-indigo-600 mr-3" /> */}
                <FiHelpCircle className="text-indigo-600 mr-3 mt-1 h-6 w-6" />
                <div className="flex-1">
                  <h5 className="mb-2 text-xl font-semibold dark:text-white"> Is <span className="text-indigo-600">Techwind</span> safer to use with my account ?</h5>
                  <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container md:mt-24 mt-16 md:mb-12">
            <div className="grid grid-cols-1 text-center">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white">Have Question ? Get in touch!</h3>
              <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
              <div className="mt-6">
                <a href="contact-one.html" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"><i className="uil uil-phone" /> Contact us</a>
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-dark-footer">
            <svg className="w-full h-auto" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorksTwo