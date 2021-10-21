import React from "react";
import Boxes from "../components/Boxes";
import Contact from "../components/Contact";
import Flights from "../components/Flights";
import How from "../components/How";
import NavComponent from "../components/NavComponent";
import Questions from "../components/Questions";
import ShowCase from "../components/ShowCase";
import Team from "../components/Team";

function Home() {
  return (
    <div>
      <NavComponent />
      <ShowCase />
      <Boxes />

      <Flights />

      <How />
      <Questions />
      <Team />
      <Contact />
    </div>
  );
}

export default Home;
