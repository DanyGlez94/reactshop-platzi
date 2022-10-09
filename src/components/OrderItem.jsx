import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import "@styles/OrderItem.scss";
import close from "@icons/icon_close.png";

const OrderItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);
  const { images, title, price } = product;

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={close} alt="close" onClick={() => handleRemove(indexValue)} />
    </div>
  );
};

export default OrderItem;
