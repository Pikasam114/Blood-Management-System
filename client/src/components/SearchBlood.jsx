import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import BloodBankByBlood from "./BloodBankByBlood";

function SearchBlood() {
  const [bloodTypes, setBloodTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(bloodTypes[0]);
  const [searchResults, setSearchResults] = useState([]);

  // getting data from blood tables
  useEffect(() => {
    fetch("http://localhost:8080/api/blood")
      .then((res) => res.json())
      .then((data) => setBloodTypes(data));
  }, []);

  function handleTypeSelect(event) {
    setSelectedType(event.target.value);
  }

  function handleSearchByBlood() {
    let searchType;
    if (!selectedType) {
      searchType = bloodTypes[0].type;
    } else {
      searchType = selectedType;
    }
    fetch(`http://localhost:8080/api/blood/type/${searchType}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data);
      });
  }

  const bloodTypeOptions = bloodTypes.map((blood) => (
    <option key={blood.blood_id}>{blood.type}</option>
  ));

  return (
    <>
      <div className="container">
        <Helmet>
          <style>{"body { background-color: #34495E; }"}</style>
        </Helmet>

        <h2 style={{ color: "orange" }} className="text-center">
          SEARCH BLOOD
        </h2>
        <div className="d-flex flex-column align-items-center">
          <span className="text-light">Blood Type:</span>
          <Form>
            <Form.Select onChange={handleTypeSelect}>
              {bloodTypeOptions}
            </Form.Select>
            <Button variant="success" onClick={handleSearchByBlood}>
              Search
            </Button>{" "}
          </Form>
        </div>
      </div>
      {/* search results component here */}
      {searchResults.length && <BloodBankByBlood details={searchResults} />}
    </>
  );
}

export default SearchBlood;
