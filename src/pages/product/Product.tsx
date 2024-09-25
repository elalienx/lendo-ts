// Node modules
import { useParams } from "react-router-dom";

// Project files
import EmptyState from "components/empty-state/EmptyState";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import type Product from "types/Product";
import EmptyStateTexts from "./empty-state-texts.json";
import "./product.css";
import PriceTag from "components/price-tag/PriceTag";
import Button from "components/button/Button";
import InputRadioColor from "components/input-radio-color/InputRadioColor";
import { useState } from "react";
import extractVariant from "scripts/extractVariant";
import InputRadio from "components/input-radio/InputRadio";

interface Props {
  data: Product[];
}

export default function Product({ data }: Props) {
  // Global state
  const { id } = useParams();

  // Local state
  const [colorIndex, setColorIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(-1); // unset by default

  const product: Product | undefined = data.find((item) => item.id === Number(id));

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.does_not_exist} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.out_of_stock} />;

  // Properties
  const colors = product.options.flatMap((item) => item.color);

  // Derived state
  const productOption = product.options[colorIndex];
  const variants = extractVariant(productOption, ["color", "quantity"]);
  const extraDetails = `By ${product.brand} | Weight ${product.weight} kg`;
  const total = Number(product.price);
  const cssUnitsLeft = productOption.quantity === 0 ? "no-units-left" : "";
  const buttonIsEnabled = false;

  return (
    <div id="product" className="page">
      <ImageThumbnail image={""} alt={""} />
      <div className="content-group">
        <h1>{product.name}</h1>
        <small>{extraDetails}</small>
        <InputRadioColor
          id={"color"}
          label={"Choose a color:"}
          state={[colorIndex, setColorIndex]}
          options={colors}
        />
        <InputRadio
          id={"variant"}
          label={"Choose a variant:"}
          state={[variantIndex, setVariantIndex]}
          options={variants}
        />
        <small className={cssUnitsLeft}>{productOption.quantity} units left</small>{" "}
        <PriceTag price={total} />
        <Button label={"Add to cart"} icon={"bag-shopping"} disabled={!buttonIsEnabled} />
      </div>
    </div>
  );
}
