
import { MdImage } from "react-icons/md"; 
import { useState } from "react";
const ImageSelector = () => {
    const [image, setImage] = useState(null); // To hold the selected image
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result); // Set the image URL once it's loaded
          };
          reader.readAsDataURL(file); // Read the image as a data URL
        }
      };
    
  return (
    <div className="mb-4 ">
    <div
      id="groupImage"
      className="relative block w-full px-4 py-10 border rounded-tl-lg rounded-tr-lg shadow-sm bg-zinc-500"
    >
      {/* Display selected image or icon */}
      {image ? (
        <img
          src={image}
          alt="Group"
          className="object-cover w-full h-full absolute top-0 left-0"
        />
      ) : (
        <MdImage className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      )}

      {/* File Input for Image Selection */}
      <input 
        type="file" 
        accept="image/*"
        onChange={handleImageChange} 
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
      />

      {/* Hover Scaling Effect */}
      <div className="absolute inset-0 transition-transform transform hover:scale-105"></div>
    </div>
  </div>
  );
};

export default ImageSelector;
