import React, { useEffect, useState } from "react";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const TimeMeasure = ({ APIoption, ChartName }) => {
  const dataType = APIoption;
  const {
    data: data,
    isLoading: isLoading,
    error: error,
  } = useChartData(
    `/api/v1/farms/measurement/day?data_type=${dataType}`,
    `chartData-${dataType}`
  );

  // 전체 시간대 데이터 처리를 위한 상태
  const [dataPoints, setDataPoints] = useState([]);

  // 전체 시간대에 대한 레이블 생성
  const createLabelsForDay = () => {
    const labels = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        labels.push(
          `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`
        );
      }
    }
    return labels;
  };

  useEffect(() => {
    if (isLoading || error) {
      return;
    }

    if (!data || !data.data) {
      return;
    }

    const fullDayLabels = createLabelsForDay();
    const dataMap = new Map(
      data.data.map((item) => {
        const date = new Date(item.kr_time);
        const timeLabel = `${date.getHours().toString().padStart(2, "0")}:${date
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
        return [timeLabel, item.value];
      })
    );

    const newDataPoints = fullDayLabels.map((label) => ({
      time: label,
      value: dataMap.get(label) || null,
    }));

    setDataPoints(newDataPoints);
  }, [data, isLoading, error]);

  return (
    <div>
      <div className="flex justify-between bg-white h-[25px] p-[8px]">
        {dataPoints.map((item, index) => (
          <div
            key={index}
            className={`w-[2px] h-[10px] ${
              item.value === 100
                ? "bg-[#124946]" // value가 100일 때 배경색
                : item.value === 0
                ? "bg-white" // value가 0일 때 배경색
                : "bg-transparent" // 그 외의 경우 배경색
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeMeasure;
