import React from "react";
import { Button } from "react-bootstrap";
import img from "../img/how1.svg";
import img2 from "../img/how2.svg";
function How() {
  return (
    <>
      <section className="p-5" id="2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={img} className="img-fluid" alt="image" />
            </div>
            <div className="col-md p-5">
              <h1>Planing</h1>

              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia ullam in dignissimos veniam fugit obcaecati fugiat
                laboriosam voluptatibus, itaque, enim nesciunt. Saepe laudantium
                asperiores quo rerum quis, ullam beatae earum!
              </p>
              <Button variant="dark">
                {" "}
                <i className="bi-chevron-right"></i> See More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h1>Services</h1>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia ullam in dignissimos veniam fugit obcaecati fugiat
                laboriosam voluptatibus, itaque, enim nesciunt. Saepe laudantium
                asperiores quo rerum quis, ullam beatae earum!
              </p>
              <Button variant="light">
                {" "}
                <i className="bi-chevron-right"></i> See More
              </Button>
            </div>
            <div className="col-md">
              <img src={img2} className="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default How;
