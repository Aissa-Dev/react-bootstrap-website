import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";

import ReactMapGL from "react-map-gl";

function Contact() {
  const [viewport, setViewport] = React.useState({
    latitude: 43.45457032320553,
    longitude: -80.54692927667054,
    zoom: 15
  });

  //   const mapContainer = useRef(null);
  //   const map = useRef(null);
  //   mapboxgl.accessToken =
  //     "pk.eyJ1Ijoia2luZzc1MDAwIiwiYSI6ImNrdXp5dzU5eDJ1OTQydXE5enFkYjRod3MifQ.VIArdrDQcSpmZ3Mtwhnvug";

  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [43.45457032320553, -80.54692927667054]
  //   });

  return (
    <>
      <section className="p-5">
        <Container>
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Adress :</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Phone :</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Email :</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Website :</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Fax :</span>
                </li>
              </ul>
            </div>
            <div className="col-md">
              <div className="h-100 mapContaimer">
                <ReactMapGL
                  id="map"
                  {...viewport}
                  width="100%"
                  height="100%"
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  onViewportChange={(viewport) => setViewport(viewport)}
                  mapboxApiAccessToken="pk.eyJ1Ijoia2luZzc1MDAwIiwiYSI6ImNrdXp5dzU5eDJ1OTQydXE5enFkYjRod3MifQ.VIArdrDQcSpmZ3Mtwhnvug"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <footer className="p-5 bg-dark text-white text-center position-relative">
        <p className="lead">Copyright &copy; 2021 Aissa Dev</p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <i className="bi-arrow-up-circle h1 text-success"></i>
        </a>
      </footer>
    </>
  );
}

export default Contact;
