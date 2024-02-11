
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PieChartGraph = ({ data }) => {
  console.log("data", data);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF5733"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "#333",
            padding: "5px",
            border: "1px solid #ccc",
          }}
        >
          <p>{data.city}</p>
          {data.GDP && <p>GDP: {data.GDP}</p>}
          <p>Population: {data.population}</p>
        </div>
      );
    }
    return null;
  };

  return (
    
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="population"
            nameKey="city"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data &&
              data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
  
  );
};

export default PieChartGraph;
