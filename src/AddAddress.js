import React from "react";
import "./AddAddress.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function AddAddress() {
  return (
    <div className="addAddress">
      <AddCircleIcon />
      <h2 className="addAddress__title">Add Address</h2>
    </div>
  );
}

export default AddAddress;
