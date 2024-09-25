// Node modules
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

// Project files
import Button from "components/button/Button";
import EmptyState from "components/empty-state/EmptyState";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import InputRadio from "components/input-radio/InputRadio";
import InputRadioColor from "components/input-radio-color/InputRadioColor";
import PriceTag from "components/price-tag/PriceTag";
import extractVariant from "scripts/extractVariant";
import { useCart } from "state/CartContext";
import type CartItem from "types/CartItem";
import type Product from "types/Product";
import QuantityChooser from "./components/QuantityChooser";
import EmptyStateTexts from "./empty-state-texts.json";
import "./product.css";

interface Props {
  data: Product[];
}

export default function Product({ data }: Props) {
  // Global state
  const navigate = useNavigate();
  const { id } = useParams();
  const { dispatch } = useCart();
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

  // -- 1. quantity, 2. add to cart, 3. quantity choose
  const availableQuantity = productOption.quantity;

  // -- variant
  const variants = extractVariant(productOption, ["color", "quantity"]);

  // -- subtitle
  const extraDetails = `By ${product.brand} | Weight ${product.weight} kg`;

  // -- units left
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

  function addToCart() {
    const newItem: CartItem = {
      product_id: Number(id),
      colorIndex: colorIndex,
      variantIndex: variantIndex,
      selectedQuantity: quantity,
    };
    const toastStyle = { backgroundColor: "#29c768", color: "white" };

    dispatch({ type: "add-item", payload: newItem });
    toast("Product added to cart", { position: "bottom-right", style: toastStyle });
    navigate("/");
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
        <Button
          label={"Add to cart"}
          icon={"bag-shopping"}
          onClick={addToCart}
          disabled={!buttonIsEnabled}
        />
      </div>
    </div>
  );
}
