import React from "react";
import DiscountItem from "./DiscountItem";
import boardroomLogo from "../assets/images/image 1.png";
import shillzLogo from "../assets/images/image 3.png";
import fitnessLogo from "../assets/images/image 2.png";
import "../assets/css/discount.css";

const Discount = () => {
  return (
    <div className="discount">
      <div className="discount-content">
        <h3>Discounts</h3>
        <div className="list">
          <DiscountItem
            src={boardroomLogo}
            tag="10%"
            title="Boardroom Apartments"
            subtitle="End Date: Dec 2, 2022"
          />
          <DiscountItem
            src={shillzLogo}
            tag="13%"
            title="Shillz Kitchen"
            subtitle="End Date: Oct 13, 2022"
          />
          <DiscountItem
            src={fitnessLogo}
            tag="10%"
            title="Fitness Grip"
            subtitle="End Date: Sep 23, 2022"
          />
        </div>
      </div>
      <div className="bottom">Download our app to view more discounts</div>
    </div>
  );
};

export default Discount;
