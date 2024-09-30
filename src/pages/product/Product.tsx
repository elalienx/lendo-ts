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
import PriceTotal from "components/price-total/PriceTotal";
import QuantityChooser from "components/quantity-chooser/QuantityChooser";
import extractVariant from "scripts/extractVariant";
import { useCart } from "state/CartContext";
import type CartItem from "types/CartItem";
import type Product from "types/Product";
import Header from "./components/Header";
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

  // Safeguards
  const product: Product | undefined = data.find((item) => item.id === Number(id));
  if (!product) return <EmptyState item={EmptyStateTexts.does_not_exist} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.out_of_stock} />;

  // Properties
  const productOption = product.options[colorIndex];
  const colors = product.options.flatMap((item) => item.color);
  const variants = extractVariant(productOption, ["color", "quantity"]);
  const unitsLeft = productOption.quantity;
  const totalPrice = Number(product.price) * selectedQuantity;
  const buttonIsEnabled = variantIndex > -1 && unitsLeft > 0;

  // Methods
  function onChangeOption(newColorIndex: number) {
    const hasVariant = variants.length > 0;
    const variant = hasVariant ? -1 : 0;

    setColorIndex(newColorIndex);
    setVariantIndex(variant);
    setSelectedQuantity(1);
  }

  function addToCart() {
    const product_id = Number(id);
    const newItem: CartItem = { product_id, colorIndex, variantIndex, selectedQuantity };

    dispatch({ type: "add-item", payload: newItem });
    toast("Product added to cart", { className: "toast-good" });
    navigate("/");
  }

  return (
    <div id="product" className="page">
      <ImageThumbnail image={""} alt={""} />
      <Header item={product} />
      <div className="content-group">
        <section className="color">
          <h2>Color:</h2>
          <InputRadioColor id={"color"} state={[colorIndex, onChangeOption]} options={colors} />
        </section>
        <section className="variant">
          <h2>Variant:</h2>
          <InputRadio id={"variant"} state={[variantIndex, setVariantIndex]} options={variants} />
        </section>
        <section className="quantity-chooser">
          <h2>Quantity:</h2>
          <QuantityChooser state={[selectedQuantity, setSelectedQuantity]} unitsLeft={unitsLeft} />
        </section>
        <PriceTotal label={"Price"} price={totalPrice} />
        <Button icon={"bag-shopping"} onClick={addToCart} disabled={!buttonIsEnabled}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
