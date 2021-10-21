import React, { useState } from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import cover from "../img/cover.svg";

function ShowCase() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="bg-dark text-light p-5 pb-lg-0 text-center text-sm-start ">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Travel in style. <span className="green"> Your style.</span>
              </h1>
              <p className="lead my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
                porro enim. Ex quibusdam reiciendis commodi fugiat quidem
                dolorum accusamus!
              </p>
              <Button variant="success" size="lg" onClick={handleShow}>
                Travel Now
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

      <section className="main-color-f text-light p-4 p-md-5 ">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center w-100 mb-3 mb-md-0">
              <h3 className="text-dark">Sign Up for Newsletters</h3>
            </div>
            <InputGroup className="news-input">
              <FormControl placeholder="Type youe email" />
              <Button variant="dark" id="button-addon2" size="lg">
                Subscribe
              </Button>
            </InputGroup>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="lead">
              Fill out this form and we will get back to you
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="first-name" className="col-form-label">
                  First Name :
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="first-name" className="col-form-label">
                  Last Name :
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="first-name" className="col-form-label">
                  Email :
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="first-name" className="col-form-label">
                  Phone :
                </label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
}

export default ShowCase;
