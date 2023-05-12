import React from 'react'
import { googleSVG, lenovoSVG, paypalSVG, shopifySVG, spotifySVG } from '../assets'

const BusinessPartners = () => {
  return (
    <>
    {/* <div>Partners</div> */}
    <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700 dark:bg-slate-900">
        <div className="container">
          <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4">
              <img src="src/assets/images/client/amazon.svg" className="h-6" alt="" />
            </div>
            <div className="mx-auto py-4">
              <img src={googleSVG} className="h-6" alt="" />
            </div>
            <div className="mx-auto py-4">
              <img src={lenovoSVG} className="h-6" alt="" />
            </div>
            <div className="mx-auto py-4">
              <img src={paypalSVG} className="h-6" alt="" />
            </div>
            <div className="mx-auto py-4">
              <img src={shopifySVG} className="h-6" alt="" />
            </div>
            <div className="mx-auto py-4">
              <img src={spotifySVG} className="h-6" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BusinessPartners