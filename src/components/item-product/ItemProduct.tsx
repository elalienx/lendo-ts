// Node modules
import { Link } from "react-router-dom";

// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import NotAvailable from "components/not-available/NotAvailable";
import PriceTag from "components/price-tag/PriceTag";
import type Product from "types/Product";
import "./item-product.css";

interface Props {
  item: Product;
}

export default function ItemProduct({ item }: Props) {
  const { id, name, brand, available, price } = item;

  // Properties
  const link = available ? `product/${id}` : "#";
  const parsedPrice = Number(price);

  return (
    <Link to={link} className={`item-product ${!available && "dissabled"}`}>
      {/* Left mobile, top desktop */}
      <ImageThumbnail />

      {/* Middle */}
      <div className="text-group">
        <p className="name">{name}</p>
        <small className="brand">{brand}</small>
        {!available && <NotAvailable />}
      </div>

      {/* Right mobile, bottom desktop */}
      <PriceTag price={parsedPrice} />
    </Link>
  );
}
