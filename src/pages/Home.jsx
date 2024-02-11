
import React from "react";
import TreeMapChart from "../components/Charts/TreeMapChart";
import stateData from "../Data/stateData.json";
import "../Style/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <TreeMapChart stateData={stateData} />
    </div>
  );
};

export default Home;