import React from 'react'

const CookiePopup = () => {
  return (
    <>
    {/* <div>CookiePopup</div> */}
     <div className="cookie-popup fixed max-w-lg bottom-3 right-3 left-3 sm:left-0 sm:right-0 mx-auto bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md py-5 px-6 z-10">
        <p className="text-slate-400">This website uses cookies to provide you with a great user experience. By using it, you accept our <a href="#" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-500 font-semibold">use of cookies</a></p>
        <div className="cookie-popup-actions text-right">
          <button className="absolute border-none bg-none p-0 cursor-pointer font-semibold top-2 right-2"><i className="uil uil-times text-dark dark:text-slate-200 text-2xl" /></button>
        </div>
      </div>
    </>
  )
}

export default CookiePopup