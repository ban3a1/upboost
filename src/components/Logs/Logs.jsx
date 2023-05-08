import React from "react";
import LogsTable from "./LogsTable";

export default function Logs() {
  const data = [
    {
      Num: 1,
      Name: "First Data",
      Date: "2023-05-01",
      Type: "Meeting",
      Details: "Discussing new project proposal",
    },
    {
      Num: 2,
      Name: "Second Data",
      Date: "2023-05-02",
      Type: "Call",
      Details: "Following up with client",
    },
    {
      Num: 3,
      Name: "Third Data",
      Date: "2023-05-03",
      Type: "Email",
      Details: "Sending marketing campaign",
    },
    {
      Num: 4,
      Name: "Fourth Data",
      Date: "2023-05-04",
      Type: "Task",
      Details: "Completing design draft",
    },
    {
      Num: 5,
      Name: "Fifth Data",
      Date: "2023-05-05",
      Type: "Meeting",
      Details: "Reviewing project progress",
    },
  ];

  return (
    <div className="logs-container">
      <div className="logs-content-container">
        <LogsTable data={data} slots={20} />
      </div>
    </div>
  );
}
