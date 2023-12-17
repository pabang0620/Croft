import React, { useState, useRef } from "react";

const SliderInput = () => {
  // 데이터 예시
  const data = [
    {
      최고온도: 24,
      최저온도: 17,
      현재온도: 23,
    },
  ];

  // 최소값, 최대값, 현재값 설정
  const minTemperature = data[0].최저온도;
  const maxTemperature = data[0].최고온도;
  const [currentValue, setCurrentValue] = useState(data[0].현재온도);
  const sliderRef = useRef(null);

  const handleSliderClick = (e) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const newValue =
      ((e.clientX - rect.left) / rect.width) *
        (maxTemperature - minTemperature) +
      minTemperature;
    setCurrentValue(newValue);
  };

  return (
    <div className="slider-container my-4 relative">
      <div
        ref={sliderRef}
        className="rounded-lg relative cursor-pointer"
        onClick={handleSliderClick}
      >
        <div
          className="h-4 bg-[#3F9192] rounded-none"
          style={{ width: "100%", height: "22px" }}
        ></div>
        <input type="range" value={currentValue} className="hidden" readOnly />
      </div>
      <div className="text-center">
        <div className="text-xs font-semibold leading-normal absolute top-[85%] left-[-7%]">
          {Math.round(minTemperature)}°
        </div>
        <div className="text-xs font-semibold leading-normal absolute top-[85%] left-[89%]">
          {Math.round(maxTemperature)}°
        </div>
        <div className="text-xs font-semibold leading-normal absolute top-[-78%] left-[43%]">
          {Math.round(currentValue)}°
        </div>
      </div>
    </div>
  );
};

export default SliderInput;
