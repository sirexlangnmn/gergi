import React from 'react';
import { logoDark, logoLight } from '../assets'
import NavLinkLanding from './presentational-components/NavLinkLanding'

// import "../assets/libs/tiny-slider/tiny-slider.css"
// import "../assets/libs/@iconscout/unicons/css/line.css"
// import "../assets/css/icons.min.css"
// import "../assets/libs/tiny-slider/min/tiny-slider"
// import "../assets/libs/feather-icons/feather.min"
// import "../assets/js/plugins.init"
// import "../assets/js/app"

const Nav = () => {
  function toggleMenu() {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  }

  function toggleSubMenu() {
    var elements = document.getElementById("navigation").getElementsByTagName("a");
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].onclick = function (elem) {
        if (elem.target.getAttribute("href") === "#") {
          var submenu = elem.target.nextElementSibling.nextElementSibling;
          submenu.classList.toggle('open');


        }
      }
    }
  }

  return (
    <>
      {/* <div>Nav</div> */}
      <nav id="topnav" className="defaultscroll is-sticky">
        <div className="container">
          <a className="logo pl-0" href="index.html">
            <img src={logoDark} className="w-44 inline-block dark:hidden" alt="" />
            <img src={logoLight} className="w-44 hidden dark:inline-block" alt="" />
          </a>
          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle" onClick={toggleMenu} >
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </a>
            </div>
          </div>
          <ul className="buy-button list-none mb-0">
            {/* <li className="inline mb-0">
              <a href="#" className="btn btn-icon rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i data-feather="settings" className="h-4 w-4" /></a>
            </li>
            <li className="inline pl-1 mb-0">
              <a href="" target="_blank" className="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i data-feather="shopping-cart" className="h-4 w-4" /></a>
            </li> */}
          </ul>
          <div id="navigation" onClick={toggleSubMenu}>
            <ul className="navigation-menu">
              <li><a href="/" className="sub-menu-item">Home</a></li>
              <li><a href="/books" className="sub-menu-item">Books</a></li>
              {/* <li className="has-submenu parent-parent-menu-item">
                <a href="#">Subjects1</a><span className="menu-arrow" />
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li className="megamenu-head">General Education<br />
                      <span className="text-xxs font-normal">(GenEd)</span></li>
                      <li><a href="" className="sub-menu-item">Understanding The Self</a></li>
                      <li><a href="" className="sub-menu-item">Reading In Philippine History</a></li>
                      <li><a href="" className="sub-menu-item">Mathematics in Modern World</a></li>
                      <li><a href="" className="sub-menu-item">The Contemporary World</a></li>
                      <li><a href="" className="sub-menu-item">Purposive Communication</a></li>
                      <li><a href="" className="sub-menu-item">Art Appreciation</a></li>
                      <li><a href="" className="sub-menu-item">Science, technology, and Society</a></li>
                      <li><a href="" className="sub-menu-item">Ethics</a></li>
                      <li><a href="" className="sub-menu-item">Rizal&apos;s Life Works & Writings</a></li>
                    </ul>
                    <ul>
                      <li className="megamenu-head">Other Optometry Books<br />
                      <span className="text-xxs font-normal">(Other)</span>
                      </li>
                      <li><a href="" className="sub-menu-item">Other Optometry Books</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="megamenu-head">Biological Science<br />
                      <span className="text-xxs font-normal">(Core Courses)</span>
                      </li>
                      <li><a href="" className="sub-menu-item">Biology</a></li>
                      <li><a href="" className="sub-menu-item">MicroBiology</a></li>
                    </ul>
                    <ul>
                      <li className="megamenu-head">Chemistry<br />
                      <span className="text-xxs font-normal">(Core Courses)</span>
                      </li>
                      <li><a href="" className="sub-menu-item">Chemistry (Organic)</a></li>
                      <li><a href="" className="sub-menu-item">Biochemistry</a></li>
                      <li><a href="" className="sub-menu-item">Physics</a></li>
                    </ul>
                    <ul>
                      <li className="megamenu-head">General Medical Science<br />
                      <span className="text-xxs font-normal">(Professional Courses)</span>
                      </li>
                      <li><a href="" className="sub-menu-item">Human Anatomy and Physiology</a></li>
                      <li><a href="" className="sub-menu-item">Human Histology and Embryology</a></li>
                      <li><a href="" className="sub-menu-item">General Pathology</a></li>
                      <li><a href="" className="sub-menu-item">General Pharmacology</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="megamenu-head">Ocular Medical Science<br />
                      <span className="text-xxs font-normal">(Professional Courses)</span>
                      </li>
                      <li><a href="" className="sub-menu-item">Ocular Anatomy and Physiology</a></li>
                      <li><a href="" className="sub-menu-item">Neuro-Biology of the Visual System</a></li>
                      <li><a href="" className="sub-menu-item">Ocular Disease 1</a></li>
                      <li><a href="" className="sub-menu-item">Ocular Pharmacology with Therapeutics</a></li>
                      <li><a href="" className="sub-menu-item">Ocular Disease 2</a></li>
                      <li><a href="" className="sub-menu-item">Optometry Medicine</a></li>
                    </ul>
                    <ul>
                      <li className="megamenu-head">Vision Sciences<br />
                      <span className="text-xxs font-normal">(Professional Courses)</span>
                      </li>
                      <li><a href="" className="sub-menu-item">Introduction to and History of Optometry</a></li>
                      <li><a href="" className="sub-menu-item">Primary Eye and Vision Care</a></li>
                      <li><a href="" className="sub-menu-item">Theoretical and Geometric Optics</a></li>
                      <li><a href="" className="sub-menu-item">Physiological Optics</a></li>
                      <li><a href="" className="sub-menu-item">Opthalmic Optics</a></li>
                      <li><a href="" className="sub-menu-item">Applied Optics</a></li>
                      <li><a href="" className="sub-menu-item">Nutrition in Eye Care</a></li>
                      <li><a href="" className="sub-menu-item">Clinical Refraction</a></li>
                      <li><a href="" className="sub-menu-item">Binocular Vision and Perception</a></li>
                      <li><a href="" className="sub-menu-item">Clinical Optometry Practice</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="megamenu-head">Specialty Fields<br />
                      <span className="text-xxs font-normal">(Professional Courses)</span>
                      </li>
                      <li><a href="" className="sub-menu-item">Sports Vision</a></li>
                      <li><a href="" className="sub-menu-item">Pediatric Optometry</a></li>
                      <li><a href="" className="sub-menu-item">Geriatric Optometry</a></li>
                      <li><a href="" className="sub-menu-item">Low Vision</a></li>
                      <li><a href="" className="sub-menu-item">Public Health and Community Optometry</a></li>
                      <li><a href="" className="sub-menu-item">Contact Lens</a></li>
                    </ul>
                    <ul>
                      <li className="megamenu-head">Clinical Optometry<br />
                      <span className="text-xxs font-normal">(Professional Courses)</span>
                      </li>
                      <li><a href="" className="sub-menu-item">Clinic</a></li>
                      <li><a href="" className="sub-menu-item">Clinical Low Vision</a></li>
                      <li><a href="" className="sub-menu-item">Clinical Neuro-Optometry</a></li>
                      <li><a href="" className="sub-menu-item">Clinical Pediatric Optometry</a></li>
                      <li><a href="" className="sub-menu-item">Clinical Contact Lens</a></li>
                      <li><a href="" className="sub-menu-item">Vision Rehabilitation</a></li>
                      <li><a href="" className="sub-menu-item">Occupational Health Optometry and Safety</a></li>
                      <li><a href="" className="sub-menu-item">Ocular Prosthetics</a></li>
                      <li><a href="" className="sub-menu-item">Visual Analysis and Management</a></li>
                    </ul>
                  </li>
                </ul>
              </li> */}
              <li className="has-submenu parent-parent-menu-item">
                <a href="#">Subjects</a>
                <span className="menu-arrow" />
                <div className="submenu megamenu">
                  <ul>
                    <li className="ml-4">
                      <p className="sub-menu-item">
                        General Education<br />
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          GenEd
                        </span>
                      </p>
                    </li>
                    <li><a href="" className="sub-menu-item">Understanding The Self</a></li>
                    <li><a href="" className="sub-menu-item">Reading In Philippine History</a></li>
                    <li><a href="" className="sub-menu-item">Mathematics in Modern World</a></li>
                    <li><a href="" className="sub-menu-item">The Contemporary World</a></li>
                    <li><a href="" className="sub-menu-item">Purposive Communication</a></li>
                    <li><a href="" className="sub-menu-item">Art Appreciation</a></li>
                    <li><a href="" className="sub-menu-item">Science, technology, and Society</a></li>
                    <li><a href="" className="sub-menu-item">Ethics</a></li>
                    <li><a href="" className="sub-menu-item">Rizal&apos;s Life Works & Writings</a></li>
                    <li className="ml-4">
                      <p className="sub-menu-item">
                        Other Optometry Books<br />
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          Other
                        </span>
                      </p>
                    </li>
                    <li><a href="" className="sub-menu-item">Other Optometry Books</a></li>
                  </ul>
                  <ul>
                    <li className="ml-4">
                      <p className="sub-menu-item">
                        Biological Science<br />
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          Core Courses
                        </span>
                      </p>
                    </li>
                    <li><a href="" className="sub-menu-item">Biology</a></li>
                    <li><a href="" className="sub-menu-item">MicroBiology</a></li>
                    <li className="mr-32 ml-4">
                      <p className="sub-menu-item">
                        Chemistry<br />
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          Core Courses
                        </span>
                      </p>
                    </li>
                    <li><a href="" className="sub-menu-item">Chemistry (Organic)</a></li>
                    <li><a href="" className="sub-menu-item">Biochemistry</a></li>
                    <li><a href="" className="sub-menu-item">Physics</a></li>
                    <li className="ml-4">
                      <p className="sub-menu-item">
                        General Medical Science<br />
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          Professional Courses
                        </span>
                      </p>
                    </li>
                    <li><a href="" className="sub-menu-item">Human Anatomy and Physiology</a></li>
                    <li><a href="" className="sub-menu-item">Human Histology and Embryology</a></li>
                    <li><a href="" className="sub-menu-item">General Pathology</a></li>
                    <li><a href="" className="sub-menu-item">General Pharmacology</a></li>
                  </ul>
                  <ul>
                    <li className="ml-4">
                      <p className="sub-menu-item">
                        Ocular Medical Science<br />
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          Core Courses
                        </span>
                      </p>
                    </li>
                    <li><a href="" className="sub-menu-item">Ocular Anatomy and Physiology</a></li>
                    <li><a href="" className="sub-menu-item">Neuro-Biology of the Visual System</a></li>
                    <li><a href="" className="sub-menu-item">Ocular Disease 1</a></li>
                    <li><a href="" className="sub-menu-item">Ocular Pharmacology with Therapeutics</a></li>
                    <li><a href="" className="sub-menu-item">Ocular Disease 2</a></li>
                    <li><a href="" className="sub-menu-item">Optometry Medicine</a></li>
                    <li className="mr-32 ml-4">
                      <p className="sub-menu-item">
                        Vision Sciences<br />
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          Core Courses
                        </span>
                      </p>
                    </li>
                    <li><a href="" className="sub-menu-item">Introduction to and History of Optometry</a></li>
                    <li><a href="" className="sub-menu-item">Primary Eye and Vision Care</a></li>
                    <li><a href="" className="sub-menu-item">Theoretical and Geometric Optics</a></li>
                    <li><a href="" className="sub-menu-item">Physiological Optics</a></li>
                    <li><a href="" className="sub-menu-item">Opthalmic Optics</a></li>
                    <li><a href="" className="sub-menu-item">Applied Optics</a></li>
                    <li><a href="" className="sub-menu-item">Nutrition in Eye Care</a></li>
                    <li><a href="" className="sub-menu-item">Clinical Refraction</a></li>
                    <li><a href="" className="sub-menu-item">Binocular Vision and Perception</a></li>
                    <li><a href="" className="sub-menu-item">Clinical Optometry Practice</a></li>

                  </ul>
                  <ul>
                    <li className="ml-4">
                      <p className="sub-menu-item">
                        Specialty Fields<br />
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          Core Courses
                        </span>
                      </p>
                    </li>
                    <li><a href="" className="sub-menu-item">Sports Vision</a></li>
                    <li><a href="" className="sub-menu-item">Pediatric Optometry</a></li>
                    <li><a href="" className="sub-menu-item">Geriatric Optometry</a></li>
                    <li><a href="" className="sub-menu-item">Low Vision</a></li>
                    <li><a href="" className="sub-menu-item">Public Health and Community Optometry</a></li>
                    <li><a href="" className="sub-menu-item">Contact Lens</a></li>
                    <li className="mr-32 ml-4">
                      <p className="sub-menu-item">
                        Clinical Optometry<br />
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          Core Courses
                        </span>
                      </p>
                    </li>
                    <li><a href="" className="sub-menu-item">Clinic</a></li>
                    <li><a href="" className="sub-menu-item">Clinical Low Vision</a></li>
                    <li><a href="" className="sub-menu-item">Clinical Neuro-Optometry</a></li>
                    <li><a href="" className="sub-menu-item">Clinical Pediatric Optometry</a></li>
                    <li><a href="" className="sub-menu-item">Clinical Contact Lens</a></li>
                    <li><a href="" className="sub-menu-item">Vision Rehabilitation</a></li>
                    <li><a href="" className="sub-menu-item">Occupational Health Optometry and Safety</a></li>
                    <li><a href="" className="sub-menu-item">Ocular Prosthetics</a></li>
                    <li><a href="" className="sub-menu-item">Visual Analysis and Management</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="" className="sub-menu-item">About Us</a></li>
              <li><a href="" className="sub-menu-item">FAQ</a></li>
              <li><a href="" className="sub-menu-item">Terms and Condition</a></li>

              {/* <li className="has-submenu parent-parent-menu-item">
                <a href="#">Landing</a><span className="menu-arrow" />
                <NavLinkLanding />
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <a href="#">Pages</a><span className="menu-arrow" />
                <ul className="submenu">
                  <li className="has-submenu parent-menu-item"><a href="#"> Company </a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="page-aboutus.html" className="sub-menu-item"> About Us</a></li>
                      <li><a href="page-services.html" className="sub-menu-item">Services</a></li>
                      <li><a href="page-team.html" className="sub-menu-item"> Team</a></li>
                      <li><a href="page-pricing.html" className="sub-menu-item">Pricing</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Accounts</a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="user-profile.html" className="sub-menu-item">User Profile</a></li>
                      <li><a href="user-billing.html" className="sub-menu-item">Billing</a></li>
                      <li><a href="user-payment.html" className="sub-menu-item">Payment</a></li>
                      <li><a href="user-invoice.html" className="sub-menu-item">Invoice</a></li>
                      <li><a href="user-social.html" className="sub-menu-item">Social</a></li>
                      <li><a href="user-notification.html" className="sub-menu-item">Notification</a></li>
                      <li><a href="user-setting.html" className="sub-menu-item">Setting</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Real Estate</a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="property-listing.html" className="sub-menu-item">Listing</a></li>
                      <li><a href="property-detail.html" className="sub-menu-item">Property Detail</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Courses </a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="course-listing.html" className="sub-menu-item">Course Listing</a></li>
                      <li><a href="course-detail.html" className="sub-menu-item">Course Detail</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> NFT Market </a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="nft-explore.html" className="sub-menu-item">Explore</a></li>
                      <li><a href="nft-auction.html" className="sub-menu-item">Auction</a></li>
                      <li><a href="nft-collection.html" className="sub-menu-item">Collections</a></li>
                      <li><a href="nft-creators.html" className="sub-menu-item">Creators</a></li>
                      <li><a href="nft-wallet.html" className="sub-menu-item">Wallet</a></li>
                      <li><a href="nft-create-item.html" className="sub-menu-item">Create NFT</a></li>
                      <li><a href="nft-detail.html" className="sub-menu-item">Single NFT</a></li>
                    </ul>
                  </li>
                  <li><a href="food-recipe.html" className="sub-menu-item">Food Recipe </a></li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Photography <span className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">New</span></a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="photography-about.html" className="sub-menu-item">About Us</a></li>
                      <li><a href="photography-portfolio.html" className="sub-menu-item">Portfolio</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Job / Careers </a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="page-job-grid.html" className="sub-menu-item">All Jobs</a></li>
                      <li><a href="page-job-detail.html" className="sub-menu-item">Job Detail</a></li>
                      <li><a href="page-job-apply.html" className="sub-menu-item">Job Apply</a></li>
                      <li><a href="page-job-candidates.html" className="sub-menu-item">Job Candidates</a></li>
                      <li><a href="page-job-candidate-detail.html" className="sub-menu-item">Candidate Detail</a></li>
                      <li><a href="page-job-companies.html" className="sub-menu-item">All Companies</a></li>
                      <li><a href="page-job-company-detail.html" className="sub-menu-item">Company Detail</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Helpcenter </a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="helpcenter.html" className="sub-menu-item">Overview</a></li>
                      <li><a href="helpcenter-faqs.html" className="sub-menu-item">FAQs</a></li>
                      <li><a href="helpcenter-guides.html" className="sub-menu-item">Guides</a></li>
                      <li><a href="helpcenter-support.html" className="sub-menu-item">Support</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Blog </a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="blog.html" className="sub-menu-item">Blogs</a></li>
                      <li><a href="blog-sidebar.html" className="sub-menu-item">Blogs &amp; Sidebar</a></li>
                      <li><a href="blog-detail.html" className="sub-menu-item">Blog Detail</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Email Template</a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="email-confirmation.html" className="sub-menu-item">Confirmation</a></li>
                      <li><a href="email-password-reset.html" className="sub-menu-item">Reset Password</a></li>
                      <li><a href="email-alert.html" className="sub-menu-item">Alert</a></li>
                      <li><a href="email-invoice.html" className="sub-menu-item">Invoice</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Auth Pages </a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="auth-login.html" className="sub-menu-item">Login</a></li>
                      <li><a href="auth-signup.html" className="sub-menu-item">Signup</a></li>
                      <li><a href="auth-re-password.html" className="sub-menu-item">Reset Password</a></li>
                      <li><a href="auth-lock-screen.html" className="sub-menu-item">Lock Screen</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Utility </a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="page-terms.html" className="sub-menu-item">Terms of Services</a></li>
                      <li><a href="page-privacy.html" className="sub-menu-item">Privacy Policy</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Special</a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="page-comingsoon.html" className="sub-menu-item">Coming Soon</a></li>
                      <li><a href="page-maintenance.html" className="sub-menu-item">Maintenance</a></li>
                      <li><a href="page-error.html" className="sub-menu-item">Error</a></li>
                      <li><a href="page-thankyou.html" className="sub-menu-item">Thank you</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Contact </a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="contact-detail.html" className="sub-menu-item">Contact Detail</a></li>
                      <li><a href="contact-one.html" className="sub-menu-item">Contact One</a></li>
                      <li><a href="contact-two.html" className="sub-menu-item">Contact Two</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item"><a href="#"> Multi Level Menu</a><span className="submenu-arrow" />
                    <ul className="submenu">
                      <li><a href="#" className="sub-menu-item">Level 1.0</a></li>
                      <li className="has-submenu parent-menu-item"><a href="#"> Level 2.0 </a><span className="submenu-arrow" />
                        <ul className="submenu">
                          <li><a href="#" className="sub-menu-item">Level 2.1</a></li>
                          <li><a href="#" className="sub-menu-item">Level 2.2</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <a href="#">Portfolio</a><span className="menu-arrow" />
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li className="megamenu-head">Modern Portfolio</li>
                      <li><a href="portfolio-modern-two.html" className="sub-menu-item">Two Column</a></li>
                      <li><a href="portfolio-modern-three.html" className="sub-menu-item">Three Column</a></li>
                      <li><a href="portfolio-modern-four.html" className="sub-menu-item">Four Column</a></li>
                      <li><a href="portfolio-modern-five.html" className="sub-menu-item">Five Column</a></li>
                      <li><a href="portfolio-modern-six.html" className="sub-menu-item">Six Column</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="megamenu-head">Classic Portfolio</li>
                      <li><a href="portfolio-classic-two.html" className="sub-menu-item">Two Column</a></li>
                      <li><a href="portfolio-classic-three.html" className="sub-menu-item">Three Column</a></li>
                      <li><a href="portfolio-classic-four.html" className="sub-menu-item">Four Column</a></li>
                      <li><a href="portfolio-classic-five.html" className="sub-menu-item">Five Column</a></li>
                      <li><a href="portfolio-classic-six.html" className="sub-menu-item">Six Column</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="megamenu-head">Creative Portfolio</li>
                      <li><a href="portfolio-creative-two.html" className="sub-menu-item">Two Column</a></li>
                      <li><a href="portfolio-creative-three.html" className="sub-menu-item">Three Column</a></li>
                      <li><a href="portfolio-creative-four.html" className="sub-menu-item">Four Column</a></li>
                      <li><a href="portfolio-creative-five.html" className="sub-menu-item">Five Column</a></li>
                      <li><a href="portfolio-creative-six.html" className="sub-menu-item">Six Column</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="megamenu-head">Masonry Portfolio</li>
                      <li><a href="portfolio-masonry-two.html" className="sub-menu-item">Two Column</a></li>
                      <li><a href="portfolio-masonry-three.html" className="sub-menu-item">Three Column</a></li>
                      <li><a href="portfolio-masonry-four.html" className="sub-menu-item">Four Column</a></li>
                      <li><a href="portfolio-masonry-five.html" className="sub-menu-item">Five Column</a></li>
                      <li><a href="portfolio-masonry-six.html" className="sub-menu-item">Six Column</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="megamenu-head">Portfolio Detail</li>
                      <li><a href="portfolio-detail-one.html" className="sub-menu-item">Portfolio One</a></li>
                      <li><a href="portfolio-detail-two.html" className="sub-menu-item">Portfolio Two</a></li>
                      <li><a href="portfolio-detail-three.html" className="sub-menu-item">Portfolio Three</a></li>
                      <li><a href="portfolio-detail-four.html" className="sub-menu-item">Portfolio Four</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu parent-menu-item">
                <a href="#">Docs</a><span className="menu-arrow" />
                <ul className="submenu">
                  <li><a href="documentation.html" className="sub-menu-item">Documentation</a></li>
                  <li><a href="changelog.html" className="sub-menu-item">Changelog</a></li>
                </ul>
              </li>
              <li><a href="contact-one.html" className="sub-menu-item">Contact</a></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav