import ReactPhotoGrid from "react-photo-grid";

const Grid = () => {
  var imageData = [
    "http://via.placeholder.com/400x400/",
    "http://via.placeholder.com/500x700/",
    "http://via.placeholder.com/600x500/",
    "http://via.placeholder.com/600x800/",
  ];

  return (
    // whereever you use ReactPhotoGrid
    <ReactPhotoGrid onImageClick={this.handleImageClick} data={imageData} />
  );
};

export default Grid;
