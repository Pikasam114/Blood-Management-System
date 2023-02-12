import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import Button from 'react-bootstrap/Button';

function SearchBlood() {
  return (
    <>
      <div className="container">
        <Helmet>
          <style>{"body { background-color: #34495E; }"}</style>
        </Helmet>

        <h2 style={{color:'orange'}} class='text-center'>SEARCH BLOOD</h2>
        <div className="d-flex flex-column align-items-center">
          <Form.Select>
            <option>Blood Type</option>
          </Form.Select>
          <Button variant="success">Search</Button>{' '}
        </div>
        </div>
    </>
  );
}

export default SearchBlood;
