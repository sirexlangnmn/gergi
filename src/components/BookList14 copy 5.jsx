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
      title: "Living in the Light: A guide to personal transformation",
      url: "https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg",
      thumbnailUrl: "https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg",
      downloadUrl: "https://drive.google.com/file/d/106IhJFAJfSxgdOdDm6skeA-TWQPp9WDN/view",
    },
    {
      id: 2,
      title: "Give and Take: WHY HELPING OTHERS DRIVES OUR SUCCESS",
      url: "https://cdn.asaha.com/assets/thumbs/653/653f249a58f438ef343c5da5f023203d.jpg",
      thumbnailUrl: "https://cdn.asaha.com/assets/thumbs/653/653f249a58f438ef343c5da5f023203d.jpg",
      downloadUrl: "https://drive.google.com/file/d/106IhJFAJfSxgdOdDm6skeA-TWQPp9WDN/view",
    },
    {
      id: 3,
      title: "Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge and the Teachings",
      url: "https://cdn.asaha.com/assets/thumbs/ed5/ed59854c54d482b0efb0ee9bebbd7a72.jpg",
      thumbnailUrl: "https://cdn.asaha.com/assets/thumbs/ed5/ed59854c54d482b0efb0ee9bebbd7a72.jpg",
      downloadUrl: "https://drive.google.com/file/d/106IhJFAJfSxgdOdDm6skeA-TWQPp9WDN/view",
    },
    {
      id: 4,
      title: "Resisting Happiness: A True Story about Why We Sabotage Ourselves",
      url: "https://cdn.asaha.com/assets/thumbs/bf9/bf93b21ca6f860b22862fb495157ee5e.jpg",
      thumbnailUrl: "https://cdn.asaha.com/assets/thumbs/bf9/bf93b21ca6f860b22862fb495157ee5e.jpg",
      downloadUrl: "https://drive.google.com/file/d/106IhJFAJfSxgdOdDm6skeA-TWQPp9WDN/view",
    },
    {
      id: 5,
      title: "Start Where You Are: A Guide to Compassionate Living",
      url: "https://cdn.asaha.com/assets/thumbs/f0f/f0f41178adda35d162a59e04ae087c74.jpg",
      thumbnailUrl: "https://cdn.asaha.com/assets/thumbs/f0f/f0f41178adda35d162a59e04ae087c74.jpg",
      downloadUrl: "https://drive.google.com/file/d/106IhJFAJfSxgdOdDm6skeA-TWQPp9WDN/view",
    },
    {
      id: 6,
      title: "The Purpose-Driven Life: What on Earth Am I Here For?",
      url: "https://cdn.asaha.com/assets/thumbs/f09/f093c203496024043455817fd7a7ef3f.jpg",
      thumbnailUrl: "https://cdn.asaha.com/assets/thumbs/f09/f093c203496024043455817fd7a7ef3f.jpg",
      downloadUrl: "https://drive.google.com/file/d/106IhJFAJfSxgdOdDm6skeA-TWQPp9WDN/view",
    }
  ]

  return (
    <>
      <section className="relative table w-full py-36 lg:py-44 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-5 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
          <div className="mx-auto my-4 md:my-8 flex flex-col">
            {/* <h2 className="my-4 md:my-8 lg:mt-10 mx-auto text-3xl">Newest Goods</h2> */}
            <div className=" relative z-1">
              <div className="">
                <div className="-mt-32">
                  {/* <div className="flex items-center justify-center ">
                    <div className="flex border-2 border-gray-200 rounded">
                      <input type="text" className="px-4 py-2 w-80" placeholder="Search..." />
                      <button className="px-4 text-white bg-gray-600 border-l ">
                        Search
                      </button>
                    </div>
                  </div> */}
                  <div className="flex items-center justify-center ">
                    <div className="form-control">
                      <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered w-96 bg-white dark:bg-slate-900" />
                        <button className="btn btn-square bg-white dark:bg-slate-900">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 ">
              {images.map((image) => (
                // <div key={image.id} onClick={() => handleClick(image)}>
                //   <img src={image.thumbnailUrl} alt={image.title} className="w-full h-auto" />
                // </div>
                <div key={image.id} className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative">
                  <div
                    className="flex md:items-center md:flex-col relative w-full"
                  >
                    <div className="w-1/2 md:w-full relative py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center ">
                      <div className="flex items-center h-full">
                        <span className="inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative max-w-full">
                          <span className="block box-border w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">

                            <img alt={image.title} aria-hidden="true" src={image.thumbnailUrl} onClick={() => handleClick(image)}
                              className="block max-w-full w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0" />

                          </span>
                          <img
                            alt="Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse"
                            src={image.thumbnailUrl}
                            onClick={() => handleClick(image)}
                            decoding="async"
                            data-nimg="intrinsic"
                            className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 absolute inset-0 box-border p-0 border-0 mx-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                            srcSet={image.thumbnailUrl}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full px-1 md:px-3 py-2 md:py-4 bg-white dark:bg-slate-800 rounded-b-xl">
                      <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
                        <a href={image.downloadUrl} target="_blank" rel="noreferrer" className="">
                          <h3 className="text-sm sm:text-[12px] md:text-sm text-left text-palette-mute ">
                            {image.title}
                          </h3>
                        </a>
                        <span className="text-xs font-normal md:block mt-4">Pages : 258</span>
                        <span className="text-xs font-normal md:block mt-2">Publication Year : 2021</span>
                        <span className="text-xs font-normal md:block mt-2">Author : CodeMaztah</span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
              {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="relative">
                    <img src={selectedImage.url} alt={selectedImage.title} className=" w-80" />
                    <button className="absolute top-0 right-0 m-4" onClick={handleClose}>
                      <AiOutlineClose size={24} />
                    </button>
                  </div>
                </div>
              )}

            </div>
            <div className="text-center mt-20 -mb-32">
              <button className="btn btn-outline btn-primary">See more</button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default BookList14