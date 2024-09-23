// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";

// Properties
const image = "https://retrogametycoon.com/media/images/products/2023/09/P1950333.jpg";
const alt = "A classic console on a white background.";

export default {
  Image: <ImageThumbnail image={image} alt={alt} />,
  NoImage: <ImageThumbnail image="" alt="" />,
};
