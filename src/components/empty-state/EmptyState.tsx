// Project files
import "./empty-state.css";

interface Props {
  item: {
    /** A clear title explaining what happened. */
    title: string;

    /** Add some humor to further explain the situation. */
    text: string;

    /** An image related to the text above. */
    image: string;

    /** Description of the image for accessibility. It's optional as it won't break the component, but please add it. */
    alt: string;
  };
}

export default function EmptyState({ item }: Props) {
  const { title, text, image, alt = "" } = item;

  return (
    <div className="empty-state">
      <picture>
        <source
          srcSet={`${image}-desktop-2x.avif 2x`}
          width="368"
          height="315"
          media="(min-width: 750px)"
        />
        <source srcSet={`${image}.avif 2x`} width="234" height="200" />
        <img
          alt={alt}
          className="image"
          src={`${image}-desktop.avif`}
          width="368"
          height="315"
          // @ts-ignore
          // fetchpriority spelled in lowercase is the correct way to write this atribute. Source: https://github.com/facebook/react/issues/25682
          fetchpriority="high"
        />
      </picture>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
