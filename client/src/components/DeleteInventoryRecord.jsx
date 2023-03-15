import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";


export default function DeleteInventoryRecord() {
  const [bloodTypes, setBloodTypes] = useState([])
  const [bloodBanks, setBloodBanks] = useState([])
  const [selectedBloodType, setSelectedBloodType] = useState("")
  const [selectedBloodBank, setSelectedBloodBank] = useState("")

  //get all blood types & all blood banks for dropdowns
  useEffect(() => {
    fetch("http://localhost:8080/api/blood")
      .then((res) => res.json())
      .then((data) => setBloodTypes(data))
    fetch("http://localhost:8080/api/blood-bank")
      .then((res) => res.json())
      .then((data) => setBloodBanks(data))
  }, [])

  const bloodTypeOptions = bloodTypes.map((blood) => (
    <option key={blood.blood_id}>{blood.type}</option>
  ))
  const bloodBankOptions = bloodBanks.map((bloodBank) => (
    <option key={bloodBank.bank_id}> {bloodBank.name}</option>
  ))

  // submitting the update form
  function handleUpdate(event) {
    event.preventDefault()
    let deleteBloodBank = selectedBloodBank
      ? selectedBloodBank
      : bloodBanks[0].name
    let deleteBloodType = selectedBloodType
      ? selectedBloodType
      : bloodTypes[0].type

    fetch(`http://localhost:8080/api/inventory`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bloodBank: deleteBloodBank,
        bloodType: deleteBloodType,
      }),
    }).then((res) => console.log(res))
    console.log(deleteBloodType, deleteBloodBank)
    console.log("deleted!!!")
  }
  function handleBloodTypeSelect(event) {
    setSelectedBloodType(event.target.value)
  }
  function handleBloodBankSelect(event) {
    setSelectedBloodBank(event.target.value)
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Brand href="/">Search</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="create">Create </Nav.Link>
            <Nav.Link href="update">Update </Nav.Link>
            <Nav.Link href="delete">Delete </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Helmet>
          <style>{"body { background-color: #036491; }"}</style>
      </Helmet>
      <h1 style={{color:"black", fontFamily:'sans-serif'}} className="text-center">Delete An Entry</h1>
      <Form
        className="d-flex gap-2 justify-content-between"
        onSubmit={handleUpdate}
      >
        <div className="d-flex flex-column w-50">
          <FormLabel>Blood type:</FormLabel>
          <Form.Select onChange={handleBloodTypeSelect}>
            {bloodTypeOptions}
          </Form.Select>
        </div>
        <div className="d-flex flex-column w-50">
          <FormLabel>Hospital:</FormLabel>
          <Form.Select onChange={handleBloodBankSelect}>
            {bloodBankOptions}
          </Form.Select>
        </div>
        <Button variant="danger" onClick={handleUpdate} className="my-2">
          Delete
        </Button>
      </Form>
    </div>
  )
}
