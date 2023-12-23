import React, { useState, useRef } from "react";

const MainSliderDiv = () => {
  const sliderRef = useRef(null);

  const photoperiodData = {
    current: 2.64,
    min: 0,
    max: 13,
    optimalMin: 6,
    optimalMax: 10,
  };

  // 전체 트랙의 너비를 계산합니다.
  const fullWidth = 100; // 100%로 가정

  // 권장 범위의 너비를 계산합니다.
  const optimalWidth =
    ((photoperiodData.optimalMax - photoperiodData.optimalMin) /
      (photoperiodData.max - photoperiodData.min)) *
    fullWidth;

  // 권장 범위의 왼쪽 위치를 계산합니다.
  const optimalLeftOffset =
    ((photoperiodData.optimalMin - photoperiodData.min) /
      (photoperiodData.max - photoperiodData.min)) *
    fullWidth;

  // 현재 값의 위치를 계산합니다.
  const currentOffset =
    ((photoperiodData.current - photoperiodData.min) /
      (photoperiodData.max - photoperiodData.min)) *
    fullWidth;

  const [value, setValue] = useState(0); // 슬라이더의 현재 값
  const [hoverPosition, setHoverPosition] = useState(0);

  const handleMouseMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const newValue = Math.round(
      ((e.clientX - rect.left) / rect.width) * sliderRef.current.max
    );
    setValue(newValue);
    setHoverPosition(e.clientX - rect.left);
  };

  return (
    <div className="relative p-4">
      <div className="text-base font-bold mb-12">
        Photo Period
        <span className="text-[#124946] ml-4">{photoperiodData.current}</span>
      </div>
      <div className="w-[288px] h-0.5 bg-gray-200 my-2 relative">
        <div className="bg-[#4FFE2350] absolute top-[-9px] left-1/3 h-5 w-1/3"></div>
        <div className="h-5 w-0.5 bg-gray-300 absolute left-0 top-[-9px]"></div>
        <div className="h-5 w-0.5 bg-gray-300 absolute left-1/3 top-[-9px]"></div>
        <div className="h-5 w-0.5 bg-gray-300 absolute left-2/3 top-[-9px]"></div>
        <div className="h-5 w-0.5 bg-gray-300 absolute right-0 top-[-9px]"></div>
        <div className="absolute text-xs font-normal leading-normal top-[20px] flex flex-row justify-around w-full">
          <div className="">최저권장</div>
          <span className="mr-4">권장</span>
          <div className="">고권장</div>
        </div>
        <input
          type="range"
          min="0"
          max={photoperiodData.max}
          value={value}
          onMouseMove={handleMouseMove}
          ref={sliderRef}
          className="w-[300px] h-5 appearance-none bg-transparent absolute top-[-9px] left-[-6px] cursor-pointer"
          style={{ zIndex: 2 }}
        />
        <div
          className="absolute top-[-30px] text-xs font-normal leading-normal"
          style={{ left: `${hoverPosition}px` }}
        >
          {value.toString()}
        </div>
        <div className="text-xs font-normal leading-normal text-center w-full mt-4 absolute top-[45px]">
          Photo Period 상태에 따른 메시지가 나옵니다.
        </div>
        <button className="text-[#124946] text-xs font-normal leading-normal absolute right-[0px] bottom-[-120px]">
          자세히 보기
        </button>
      </div>

      <div className="flex justify-between text-xs"></div>
    </div>
  );
};

export default MainSliderDiv;
