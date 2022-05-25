import React from "react";
import "./Card2.css";

const Card2 = ({ data, address }) => {
  if (data === null) {
    return <h1>Click Button</h1>;
  }
  if (data?.name === "") {
    return <h1>Please Generate your Health Card</h1>;
  }
  return (
    <div class="card-wrapper">
      <div class="card-header">
        <h1>Decentralized Health Card</h1>
      </div>
      <div class="card-content">
        <h2>ID: {address}</h2>
        <div class="sub-content">
          <div class="sub-1">
            <h2>Name: {data.name}</h2>

            <h3>Age: {data.age}</h3>
            <h3>Phone: {data.phone}</h3>
            <h3>Email: {data.email}</h3>
            <h3>Blood Group: {data.bloodgrp}</h3>
            <h3>Address: {data.add}</h3>
          </div>
          <div class="sub-2">
            <img
              src="https://media.istockphoto.com/vectors/code-illustration-vector-id828088276?k=20&m=828088276&s=612x612&w=0&h=JnX2DFXVGyTe-wDXdXhTG9p7yPmbd-jO3qWRfCQnHgE="
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
