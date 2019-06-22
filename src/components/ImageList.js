import React from "react";
import Image from "./Image";
import "../styles/ImageList.css";

// TODO: Provide access to images and on click handler
const ImageList = ({ images }) => (
  <div className="ImageList">
    {images.map((image, index) => (
      <Image key={index} image={image} />
    ))}
  </div>
);

export default ImageList;
