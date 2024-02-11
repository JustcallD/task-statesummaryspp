import React from "react";
import { useParams } from "react-router-dom";
import Table from "../components/Table/Table";
import data from "../Data/citiesData.json";
import LineChartGraph from "../components/Charts/LineChartGraph";
import AreaChartGraph from "../components/Charts/AreaChartGraph";
import PieChartGraph from "../components/Charts/PieChartGraph";
import "../Style/Cities.css"; // Importing the CSS file

const Cities = () => {
  let { statename } = useParams();
  const findCityData = (statename) => {
    const stateData = data[statename];
    return stateData || null;
  };
  const cityData = findCityData(statename);
  console.log(cityData);
  return (
    <div className="cities-container">
      <h2 className="state-name">{statename}</h2>
      <div className="charts-container">
        <div className="pieChart">
          <h3>Population Distribution</h3>
          <PieChartGraph data={cityData} />
        </div>
        <div className="chart-box">
  
          <div className="chart">
            <h3>GDP Trends</h3>
            <LineChartGraph data={cityData} />
          </div>
          <div className="chart">
            <h3>Area Comparison</h3>
            <AreaChartGraph data={cityData} />
          </div>
        </div>
      </div>
      <div className="table-container">
        <h3>Data Overview</h3>
        <Table data={cityData} />
      </div>
    </div>
  );
};

export default Cities;
