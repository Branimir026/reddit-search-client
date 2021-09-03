import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Result = ({ data }) => {
  return (
    <Col xs={12} sm={4}>
      <Card>
        <Card.Img
          variant="top"
          src={
            data?.preview?.images[0]?.source?.url ||
            "https://techlife.news/wp-content/uploads/2020/09/reddit.jpg"
          }
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.selftext.slice(0, 500)}</Card.Text>
          <Button href={data.url} target="_blank" variant="primary">
            Read more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Result;
