import React from "react";
import { Container } from "react-bootstrap";

function Questions() {
  return (
    <section className="p-5" id="3">
      <Container>
        <h1 className="text-center mb-4">Frequent Asked Questions</h1>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne1"
              >
                Pricing ?
              </button>
            </h2>
            <div
              id="flush-collapseOne1"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate totam expedita
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti aliquid est reiciendis itaque commodi sequi
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne2"
              >
                Activities do you like?
              </button>
            </h2>
            <div
              id="flush-collapseOne2"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate totam expedita
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti aliquid est reiciendis itaque commodi sequi
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne3"
              >
                Service important to you?
              </button>
            </h2>
            <div
              id="flush-collapseOne3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate totam expedita
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti aliquid est reiciendis itaque commodi sequi
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne4"
              >
                Family vacation activities ?
              </button>
            </h2>
            <div
              id="flush-collapseOne4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate totam expedita
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti aliquid est reiciendis itaque commodi sequi
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne5"
              >
                Favorite foods?
              </button>
            </h2>
            <div
              id="flush-collapseOne5"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate totam expedita
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti aliquid est reiciendis itaque commodi sequi
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Questions;
