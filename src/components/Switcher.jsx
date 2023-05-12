import React, { useEffect } from 'react';

function changeTheme(e) {
  e.preventDefault();
  const htmlTag = document.getElementsByTagName('html')[0];

  if (htmlTag.classList.contains('dark')) {
    htmlTag.classList.remove('dark');
    htmlTag.classList.add('light');
  } else {
    htmlTag.classList.remove('light');
    htmlTag.classList.add('dark');
  }
}

const Switcher = () => {
  useEffect(() => {
    const switcher = document.getElementById('theme-mode');
    switcher?.addEventListener('click', changeTheme);

    const chk = document.getElementById('chk');
    chk.addEventListener('change', changeTheme);

    return () => {
      // Clean up the event listeners when the component is unmounted
      switcher?.removeEventListener('click', changeTheme);
      chk.removeEventListener('change', changeTheme);
    };
  }, []);

  return (
    <>
      {/* <div>Switcher</div> */}
      <div className="fixed top-1/4 -right-1 z-3">
      <span className="relative inline-block rotate-90">
        <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
        <label
          className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
          htmlFor="chk"
        >
          <i className="uil uil-moon text-[20px] text-yellow-500" />
          <i className="uil uil-sun text-[20px] text-yellow-500" />
          <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7" />
        </label>
      </span>
    </div>
    </>
  )
}

export default Switcher