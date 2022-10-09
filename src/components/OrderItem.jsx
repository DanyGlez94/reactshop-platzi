import React from "react";
import "@styles/OrderItem.scss";
import close from "@icons/icon_close.png";

const OrderItem = ({ product }) => {
  const { images, title, price } = product;
  return (
    <div className="OrderItem">
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={close} alt="close" />
    </div>
  );
};

export default OrderItem;
