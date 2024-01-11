import React from "react";
import SliderDiv from "../../../component/Graphs/SliderDiv";

export function NavBarModalScreen() {
  // SCreen 데이터 보내주기
  return (
    <div className="w-[295px] shrink-0 rounded-lg bg-[#F1F1F1] my-5 flex justify-around flex-col text-sm font-semibold leading-normal">
      <div>SCREEN</div>
      <div className="flex flex-col justify-around items-center">
        <div className="my-2">
          <SliderDiv width="269px" />
        </div>
        <div className="my-2">
          <SliderDiv width="269px" />
        </div>
        <div className="my-2">
          <SliderDiv width="269px" />
        </div>
        <div className="my-2">
          <SliderDiv width="269px" />
        </div>
      </div>
    </div>
  );
}
