// Node modules
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Project files
import ImageThumbnail from "../image-thumbnail/ImageThumbnail";
import NotAvailable from "../not-available/NotAvailable";
import PriceTag from "../price-tag/PriceTag";
import Product from "../../propTypes/Product";
import "./item-product.css";

ItemProduct.propTypes = Product;

export default function ItemProduct({ item }) {
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
