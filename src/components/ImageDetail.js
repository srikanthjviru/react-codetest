import React from "react";
import Image from "./Image";
import "../styles/ImageDetail.css";

// TODO: Provide access to the selectedImage
const ImageDetail = ({ selectedImage }) => (
  <div className="ImageDetail">
    {selectedImage ? (
      <>
        <h1>{selectedImage.author}</h1>
        <Image image={selectedImage} />

        {/* TODO: Clear the selected image */}
        <button>Clear</button>
      </>
    ) : (
      <div>No image selected</div>
    )}
  </div>
);

export default ImageDetail;
