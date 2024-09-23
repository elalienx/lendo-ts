// Node modules
import PropTypes from "prop-types";

// Project files
import "./empty-state.css";

EmptyState.propTypes = {
  item: PropTypes.exact({
    /** A clear title explaining what happened. */
    title: PropTypes.string.isRequired,

    /** Add some humor to further explain the situation. */
    text: PropTypes.string.isRequired,

    /** An image related to the text above. */
    image: PropTypes.string.isRequired,

    /** Description of the image for accessibility. It's optional as it won't break the component, but please add it. */
    alt: PropTypes.string,
  }),
};

export default function EmptyState({ item }) {
  const { title, text, image, alt = "" } = item;

  return (
    <div className="empty-state">
      <picture>
        <source srcSet={`${image}-desktop-2x.avif 2x`} width="368" height="315" media="(min-width: 750px)" />
        <source srcSet={`${image}.avif 2x`} width="234" height="200" />
        <img alt={alt} className="image" src={`${image}-desktop.avif`} width="368" height="315" fetchpriority="high" />
      </picture>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
