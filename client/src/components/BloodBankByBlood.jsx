import React from "react";

export default function BloodBankByBlood(props) {
  const data = props.details;
  const cards = data.map((eachData) => (
    <div key={eachData.bank_id} className="text-light border border-2 p-4">
      Blood Bank: {eachData.name}
      Quantity: {eachData.qty}
      Address: {eachData.address} Contact: {eachData.contact}
    </div>
  ));
  return (
    <div>
      Results for : {data[0].type}:
      <br />
      {cards}
    </div>
  );
}
