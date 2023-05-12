import React from 'react'
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const BookList15 = () => {
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
        <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} onClick={() => handleClick(image)}>
          <img src={image.thumbnailUrl} alt={image.title} className="w-full h-auto" />
        </div>
      ))}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative">
            <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-auto" />
            <button className="absolute top-0 right-0 m-4" onClick={handleClose}>
              <AiOutlineClose size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookList15