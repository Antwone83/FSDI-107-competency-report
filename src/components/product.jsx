import { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import "../services/dataService.js";

const Product = (props) => {

  const handleQuantityChange = (val) => {
    console.log("QP chnaged", val);
  };
  return (
    <div className="product">
      <label className="prod-category">{props.info.category}</label>
      <img src={"/images/" + props.info.image} alt="Dunks" />
      <h2>{props.info.title}</h2>

      <div>
        <label className="total">$Total</label>
        <label className="price">${props.info.price.toFixed(2)}</label>
      </div>

      <div>
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
        <button className="btn btn-sm btn-info">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
