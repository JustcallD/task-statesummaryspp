import React from "react";
import "./Table.css";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <h2>Table</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Population</th>
              <th>GDP</th>
              <th>Area</th>
              <th>Literacy Rate</th>
              <th>Poverty Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cityData, index) => (
              <tr key={index}>
                <td>{cityData.city}</td>
                <td>{cityData.temperature}</td>
                <td>{cityData.population}</td>
                <td>{cityData.GDP}</td>
                <td>{cityData.area}</td>
                <td>{cityData.literacyRate}</td>
                <td>{cityData.povertyRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

