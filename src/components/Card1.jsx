import React from 'react'
import { book13 } from '../assets'

const Card1 = () => {
  return (
    <>
      <div className="shadow-xl card card-side bg-base-100 dark:bg-white">
        {/* <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure> */}
        <div
  className={`flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l bg-[url('${book13}')]`}
  style={{ backgroundImage: `url("${book13}")` }}
  title="Woman holding a mug"
></div>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card1