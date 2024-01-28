// import React, { useEffect, useState } from "react";
// import { useChartData } from "../../utils/api/Charts/ChartAPI";

// const TimeMeasure = ({ APIoption, ChartName }) => {
//   const dataType = APIoption;
//   const {
//     data: data,
//     isLoading: isLoading,
//     error: error,
//   } = useChartData(
//     `/api/v1/farms/measurement/day?data_type=${dataType}`,
//     `chartData-${dataType}`
//   );

//   // 전체 시간대 데이터 처리를 위한 상태
//   const [dataPoints, setDataPoints] = useState([]);

//   // 전체 시간대에 대한 레이블 생성
//   const createLabelsForDay = () => {
//     const labels = [];
//     for (let hour = 0; hour < 24; hour++) {
//       for (let minute = 0; minute < 60; minute += 5) {
//         labels.push(
//           `${hour.toString().padStart(2, "0")}:${minute
//             .toString()
//             .padStart(2, "0")}`
//         );
//       }
//     }
//     return labels;
//   };

//   useEffect(() => {
//     if (isLoading || error) {
//       return;
//     }

//     if (!data || !data.data) {
//       return;
//     }

//     const fullDayLabels = createLabelsForDay();
//     const dataMap = new Map(
//       data.data.map((item) => {
//         const date = new Date(item.kr_time);
//         const timeLabel = `${date.getHours().toString().padStart(2, "0")}:${date
//           .getMinutes()
//           .toString()
//           .padStart(2, "0")}`;
//         return [timeLabel, item.value];
//       })
//     );

//     const newDataPoints = fullDayLabels.map((label) => ({
//       time: label,
//       value: dataMap.get(label) || null,
//     }));

//     setDataPoints(newDataPoints);
//   }, [data, isLoading, error]);
import React, { useEffect, useState } from "react";
import { useChartData } from "../../utils/api/Charts/ChartAPI";
import MeasureName from "./MeasureName";

const TimeMeasure = ({ APIoption, ChartName }) => {
  const dataType = APIoption;
  const { data, isLoading, error } = useChartData(
    `/api/v1/farms/measurement/day?data_type=${dataType}`,
    `chartData-${dataType}`
  );

  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    if (isLoading || error) {
      return;
    }

    if (!data || !data.data) {
      return;
    }

    // API 데이터에서 직접 dataPoints 상태를 설정
    const newDataPoints = data.data.map((item) => {
      const date = new Date(item.kr_time);
      const timeLabel = `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      return { time: timeLabel, value: item.value };
    });

    setDataPoints(newDataPoints);
  }, [data, isLoading, error]);
  const findContinuousRanges = (dataPoints) => {
    const ranges = [];
    let start = null;

    dataPoints.forEach((item, index) => {
      if (item.value === 100) {
        if (start === null) start = index;
      } else {
        if (start !== null) {
          if (index - start > 1) {
            ranges.push({ start, end: index - 1 });
          }
          start = null;
        }
      }
    });

    // 마지막 연속 구간 처리
    if (start !== null && dataPoints.length - start > 1) {
      ranges.push({ start, end: dataPoints.length - 1 });
    }

    return ranges;
  };

  const continuousRanges = findContinuousRanges(dataPoints);

  const findContinuousHundredRanges = (dataPoints) => {
    const ranges = [];
    let start = null;

    dataPoints.forEach((item, index) => {
      if (item.value === 100) {
        if (start === null) start = index; // 100값 시작 지점 기록
      } else {
        if (start !== null && index - start >= 10) {
          ranges.push({ start, end: index - 1 }); // 10개 이상 연속되는 100값 구간 저장
        }
        start = null; // 연속 구간 종료
      }
    });

    // 마지막 연속 구간 처리
    if (start !== null && dataPoints.length - start >= 10) {
      ranges.push({ start, end: dataPoints.length - 1 }); // 마지막 구간 저장
    }

    return ranges;
  };

  const continuousHundredRanges = findContinuousHundredRanges(dataPoints);

  return (
    <div className="flex flex-row">
      <MeasureName ChartName={ChartName} />
      <div className="flex justify-between bg-white h-[25px] pl-[8px] pr-[8px] items-center relative w-[554px]  border-b-[1px] border-gray-400">
        {dataPoints.map((item, index) => (
          <div
            key={index}
            className={`w-[4px] h-[14px] ${
              item.value === 100
                ? "bg-[#124946]"
                : item.value === 0
                ? "bg-white"
                : "bg-transparent"
            } ${
              continuousRanges.some((range) => index === range.start)
                ? "rounded-l-[5px]"
                : ""
            } ${
              continuousRanges.some((range) => index === range.end)
                ? "rounded-r-[5px]"
                : ""
            }`}
          />
        ))}
        {continuousHundredRanges.map((range, index) => (
          <div
            key={index}
            className="absolute flex items-center text-xs text-white"
            style={{
              left: `${range.start * 2}px`, // 연속 구간의 시작 지점으로 left 위치 설정
              top: "0",
              height: "100%",
            }}
          >
            <span className="ml-[10px] font-bold">ON</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeMeasure;
