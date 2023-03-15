import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import BloodBankByBlood from "./BloodBankByBlood";
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function SearchBlood() {
  const [bloodTypes, setBloodTypes] = useState([]);
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // getting data from blood tables
  useEffect(() => {
    fetch("http://localhost:8080/api/blood")
      .then((res) => res.json())
      .then((data) => setBloodTypes(data));
  }, []);

  function handleBloodTypeSelect(event) {
    setSelectedBloodType(event.target.value);
  }

  function handleSearchByBlood() {
    let searchBloodType;
    if (!selectedBloodType) {
      searchBloodType = bloodTypes[0].type;
    } else {
      searchBloodType = selectedBloodType;
    }
    fetch(`http://localhost:8080/api/blood/type/${searchBloodType}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSearchResults(data);
      });
  }

  const bloodTypeOptions = bloodTypes.map((blood) => (
    <option key={blood.blood_id}>{blood.type}</option>
  ));

  return (
    <>
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
      
      
      <div className="container">
        <Helmet>
          <style>{"body { background-color: #036491; }"}</style>
        </Helmet>
        <h1 style={{color:"black"}} className="text-center">
          BLOOD MANAGEMENT SYSTEM 
        </h1>
        <h1 style={{ color: "black" }} className="text-center">
          SEARCH FOR BLOOD
        </h1>
        <div className="d-flex flex-column align-items-center">
          <span className="text-light">Blood Type:</span>
          <Form>
            <Form.Select onChange={handleBloodTypeSelect}>
              {bloodTypeOptions}
            </Form.Select>
            <br/>
            <Button class='btn1' variant="success" onClick={handleSearchByBlood}>
              Search
            </Button>{" "}
          </Form>
        </div>
        
      </div>
      {/* search results component here */}
      {searchResults.length && <BloodBankByBlood details={searchResults} />}
      <br/>
    </>
  );
}

export default SearchBlood;
