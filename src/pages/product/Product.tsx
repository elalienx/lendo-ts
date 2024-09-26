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
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const product: Product | undefined = data.find((item) => item.id === Number(id));

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.does_not_exist} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.out_of_stock} />;

  // Properties
  const colors = product.options.flatMap((item) => item.color);
  const selectedOption = product.options[colorIndex];
  const unitsLeft = selectedOption.quantity;
  const variants = extractVariant(selectedOption, ["color", "quantity"]);
  const extraDetails = `By ${product.brand} | Weight ${product.weight} kg`;
  const total = Number(product.price) * selectedQuantity;
  const buttonIsEnabled = variantIndex > -1 && unitsLeft > 0;

  // Methods
  function onChangeOption(newColorIndex: number) {
    setColorIndex(newColorIndex);
    setVariantIndex(-1);
    setSelectedQuantity(1);
  }

  function addToCart() {
    const product_id = Number(id);
    const newItem: CartItem = { product_id, colorIndex, variantIndex, selectedQuantity };
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
        <section className="color">
          <h3>Color:</h3>
          <InputRadioColor id={"color"} state={[colorIndex, onChangeOption]} options={colors} />
        </section>
        <section className="variant">
          <h3>Variant:</h3>
          <InputRadio id={"variant"} state={[variantIndex, setVariantIndex]} options={variants} />
        </section>
        <section className="quantity-chooser">
          <h3>Quantity:</h3>
          <QuantityChooser state={[selectedQuantity, setSelectedQuantity]} unitsLeft={unitsLeft} />
        </section>
        <PriceTag price={total} />
        <Button
          label="Add to cart"
          icon={"bag-shopping"}
          onClick={addToCart}
          disabled={!buttonIsEnabled}
        ></Button>
      </div>
    </div>
  );
}
