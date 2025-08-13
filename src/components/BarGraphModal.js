import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const BarGraphModal = ({ date, onClose }) => {
  const events = useSelector((state) => state.calendar.events);
  const data = events[date]?.map((user) => {
    const key = Object.keys(user)[0];
    return { name: key, value: user[key] };
  });

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Data for {date}</h2>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BarGraphModal;
