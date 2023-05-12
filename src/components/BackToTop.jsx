import React from 'react'

const BackToTop = () => {
  // Function to handle the click event
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
    {/* <div>BackToTop</div> */}
     <a
      href="#"
      onClick={topFunction}
      id="back-to-top"
      className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"
    >
      <i className="uil uil-arrow-up" />
    </a>
    </>
  )
}

export default BackToTop