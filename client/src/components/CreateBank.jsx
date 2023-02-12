import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function CreateBank() {
  return (
    <Form>
      Blood Bank Details:
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Enter Hospital Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicContact">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="Contact" placeholder="Enter Contact Details" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Address</Form.Label>
        <Form.Control type="Address" placeholder="Enter Hospital Address" />
      </Form.Group>

      {/* blood type and details */}
      Blood Details:
      <Form.Group className="mb-3" controlId="formBlood">
        <Form.Label>Blood Type</Form.Label>
        {/* ya euta blood type ko dropdown list */}
        <Form.Control type="Blood" placeholder="Enter Blood Type" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formQuantity">
        <Form.Check type="number" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateBank;
