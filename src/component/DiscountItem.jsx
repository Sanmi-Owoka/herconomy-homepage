import React from "react";
import "../assets/css/discountItem.css"

const DiscountItem = ({ src, tag, title, subtitle }) => {
  return (
    <div className="discount-item">
      <div className="img-wrapper">
        <img src={src} alt="" />
        <div className="tag">{tag}</div>
      </div>
      <div className="discount-content">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default DiscountItem;
