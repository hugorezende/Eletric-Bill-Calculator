import React from "react";
import TotalSpends from "../Components/TotalSpends/TotalSpends";
import ListEquipments from "../Components/ListEquipments/ListEquipments";
import Summary from "../Components/Summary/Summary";
import Header from "../Components/Header/Header";

export default function Index() {
  return (
    <>
      <TotalSpends />
      <ListEquipments />
      <Summary />
    </>
  );
}
