import React from "react";

export default function LogsTable({ data, slots }) {
  let newNum = ++data.length;
  if (data.length !== slots) {
    for (let i = 0; i < slots - data.length; i++) {
      data.push({
        Num: newNum,
        Name: "Fifth Data",
        Date: "2023-05-05",
        Type: "Meeting",
        Details: "Reviewing project progress",
      });
      newNum++;
    }
    console.log(data);
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
        {data.map((el) => {
          return (
            <tr key={el.Num}>
              <td>2023-05-02</td>
              <td>Logout</td>
              <td>Success</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
