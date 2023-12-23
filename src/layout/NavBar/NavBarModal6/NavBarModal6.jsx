// React 모달 컴포넌트
import React from "react";
import SliderInputCard from "../../../component/Graphs/SliderInputCard";

const NavBarModal6 = () => {
  return (
    <div className="z-10">
      <div className="bg-white shadow-md rounded-lg w-[320px] p-4">
        <div className="flex flex-row whitespace-nowrap justify-around">
          <div className="text-base font-semibold leading-normal">
            온실 환경 AI 제어
          </div>
          <div className="text-[#124946] font-semibold leading-normal text-sm">
            환경 제어 실행중
          </div>
          <img
            className="w-7 h-7"
            src={`${process.env.PUBLIC_URL}/assets/images/Control/on_toggle.png`}
            alt=""
          />
          {/* <div className="text-xs text-[#AEAEAE] font-semibold leading-normal">환경 제어 실행중</div> */}
        </div>
        <SliderInputCard Whatfor="온도제어" />
        <SliderInputCard Whatfor="습도제어" />
        <SliderInputCard Whatfor="RTR제어" />
      </div>
    </div>
  );
};

export default NavBarModal6;
