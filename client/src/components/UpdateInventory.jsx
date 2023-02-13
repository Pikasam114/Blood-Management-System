import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/esm/FormLabel";

export default function UpdateInventory() {
  const [bloodTypes, setBloodTypes] = useState([]);
  const [bloodBanks, setBloodBanks] = useState([]);
  const [selectedType, setSelectedType] = useState(bloodTypes[0]);

  //get all blood types & all blood banks for dropdowns
  useEffect(() => {
    fetch("http://localhost:8080/api/blood")
      .then((res) => res.json())
      .then((data) => setBloodTypes(data));
    fetch("http://localhost:8080/api/blood-bank")
      .then((res) => res.json())
      .then((data) => setBloodBanks(data));
  }, []);

  const bloodTypeOptions = bloodTypes.map((blood) => (
    <option key={blood.blood_id}>{blood.type}</option>
  ));
  const bloodBankOptions = bloodBanks.map((bloodBank) => (
    <option key={bloodBank.bank_id}> {bloodBank.name}</option>
  ));

  function handleUpdate() {
    console.log("updated!!!");
  }
  function handleTypeSelect(event) {
    setSelectedType(event.target.value);
  }

  return (
    <div>
      <Link to="/">HOME</Link>
      <Form className="d-flex gap-2 justify-content-between">
        <div className="d-flex flex-column w-50">
          <FormLabel>Blood type:</FormLabel>
          <Form.Select onChange={handleTypeSelect}>
            {bloodTypeOptions}
          </Form.Select>
        </div>
        <div className="d-flex flex-column w-50">
          <FormLabel>Hospital:</FormLabel>
          <Form.Select onChange={handleTypeSelect}>
            {bloodBankOptions}
          </Form.Select>
        </div>
        <div className="d-flex flex-column">
          <FormLabel htmlFor="qty">Quantity:</FormLabel>
          <input type={"number"} id="qty" name="qty" />
        </div>
        <Button variant="success" onClick={handleUpdate} className="my-2">
          Save
        </Button>{" "}
      </Form>
    </div>
  );
}
