import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function SearchForm() {
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);

    e.preventDefault();
  };

  const handleSubmit = (e) => {
    const check = document.querySelector('input[type="radio"]:checked').value;
    console.log(check);
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="searchInput">
          <Form.Label>Search Reddit</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={searchInputHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Radios</Form.Label>
          <Form.Check
            inline
            type="radio"
            label="Relevant"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            value="Relevant"
            className="checkbox"
          />
          <Form.Check
            inline
            type="radio"
            label="New"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            value="New"
            className="checkbox"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SearchForm;
