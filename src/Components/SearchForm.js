import { React } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function SearchForm({ input, inputHandler, submitHandler }) {
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="searchInput">
          <Form.Label>Search Reddit</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Search..."
            value={input}
            onChange={inputHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sort By:</Form.Label>
          <Form.Check
            inline
            defaultChecked
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
