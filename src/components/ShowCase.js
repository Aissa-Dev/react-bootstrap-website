import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import cover from "../img/showcase.svg";

function ShowCase() {
  return (
    <>
      <section className="bg-dark text-light p-5 pb-lg-0 text-center text-sm-start ">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span className="text-warning"> web Developer</span>
              </h1>
              <p className="lead my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
                porro enim. Ex quibusdam reiciendis commodi fugiat quidem
                dolorum accusamus!
              </p>
              <Button variant="primary" size="lg">
                Start Enrolement
              </Button>
            </div>
            <img
              className="imgtest img-fluid w-50 d-none d-sm-block"
              src={cover}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-primary text-light p-5 ">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center w-100 mb-3 mb-md-0">
              <h3>Sign Up Newslettes</h3>
            </div>
            <InputGroup className="news-input">
              <FormControl placeholder="Type youe email" />
              <Button variant="dark" id="button-addon2" size="lg">
                Subscribe
              </Button>
            </InputGroup>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShowCase;
