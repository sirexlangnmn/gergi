import React from 'react'
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const BookList14 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const images = [
    {
      id: 1,
      title: "Image 1",
      url: "https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg",
      thumbnailUrl: "https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg",
    },
    {
      id: 2,
      title: "Image 2",
      url: "https://via.placeholder.com/800x600.png?text=Image+2",
      thumbnailUrl: "https://via.placeholder.com/200x150.png?text=Image+2",
    },
    {
      id: 3,
      title: "Image 3",
      url: "https://via.placeholder.com/800x600.png?text=Image+3",
      thumbnailUrl: "https://via.placeholder.com/800x600.png?text=Image+3"
    },
    {
      id: 4,
      title: "Image 1",
      url: "https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg",
      thumbnailUrl: "https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg",
    },
    {
      id: 5,
      title: "Image 2",
      url: "https://via.placeholder.com/800x600.png?text=Image+2",
      thumbnailUrl: "https://via.placeholder.com/200x150.png?text=Image+2",
    },
    {
      id: 6,
      title: "Image 3",
      url: "https://via.placeholder.com/800x600.png?text=Image+3",
      thumbnailUrl: "https://via.placeholder.com/800x600.png?text=Image+3"
    }
  ]

  return (
    <>
      <section className="relative table w-full py-36 lg:py-44 bg-gray-100 dark:bg-slate-900">
        <div className="container">
          <div className="mx-auto my-4 md:my-8 flex flex-col">
            {/* <h2 className="my-4 md:my-8 lg:mt-10 mx-auto text-3xl">Newest Goods</h2> */}
            <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 ">
              <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative">
                <a
                  className="flex md:items-center md:flex-col relative w-full"
                  href="#"
                >
                  <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center ">
                    <div className="flex items-center h-full">
                      <span className="inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full">
                        <span className="block box-border w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">

                          <img alt="" aria-hidden="true" src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                            className="block max-w-full w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0" />

                        </span>
                        <img
                          alt="Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse"
                          src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                          decoding="async"
                          data-nimg="intrinsic"
                          className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 absolute inset-0 box-border p-0 border-0 mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                          srcSet="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-1 md:px-3 py-2 md:py-4 bg-white dark:bg-slate-800 rounded-b-xl">
                    <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
                      <h3 className="text-sm sm:text-[12px] md:text-sm text-left text-palette-mute ">
                        Living in the Light: A guide to personal transformation
                      </h3>
                      <span className="text-xs font-normal md:block mt-4">258 Pages</span>
                      <span className="text-xs font-normal md:block mt-2">2001</span>
                      <span className="text-xs font-normal md:block mt-2">2.74 MB</span>
                    </div>
                  </div>
                </a>

              </div>
              <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative">
                <a
                  className="flex md:items-center md:flex-col relative w-full"
                  href="#"
                >
                  <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center ">
                    <div className="flex items-center h-full">
                      <span className="inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full">
                        <span className="block box-border w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">

                          <img alt="" aria-hidden="true" src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                            className="block max-w-full w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0" />

                        </span>
                        <img
                          alt="Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse"
                          src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                          decoding="async"
                          data-nimg="intrinsic"
                          className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 absolute inset-0 box-border p-0 border-0 mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                          srcSet="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-1 md:px-3 py-2 md:py-4 bg-white dark:bg-slate-800 rounded-b-xl">
                    <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
                      <h3 className="text-sm sm:text-[12px] md:text-sm text-left text-palette-mute ">
                        Living in the Light: A guide to personal transformation
                      </h3>
                      <span className="text-xs font-normal md:block mt-4">258 Pages</span>
                      <span className="text-xs font-normal md:block mt-2">2001</span>
                      <span className="text-xs font-normal md:block mt-2">2.74 MB</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative">
                <a
                  className="flex md:items-center md:flex-col relative w-full"
                  href="#"
                >
                  <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center ">
                    <div className="flex items-center h-full">
                      <span className="inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full">
                        <span className="block box-border w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">

                          <img alt="" aria-hidden="true" src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                            className="block max-w-full w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0" />

                        </span>
                        <img
                          alt="Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse"
                          src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                          decoding="async"
                          data-nimg="intrinsic"
                          className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 absolute inset-0 box-border p-0 border-0 mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                          srcSet="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-1 md:px-3 py-2 md:py-4 bg-white dark:bg-slate-800 rounded-b-xl">
                    <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
                      <h3 className="text-sm sm:text-[12px] md:text-sm text-left text-palette-mute ">
                        Living in the Light: A guide to personal transformation
                      </h3>
                      <span className="text-xs font-normal md:block mt-4">258 Pages</span>
                      <span className="text-xs font-normal md:block mt-2">2001</span>
                      <span className="text-xs font-normal md:block mt-2">2.74 MB</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative">
                <a
                  className="flex md:items-center md:flex-col relative w-full"
                  href="#"
                >
                  <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center ">
                    <div className="flex items-center h-full">
                      <span className="inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full">
                        <span className="block box-border w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">

                          <img alt="" aria-hidden="true" src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                            className="block max-w-full w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0" />

                        </span>
                        <img
                          alt="Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse"
                          src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                          decoding="async"
                          data-nimg="intrinsic"
                          className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 absolute inset-0 box-border p-0 border-0 mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                          srcSet="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-1 md:px-3 py-2 md:py-4 bg-white dark:bg-slate-800 rounded-b-xl">
                    <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
                      <h3 className="text-sm sm:text-[12px] md:text-sm text-left text-palette-mute ">
                        Living in the Light: A guide to personal transformation
                      </h3>
                      <span className="text-xs font-normal md:block mt-4">258 Pages</span>
                      <span className="text-xs font-normal md:block mt-2">2001</span>
                      <span className="text-xs font-normal md:block mt-2">2.74 MB</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative">
                <a
                  className="flex md:items-center md:flex-col relative w-full"
                  href="#"
                >
                  <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center ">
                    <div className="flex items-center h-full">
                      <span className="inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full">
                        <span className="block box-border w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">

                          <img alt="" aria-hidden="true" src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                            className="block max-w-full w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0" />

                        </span>
                        <img
                          alt="Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse"
                          src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                          decoding="async"
                          data-nimg="intrinsic"
                          className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 absolute inset-0 box-border p-0 border-0 mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                          srcSet="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-1 md:px-3 py-2 md:py-4 bg-white dark:bg-slate-800 rounded-b-xl">
                    <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
                      <h3 className="text-sm sm:text-[12px] md:text-sm text-left text-palette-mute ">
                        Living in the Light: A guide to personal transformation
                      </h3>
                      <span className="text-xs font-normal md:block mt-4">258 Pages</span>
                      <span className="text-xs font-normal md:block mt-2">2001</span>
                      <span className="text-xs font-normal md:block mt-2">2.74 MB</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative">
                <a
                  className="flex md:items-center md:flex-col relative w-full"
                  href="#"
                >
                  <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center ">
                    <div className="flex items-center h-full">
                      <span className="inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full">
                        <span className="block box-border w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">

                          <img alt="" aria-hidden="true" src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                            className="block max-w-full w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0" />

                        </span>
                        <img
                          alt="Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse"
                          src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                          decoding="async"
                          data-nimg="intrinsic"
                          className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 absolute inset-0 box-border p-0 border-0 mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                          srcSet="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-1 md:px-3 py-2 md:py-4 bg-white dark:bg-slate-800 rounded-b-xl">
                    <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
                      <h3 className="text-sm sm:text-[12px] md:text-sm text-left text-palette-mute ">
                        Living in the Light: A guide to personal transformation
                      </h3>
                      <span className="text-xs font-normal md:block mt-4">258 Pages</span>
                      <span className="text-xs font-normal md:block mt-2">2001</span>
                      <span className="text-xs font-normal md:block mt-2">2.74 MB</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative">
                <a
                  className="flex md:items-center md:flex-col relative w-full"
                  href="#"
                >
                  <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center ">
                    <div className="flex items-center h-full">
                      <span className="inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full">
                        <span className="block box-border w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">

                          <img alt="" aria-hidden="true" src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                            className="block max-w-full w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0" />

                        </span>
                        <img
                          alt="Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse"
                          src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                          decoding="async"
                          data-nimg="intrinsic"
                          className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 absolute inset-0 box-border p-0 border-0 mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                          srcSet="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-1 md:px-3 py-2 md:py-4 bg-white dark:bg-slate-800 rounded-b-xl">
                    <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
                      <h3 className="text-sm sm:text-[12px] md:text-sm text-left text-palette-mute ">
                        Living in the Light: A guide to personal transformation
                      </h3>
                      <span className="text-xs font-normal md:block mt-4">258 Pages</span>
                      <span className="text-xs font-normal md:block mt-2">2001</span>
                      <span className="text-xs font-normal md:block mt-2">2.74 MB</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative">
                <a
                  className="flex md:items-center md:flex-col relative w-full"
                  href="#"
                >
                  <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center ">
                    <div className="flex items-center h-full">
                      <span className="inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full">
                        <span className="block box-border w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">

                          <img alt="" aria-hidden="true" src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                            className="block max-w-full w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0" />

                        </span>
                        <img
                          alt="Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse"
                          src="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                          decoding="async"
                          data-nimg="intrinsic"
                          className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 absolute inset-0 box-border p-0 border-0 mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                          srcSet="https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-1 md:px-3 py-2 md:py-4 bg-white dark:bg-slate-800 rounded-b-xl">
                    <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
                      <h3 className="text-sm sm:text-[12px] md:text-sm text-left text-palette-mute ">
                        Living in the Light: A guide to personal transformation
                      </h3>
                      <span className="text-xs font-normal md:block mt-4">258 Pages</span>
                      <span className="text-xs font-normal md:block mt-2">2001</span>
                      <span className="text-xs font-normal md:block mt-2">2.74 MB</span>
                    </div>
                  </div>
                </a>
              </div>
            
            </div>
            <div className="text-center">
              <a
                className="inline-block py-3 px-8 md:px-12 mt-4 text-sm md:text-base bg-palette-primary text-palette-side rounded-xl shadow-lg"
                href="/newestProducts"
              >
                See All New Products
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default BookList14