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
import QuantityChooser from "./components/QuantityChooser";

interface Props {
  data: Product[];
}

export default function Product({ data }: Props) {
  // Global state
  const { id } = useParams();

  // Local state
  const [colorIndex, setColorIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(-1); // unset by default
  const [quantity, setQuantity] = useState(1);

  const product: Product | undefined = data.find((item) => item.id === Number(id));

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.does_not_exist} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.out_of_stock} />;

  // Properties
  const colors = product.options.flatMap((item) => item.color);

  // Derived state
  // -- 1. variant, 2. quantity, 3. add to cart
  const productOption = product.options[colorIndex];
  const availableQuantity = productOption.quantity;

  // -- variant
  const variants = extractVariant(productOption, ["color", "quantity"]);

  // -- subtitle
  const extraDetails = `By ${product.brand} | Weight ${product.weight} kg`;

  // -- quantity
  const cssUnitsLeft = availableQuantity === 0 ? "no-units-left" : "";

  // -- price tag
  const total = Number(product.price) * quantity;

  // -- add to cart
  const buttonIsEnabled = variantIndex > -1 && availableQuantity > 0;

  // Methods
  function onChangeColor(newColorIndex: number) {
    setColorIndex(newColorIndex);
    setVariantIndex(-1); // resets it to force user to choose a variant
  }

  return (
    <div id="product" className="page">
      <ImageThumbnail image={""} alt={""} />
      <div className="content-group">
        <h1>{product.name}</h1>
        <small>{extraDetails}</small>
        <InputRadioColor
          id={"color"}
          label={"Choose a color:"}
          state={[colorIndex, onChangeColor]}
          options={colors}
        />
        <InputRadio
          id={"variant"}
          label={"Choose a variant:"}
          state={[variantIndex, setVariantIndex]}
          options={variants}
        />
        {availableQuantity > 0 && (
          <QuantityChooser state={[quantity, setQuantity]} availableQuantity={availableQuantity} />
        )}
        <small className={cssUnitsLeft}>{availableQuantity} units left</small>{" "}
        <PriceTag price={total} />
        <Button label={"Add to cart"} icon={"bag-shopping"} disabled={!buttonIsEnabled} />
      </div>
    </div>
  );
}
