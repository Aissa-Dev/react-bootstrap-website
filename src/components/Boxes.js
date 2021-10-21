import React from "react";
import { Card, Button } from "react-bootstrap";
function Boxes() {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <Card className="m-auto  text-light bg-dark pb-3 ">
              <Card.Body>
                <div className="h1 mb-3">
                  <i className="bi bi-piggy-bank-fill"></i>
                </div>
                <Card.Title> More savings</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  porro tempora voluptates! Explicabo, facere quod.
                </Card.Text>
                <Button variant="success">See more</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md">
            <Card className="m-auto text-light bg-secondary pb-3 ">
              <Card.Body>
                <div className="h1 mb-3">
                  <i className="bi bi-person-check"></i>
                </div>
                <Card.Title> Travel experts at your service</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  porro tempora voluptates! Explicabo, facere quod.
                </Card.Text>
                <Button variant="dark">See more</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md">
            <Card className="m-auto  text-light bg-dark pb-3 ">
              <Card.Body>
                <div className="h1 mb-3">
                  <i className="bi bi-award-fill"></i>
                </div>
                <Card.Title> Specialized travel needs? Easy.</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  porro tempora voluptates! Explicabo, facere quod.
                </Card.Text>
                <Button variant="success">See more</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boxes;
