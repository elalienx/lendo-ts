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
import extractVariant from "scripts/extractVariant";
import { useCart } from "state/CartContext";
import type CartItem from "types/CartItem";
import type Product from "types/Product";
import QuantityChooser from "../../components/quantity-chooser/QuantityChooser";
import EmptyStateTexts from "./empty-state-texts.json";
import "./product.css";
import Header from "./components/Header";
import findItemIndex from "state/actions/findItem";

interface Props {
  data: Product[];
}

export default function Product({ data }: Props) {
  // Global state
  const navigate = useNavigate();
  const { id } = useParams();
  const { cart, dispatch } = useCart();

  // Local state
  const [colorIndex, setColorIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0); // unset by default
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const productId = Number(id);
  const product: Product | undefined = data.find((item) => item.id === productId);

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.does_not_exist} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.out_of_stock} />;

  // Properties
  const colors = product.options.flatMap((item) => item.color);
  const productOption = product.options[colorIndex];
  const productCartIndex = findItemIndex(cart, { productId, colorIndex, variantIndex });
  const unitsAlreadySelected =
    productCartIndex === -1 ? 0 : cart[productCartIndex].selectedQuantity;
  const unitsLeft = productOption.quantity - unitsAlreadySelected;
  const variants = extractVariant(productOption, ["color", "quantity"]);
  const totalPrice = Number(product.price) * selectedQuantity;
  const buttonIsEnabled = variantIndex > -1 && unitsLeft > 0;

  // Methods
  function onChangeOption(newColorIndex: number) {
    setColorIndex(newColorIndex);
    setVariantIndex(0);
    setSelectedQuantity(1);
  }

  function addToCart() {
    const newItem: CartItem = { productId, colorIndex, variantIndex, selectedQuantity };
    const toastStyle = { backgroundColor: "#29c768", color: "white" };

    dispatch({ type: "add-item", payload: newItem });
    toast("Product added to cart", { position: "bottom-right", style: toastStyle });
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
