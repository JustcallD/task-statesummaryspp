import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartGraph = ({ data }) => {

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="city" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="area" stroke="#8884d8" />
        <Line type="monotone" dataKey="literacyRate" stroke="#8884d8" />{" "}
       
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartGraph;
