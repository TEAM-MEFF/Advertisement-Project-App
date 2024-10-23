import React from "react";
import PRODUCTS from "../constants";

const CartItem = () => {
  return (
    <div>
      <div>
        <img src={product.images} alt="productImage" />
        <div>
          <p>{title}</p>
          <p> GH₵{current_price}</p>.00
          <p>Quanhjkljl;jtity</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
