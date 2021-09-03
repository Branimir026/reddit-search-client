import React from "react";

import Result from "./Result.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Results = ({ searchData }) => {
  return (
    <Container>
      <Row>
        {searchData &&
          searchData.map((data, idx) => <Result key={idx} data={data} />)}
      </Row>
    </Container>
  );
};

export default Results;
