// Project files
import ImageThumbnail from "../../components/image-thumbnail/ImageThumbnail";

// Properties
const ps2Image = `https://sportshub.cbsistatic.com/i/2022/12/24/9f5819d2-1578-46b1-ad8f-85302f99e190/ps2-console.png`;
const ps2Alt = `A now classic console on a blue background.`;

export default {
  Image: <ImageThumbnail image={ps2Image} alt={ps2Alt} />,
  NoImage: <ImageThumbnail image="" alt="" />,
};
