import React from "react";

export default function LogsTable({ data, slots }) {
  let newNum = ++data.length;
  if (data.length !== slots) {
    for (let i = 0; i < slots - data.length; i++) {
      data.push({
        Num: "*",
        Name: "Empty Data",
        Date: "**.**.****",
        Type: "Empty",
        Details: "",
      });
      newNum++;
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Date</th>
          <th>Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, index) => {
          if (el.Type === "Empty") {
            return (
              <tr key={index} className="logs-empty">
                <td>{el.Num}</td>
                <td>{el.Name}</td>
                <td>{el.Date}</td>
                <td>{el.Type}</td>
                <td>{el.Details}</td>
              </tr>
            );
          }
          return (
            <tr key={index}>
              <td>{el.Num}</td>
              <td>{el.Name}</td>
              <td>{el.Date}</td>
              <td>{el.Type}</td>
              <td>{el.Details}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
