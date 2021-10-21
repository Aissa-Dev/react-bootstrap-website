import React from "react";
import { Container } from "react-bootstrap";

function Team() {
  return (
    <section className="p-5 bg-dark">
      <Container>
        <h1 className="text-center text-light">Our Team</h1>
        <h4 className=" text-center text-light mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quos
          illum praesentium.
        </h4>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light py-3">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/9.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Jack Lee</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quia dolorem labore laudan.
                </p>
                <a href="">
                  <i className="bi-twitter text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-facebook text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-instagram text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light py-3">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Ava Dee</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quia dolorem labore laudan.
                </p>
                <a href="">
                  <i className="bi-twitter text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-facebook text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-instagram text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light py-3">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/19.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Birane Slit</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quia dolorem labore laudan.
                </p>
                <a href="">
                  <i className="bi-twitter text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-facebook text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-instagram text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light py-3">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/9.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Sophie Neha</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quia dolorem labore laudan.
                </p>
                <a href="">
                  <i className="bi-twitter text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-facebook text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-instagram text-dark mx-1"></i>
                </a>
                <a href="">
                  <i className="bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Team;
