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
import Notification from "components/toast-notification/ToastNotification";
import PriceTotal from "components/price-total/PriceTotal";
import QuantityChooser from "components/quantity-chooser/QuantityChooser";
import getVariant from "scripts/getVariant";
import getUnitsInCart from "scripts/getUnitsInCart";
import type CartItem from "types/CartItem";
import type Product from "types/Product";
import EmptyStateTexts from "./empty-state-texts.json";
import "./product.css";
import cartStore from "state/cartStore";

interface Props {
  data: Product[];
}

export default function Product({ data }: Props) {
  // Global state
  const navigate = useNavigate();
  const { id } = useParams();
  const cart = cartStore((state) => state.cart);
  const addItem = cartStore((state) => state.addItem);

  // Local state
  const [colorIndex, setColorIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0); // unset by default
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const productId = Number(id);
  const product: Product | undefined = data.find((item) => item.id === Number(id));

  // Safeguards
  if (!product) return <EmptyState item={EmptyStateTexts.does_not_exist} />;
  if (!product.available) return <EmptyState item={EmptyStateTexts.out_of_stock} />;

  // Properties
  const productOption = product.options[colorIndex];
  const colors = product.options.flatMap((item) => item.color);
  const variants = getVariant(productOption);
  const unitsInCart = getUnitsInCart(cart, { productId, colorIndex, variantIndex });
  const unitsLeft = productOption.quantity - unitsInCart;
  const totalPrice = Number(product.price) * selectedQuantity;
  const buttonIsEnabled = unitsLeft > 0;

  // Methods
  function onChangeOption(newColorIndex: number) {
    setColorIndex(newColorIndex);
    setVariantIndex(0);
    setSelectedQuantity(1);
  }

  function addToCart() {
    const newItem: CartItem = { productId, colorIndex, variantIndex, selectedQuantity };

    addItem(newItem);
    toast(<Notification title={"Product added to cart"} icon={"bag-shopping"} color={"green"} />);
    navigate("/");
  }

  return (
    <div id="product" className="page">
      <ImageThumbnail image={""} alt={""} />
      <header className="header">
        <h1>{product.name}</h1>
        <small>{`By ${product.brand} | Weight ${product.weight} kg`}</small>
      </header>
      <div className="content-group">
        {/* Colors */}
        <section className="color">
          <h2>Color:</h2>
          <InputRadioColor id={"color"} state={[colorIndex, onChangeOption]} options={colors} />
        </section>

        {/* Variants */}
        <section className="variant">
          <h2>Variant:</h2>
          <InputRadio id={"variant"} state={[variantIndex, setVariantIndex]} options={variants} />
        </section>

        {/* Quantity  */}
        <section className="quantity-chooser">
          <h2>Quantity:</h2>
          <QuantityChooser state={[selectedQuantity, setSelectedQuantity]} unitsLeft={unitsLeft} />
        </section>

        {/* Price */}
        <PriceTotal label={"Price"} price={totalPrice} />

        {/* Button add */}
        <Button icon={"bag-shopping"} onClick={addToCart} disabled={!buttonIsEnabled}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
