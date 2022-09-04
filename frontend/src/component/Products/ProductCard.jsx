import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      <Link className="ProductCard" to={`/product/${product._id}`}>
        <img
          src={product.images[0].url}
          alt={product.name}
          className="ProductImg"
        />
        <p className="productName">{product.name}</p>
        <div>
          <Rating {...options} />
          <span>({product.numOfReviews} Reviews)</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="offerPriceBox">
            <h1
              className="discountPrice"
              style={{
                fontSize: ".9vmax",
                float: "right",
                marginLeft: "2px",
                opacity: "1",
              }}
            >
              {product.offerPrice > 0 ? `${product.offerPrice}%` : ""}
            </h1>
            <span className="p__Price">{`$${product.price}.00`}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
