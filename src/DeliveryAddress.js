import React from "react";
import "./DeliveryAddress.css";
import EditIcon from "@material-ui/icons/Edit";

function DeliveryAddress({
  name,
  streetAddress,
  city,
  pincode,
  phoneNumber,
  active,
}) {
  return (
    <div className="deliveryAddress">
      <div className={`deliveryAddress__container ${active && "active"}`}>
        <div className="deliveryAddress__containerLeft">
          <strong className="deliveryAddress__name">{name}</strong>
          <p>{streetAddress}</p>
          <p>
            {city} , {pincode}
          </p>
          <p>Phone: {phoneNumber}</p>
        </div>
        <div className="deliveryAddress__containerRight">
          <EditIcon />
          <p className="deliveryAddress__edit">Edit</p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;
