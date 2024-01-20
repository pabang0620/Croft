import React, { useState, useRef, useEffect } from "react";
import { useChartData } from "../utils/api/Charts/ChartAPI"; // API 호출용 훅을 가져옵니다.

const MainSliderDiv = ({
  queryName, // 오류
  title,
  absData1,
  absData2,
  absData3,
  absData4,
  absData5,
  absData6,
  absData7,
  absData8,
}) => {
  const [photoPeriodHour, setPhotoPeriodHour] = useState(0);
  const sliderRef = useRef(null);
  // API로부터 RTR 수치 데이터를 불러옵니다.
  const { data, isLoading, error } = useChartData(
    // `/api/v1/farms/photo_period/current`,
    `http://croft-ai.iptime.org:40401/api/v1/farms/${queryName}/current`, // 오류
    `photoPeriod-${queryName}`
  );

  useEffect(() => {
    if (data && data.data) {
      setPhotoPeriodHour(data.data.photo_period_hour);
    }
  }, [data]);

  return (
    <div className="relative p-4 h-full bg-white rounded-lg">
      {isLoading && <div>isLoading.</div>}
      {error && <div>Error fetching data.</div>}
      <div className="text-base font-bold mb-12">
        {title}
        <span className="text-[#124946] ml-4">{photoPeriodHour}</span>
      </div>
      <div className="w-[288px] h-0.5 bg-gray-200 my-2 relative">
        <div className="bg-[#4FFE2350] absolute top-[-9px] left-1/3 h-5 w-1/3"></div>
        <div className="h-5 w-0.5 bg-gray-300 absolute left-0 top-[-9px]"></div>
        <div className="h-5 w-0.5 bg-gray-300 absolute left-1/3 top-[-9px]"></div>
        <div className="h-5 w-0.5 bg-gray-300 absolute left-2/3 top-[-9px]"></div>
        <div className="h-5 w-0.5 bg-gray-300 absolute right-0 top-[-9px]"></div>
        <div className="absolute top-[9px] left-[-2.5px] text-xs">
          {absData1}
        </div>
        <div className="absolute top-[9px] left-[32.5%] text-xs">
          {absData2}
        </div>
        <div className="absolute top-[9px] left-[65%] text-xs">{absData3}</div>
        <div className="absolute top-[9px] right-[-5px] text-xs">
          {absData4}
        </div>
        <div className="absolute text-xs font-normal leading-normal top-[20px] flex flex-row justify-around w-full">
          <div className="">{absData5}</div>
          <span className="mr-4">{absData6}</span>
          <div className="">{absData7}</div>
        </div>
        <input
          type="range"
          min={0}
          max={16}
          value={photoPeriodHour}
          ref={sliderRef}
          className="w-[300px] h-5 appearance-none bg-transparent absolute top-[-9px] left-[-6px] cursor-pointer"
          style={{ zIndex: 2 }}
        />
        <div className="text-xs font-normal leading-normal text-center w-full mt-4 absolute top-[45px]">
          {absData8}
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

// 리사이즈는 되지만 input값 오류
// import React, { useState, useRef, useEffect } from "react";
// import { useChartData } from "../utils/api/Charts/ChartAPI"; // API 호출용 훅을 가져옵니다.

// const MainSliderDiv = ({
//   layout,
//   // queryName,     // 오류
//   title,
//   absData1,
//   absData2,
//   absData3,
//   absData4,
//   absData5,
//   absData6,
//   absData7,
//   absData8,
// }) => {
//   const [photoPeriodHour, setPhotoPeriodHour] = useState(0);
//   const sliderRef = useRef(null);
//   // API로부터 RTR 수치 데이터를 불러옵니다.
//   const { data, isLoading, error } = useChartData(
//     `/api/v1/farms/photo_period/current`,
//     // `/api/v1/farms/${queryName}/current`,       // 오류
//     "photoPeriod"
//   );
//   const componentStyle = {
//     width: `${layout ? layout.w * (1750 / 12) : 288}px`, // 너비 계산
//     height: `${layout ? layout.h * 100 : "auto"}px`, // 높이 계산 (auto로 설정하거나 필요한 높이를 계산하여 설정)
//   };
//   useEffect(() => {
//     if (data && data.data) {
//       setPhotoPeriodHour(data.data.photo_period_hour);
//     }
//   }, [data]);

//   return (
//     <div
//       className="relative p-4 flex flex-col items-center"
//       style={componentStyle}
//     >
//       {isLoading && <div>isLoading.</div>}
//       {error && <div>Error fetching data.</div>}
//       <div className="text-base font-bold mb-12">
//         {title}
//         <span className="text-[#124946] ml-4">{photoPeriodHour}</span>
//       </div>
//       <div className="w-3/4 h-0.5 bg-gray-200 my-2 relative">
//         <div className="bg-[#4FFE2350] absolute top-[-9px] left-1/3 h-5 w-1/3"></div>
//         <div className="h-5 w-0.5 bg-gray-300 absolute left-0 top-[-9px]"></div>
//         <div className="h-5 w-0.5 bg-gray-300 absolute left-1/3 top-[-9px]"></div>
//         <div className="h-5 w-0.5 bg-gray-300 absolute left-2/3 top-[-9px]"></div>
//         <div className="h-5 w-0.5 bg-gray-300 absolute right-0 top-[-9px]"></div>
//         <div className="absolute top-[9px] left-[-2.5px] text-xs">
//           {absData1}
//         </div>
//         <div className="absolute top-[9px] left-[32.5%] text-xs">
//           {absData2}
//         </div>
//         <div className="absolute top-[9px] left-[65%] text-xs">{absData3}</div>
//         <div className="absolute top-[9px] right-[-5px] text-xs">
//           {absData4}
//         </div>
//         <div className="absolute text-xs font-normal leading-normal top-[20px] flex flex-row justify-around w-full">
//           <div className="">{absData5}</div>
//           <span className="mr-4">{absData6}</span>
//           <div className="">{absData7}</div>
//         </div>
//         <input
//           type="range"
//           min={0}
//           max={16}
//           value={photoPeriodHour}
//           ref={sliderRef}
//           className="w-[300px] h-5 appearance-none bg-transparent absolute top-[-9px] left-[-6px] cursor-pointer"
//           style={{ zIndex: 2 }}
//         />
//         <div className="text-xs font-normal leading-normal text-center w-full mt-4 absolute top-[45px]">
//           {absData8}
//         </div>
//         <button className="text-[#124946] text-xs font-normal leading-normal absolute right-[0px] bottom-[-120px]">
//           자세히 보기
//         </button>
//       </div>

//       <div className="flex justify-between text-xs"></div>
//     </div>
//   );
// };

// export default MainSliderDiv;
