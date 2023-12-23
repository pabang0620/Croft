import React from "react";

const SliderDiv = ({ width }) => {
  // width 프롭스 추가
  // 데이터 예시
  const data = [
    {
      최고온도: 100,
      최저온도: 0,
      현재온도: 50,
    },
  ];

  // 최소값, 최대값, 현재값 설정
  const minTemperature = data[0].최저온도;
  const maxTemperature = data[0].최고온도;
  const currentValue = data[0].현재온도;

  // 현재 온도에 따른 바의 너비 계산
  const widthPercentage =
    ((currentValue - minTemperature) / (maxTemperature - minTemperature)) * 100;

  return (
    <div className="slider-container relative" style={{ width: width }}>
      {" "}
      {/* inline 스타일에 width 프롭스 적용 */}
      <div className="rounded-lg relative cursor-pointer w-full h-6 bg-gray-300">
        <div
          className="bg-[#3F9192] h-4 rounded-lg"
          style={{ width: `${widthPercentage}%`, height: "23px" }}
        ></div>
      </div>
      <div className="text-center absolute top-[15%] left-[40%]">
        <div className="text-xs font-semibold">{Math.round(currentValue)}%</div>
      </div>
    </div>
  );
};

export default SliderDiv;
