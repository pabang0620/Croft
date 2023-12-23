import React from "react";
import NavBarModal7ETCItem from "./NavBarModal7ETCItem";

export function NavBarModal7ETC() {
  const fansData = [
    { id: 1, name: "Fan", isOn: true },
    { id: 2, name: "FCU", isOn: false },
    { id: 3, name: "Fogging", isOn: true },
    { id: 4, name: "LED", isOn: false },
    { id: 5, name: "CO2 Valve", isOn: true },
    { id: 6, name: "Irrigation Pump", isOn: false },
    { id: 7, name: "Heating Pipe", isOn: true },
  ];

  return (
    <>
      {fansData.map((fan) => (
        <NavBarModal7ETCItem key={fan.id} name={fan.name} isOn={fan.isOn} />
      ))}
    </>
  );
}
