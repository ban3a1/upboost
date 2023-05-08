import React from "react";
import LogsTable from "./LogsTable";
import Menu from "../Burger/Menu";
import ContactsBg from "../Contacts/ContactsBg";

export default function Logs() {
  const data = [
    {
      Num: 1,
      Name: "First Data",
      Date: "2023.05.01",
      Type: "Standart",
      Details: "Discussing new project proposal",
    },
    {
      Num: 2,
      Name: "Second Data",
      Date: "2023.05.02",
      Type: "Standart",
      Details: "Following up with client",
    },
    {
      Num: 3,
      Name: "Third Data",
      Date: "2023.05.03",
      Type: "Standart",
      Details: "Sending marketing campaign",
    },
    {
      Num: 4,
      Name: "Fourth Data",
      Date: "2023.05.04",
      Type: "Standart",
      Details: "Completing design draft",
    },
    {
      Num: 5,
      Name: "Fifth Data",
      Date: "2023.05.05",
      Type: "Standart",
      Details: "Reviewing project progress",
    },
  ];

  return (
    <div className="logs-container">
      <ContactsBg />
      <Menu right={true} />
      <div className="logs-content-container">
        <LogsTable data={data} slots={20} />
      </div>
    </div>
  );
}
