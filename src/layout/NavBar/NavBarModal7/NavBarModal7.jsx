// React 모달 컴포넌트
import React from "react";
import NavBarModalHeader from "./NavBarModalHeader";
import SliderDiv from "../../../component/Graphs/SliderDiv";
import { NavBarModalVent } from "./NavBarModalVent";
import { NavBarModalScreen } from "./NavBarModalScreen";
import { NavBarModal7ETC } from "./NavBarModal7ETC";

const NavBarModal7 = () => {
  return (
    <div className="mr-8 ml-8 z-10">
      <div className="bg-white shadow-md rounded-lg w-[320px] p-4">
        <div className="flex flex-row whitespace-nowrap justify-between">
          <div className="text-lg font-semibold leading-normal">장치 상태</div>
          <div className="w-5 h-5 rounded-full bg-red-500 text-center text-white leading-[20px]">
            !
          </div>
        </div>
        <div className="flex flex-row w-[320px]">
          <NavBarModalHeader detail="12℃" />
          <NavBarModalHeader detail="51%" />
          <NavBarModalHeader detail="629 w/m²" />
          <NavBarModalHeader detail="285.3 ppm" />
        </div>
        <NavBarModalVent />
        <NavBarModalScreen />
        <NavBarModal7ETC />
      </div>
    </div>
  );
};

export default NavBarModal7;
