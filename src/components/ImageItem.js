function ImageItem({ image }) {
  console.log(image);
  return <div className="imageListimg">
    <img src={image.urls.small} alt={image.alt_description}></img>
  </div>;
}

export default ImageItem;
