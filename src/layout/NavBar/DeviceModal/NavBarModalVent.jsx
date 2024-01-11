import React from "react";
import SliderDiv from "../../../component/Graphs/SliderDiv";

export function NavBarModalVent() {
  return (
    <div className="w-[295px] h-[92px] shrink-0 rounded-lg bg-[#F1F1F1] my-5 flex justify-around flex-col text-sm font-semibold leading-normal">
      <div>Vent</div>
      <div className="flex flex-row justify-around">
        <div>
          <SliderDiv width="130px" />
          <div className="text-center">LEE</div>
        </div>
        <div>
          <SliderDiv width="130px" />
          <div className="text-center">WIND</div>
        </div>
      </div>
    </div>
  );
}
