import React from "react";
import { useNavigate } from "react-router-dom";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";
import "../../Style/Home.css";

const TreeMapChart = ({ stateData }) => {
  const Navigate = useNavigate();
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{data.name}</p>
          <p>GDP: {data.GDP} billion USD</p>
          <p>Population: {data.population}</p>
        </div>
      );
    }
    return null;
  };

  const colors = [
    "#FF5733",
    "#FF9800",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0088FE",
  ];

  const handleNavigate = (state) => {
    Navigate(`/state/${state.name}`);
  };

  return (
    <ResponsiveContainer width="90%" height="80%">
      <Treemap
        data={stateData}
        dataKey="temperature"
        aspectRatio={5 / 3}
        isAnimationActive={false}
        className="tree-map"
        fill={(entry) => {
          const temperature = entry.value.temperature;
          const colorIndex = Math.min(4, Math.floor((temperature - 20) / 10));
          return colors[colorIndex];
        }}
        onClick={(entry) => handleNavigate(entry)}
      >
        {stateData.map((entry, index) => (
          <Tooltip key={index} content={<CustomTooltip />} />
        ))}
      </Treemap>
    </ResponsiveContainer>
  );
};

export default TreeMapChart;
