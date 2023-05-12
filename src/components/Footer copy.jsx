import React from 'react'
import { logoLight, americanEx, discover, masterCard, paypal, visa } from '../assets'


const Footer = () => {
  return (
    <>
<footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
  <div className="container">
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="py-[60px] px-0">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-12">
              <a href="#" className="text-[22px] focus:outline-none">
                <img src="assets/images/logo-light.png" alt="" />
              </a>
              <p className="mt-6 text-gray-300">
                Start working with Tailwind CSS that can provide everything you
                need to generate awareness, drive traffic, connect.
              </p>
              <ul className="list-none mt-6">
                <li className="inline">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-shopping-cart align-middle"
                      title="Buy Now"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://dribbble.com/shreethemes"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-dribbble align-middle"
                      title="dribbble"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.behance.net/shreethemes"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i className="uil uil-behance" title="Behance" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="http://linkedin.com/company/shreethemes"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i className="uil uil-linkedin" title="Linkedin" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.facebook.com/shreethemes"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-facebook-f align-middle"
                      title="facebook"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.instagram.com/shreethemes/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-instagram align-middle"
                      title="instagram"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://twitter.com/shreethemes"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-twitter align-middle"
                      title="twitter"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="mailto:support@shreethemes.in"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-envelope align-middle"
                      title="email"
                    />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://forms.gle/QkTueCikDGqJnbky9"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                  >
                    <i
                      className="uil uil-file align-middle"
                      title="customization"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 md:col-span-4">
              <h5 className="tracking-[1px] text-gray-100 font-semibold">
                Company
              </h5>
              <ul className="list-none footer-list mt-6">
                <li>
                  <a
                    href="page-aboutus.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> About us
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="page-services.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Services
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="page-team.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Team
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="page-pricing.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Pricing
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="portfolio-creative-four.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Project
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="blog.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Blog
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="auth-login.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 md:col-span-4">
              <h5 className="tracking-[1px] text-gray-100 font-semibold">
                Usefull Links
              </h5>
              <ul className="list-none footer-list mt-6">
                <li>
                  <a
                    href="page-terms.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Terms of
                    Services
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="page-privacy.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Privacy Policy
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="documentation.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Documentation
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="changelog.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Changelog
                  </a>
                </li>
                <li className="mt-[10px]">
                  <a
                    href="widget.html"
                    className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                  >
                    <i className="uil uil-angle-right-b me-1" /> Widget
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 md:col-span-4">
              <h5 className="tracking-[1px] text-gray-100 font-semibold">
                Newsletter
              </h5>
              <p className="mt-6">
                Sign up and receive the latest tips via email.
              </p>
              <form>
                <div className="grid grid-cols-1">
                  <div className="foot-subscribe my-3">
                    <label className="form-label">
                      Write your email <span className="text-red-600">*</span>
                    </label>
                    <div className="form-icon relative mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-mail w-4 h-4 absolute top-3 left-4"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input
                        type="email"
                        className="form-input bg-gray-800 border border-gray-800 text-gray-100 pl-12 focus:shadow-none"
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submitsubscribe"
                    name="send"
                    className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="py-[30px] px-0 border-t border-slate-800">
    <div className="container text-center">
      <div className="grid md:grid-cols-2 items-center">
        <div className="md:text-left text-center">
          <p className="mb-0">
            © 2023 GERGI. Design with{" "}
            <i className="mdi mdi-heart text-red-600" /> by{" "}
            <a
              href="https://shreethemes.in/"
              target="_blank"
              rel="noreferrer"
              className="text-reset"
            >
              Shreethemes
            </a>
            .
          </p>
        </div>
        <ul className="list-none md:text-right text-center mt-6 md:mt-0">
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/american-ex.png"
                className="max-h-6 inline"
                title="American Express"
                alt=""
              />
            </a>
          </li>
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/discover.png"
                className="max-h-6 inline"
                title="Discover"
                alt=""
              />
            </a>
          </li>
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/master-card.png"
                className="max-h-6 inline"
                title="Master Card"
                alt=""
              />
            </a>
          </li>
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/paypal.png"
                className="max-h-6 inline"
                title="Paypal"
                alt=""
              />
            </a>
          </li>
          <li className="inline">
            <a href="">
              <img
                src="assets/images/payments/visa.png"
                className="max-h-6 inline"
                title="Visa"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer