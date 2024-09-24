// Project files
import Placeholder from "assets/images/placeholder.png";
import "./image-thumbnail.css";

interface Props {
  /** The product image. */
  image: string;

  /** The visual description of the image for screen readers. */
  alt: string;
}

export default function ImageThumbnail({ image = "", alt = "" }: Props) {
  // Properties
  const Source = image === "" ? Placeholder : image;

  return <img className="image-thumbnail" src={Source} alt={alt} />;
}
