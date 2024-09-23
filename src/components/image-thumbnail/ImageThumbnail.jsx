// Node modules
import PropTypes from "prop-types";

// Project files
import Placeholder from "../../assets/images/placeholder.png";
import "./image-thumbnail.css";

ImageThumbnail.propTypes = {
  /** The product image. */
  image: PropTypes.string,

  /** The visual description of the image for screen readers. */
  alt: PropTypes.string,
};

export default function ImageThumbnail({ image = "", alt = "" }) {
  // Properties
  const Source = image === "" ? Placeholder : image;

  return <img className="image-thumbnail" src={Source} alt={alt} />;
}
