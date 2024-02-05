import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { format, subDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useChartData } from "../../utils/api/Charts/ChartAPI";
import PickSingleDate from "../../utils/DatePicker/PickSingleDate";

const MainLineAreaChart = ({
  APIoption,
  ChartName,
  registerChart,
  chartKey,
  route,
  showDatePicker2,
  setShowDatePicker2,
}) => {
  const chartRef = useRef(null);
  const navigate = useNavigate();
  const handleRoute = (route) => {
    if (route) navigate(route);
    window.scrollTo(0, 0);
  };
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(
    format(subDays(date, +1), "yyyy-MM-dd")
  );
  const [endDate, setEndDate] = useState(
    format(subDays(date, -1), "yyyy-MM-dd")
  );
  const [formattedDay, setFormattedDay] = useState(format(date, "MM.dd"));
  const [formattedStartDate, setFormattedStartDate] = useState(
    format(startDate, "MM.dd")
  );

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/gh_data_item?start_time=${startDate}&end_time=${endDate}&data_type=${APIoption}&group_by=hour`,
    `chartData0-218`
  );
  useEffect(() => {
    setStartDate(format(subDays(date, +1), "yyyy-MM-dd"));
    setEndDate(format(subDays(date, -1), "yyyy-MM-dd"));
    setFormattedDay(format(date, "MM.dd"));
  }, [date]);
  useEffect(() => {
    setFormattedStartDate(format(startDate, "MM.dd"));
  }, [startDate]);

  useEffect(() => {
    if (isLoading || error) {
      return; // 로딩 중이거나 에러가 발생한 경우 바로 리턴합니다.
    }

    if (!data || !data.data) {
      return; // 데이터가 없거나 형식이 잘못된 경우 바로 리턴합니다.
    }
    const chartInstance = echarts.init(chartRef.current);

    const yesterdayData = data.data.filter((item) =>
      item.kr_time.startsWith(startDate)
    );
    const todayData = data.data.filter((item) => item.kr_time.startsWith(date));

    const yesterdayAvg = yesterdayData.map((item) => item.avg);
    const todayAvg = todayData.map((item) => item.avg);
    // console.log(yesterdayAvg);
    // console.log(todayAvg);

    const xLabels = yesterdayData.map((item) => {
      const date = new Date(item.kr_time);
      return `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    });

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        // 필요에 따라 이 값을 조정
        top: "30%",
        bottom: "8%",
        left: "15%",
        right: "2%",
      },
      title: {
        text: `${ChartName}  ${formattedDay}`,
        top: "5%",
        left: "2%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: [formattedStartDate, formattedDay],
        textStyle: {
          color: "#333", // 범례 텍스트 색상
          fontSize: 12, // 범례 텍스트 크기
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: "rect",
        left: "15%", // 가로 중앙에 위치
        top: "18%", // 타이틀 아래에 위치하도록 조정
      },
      xAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "category",
        boundaryGap: false, // 선 차트에 대해 경계 간격을 없앰
        data: xLabels,
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "value",
        // min: 0,
        // max: 100,
        // interval: 10,
      },

      series: [
        {
          name: formattedStartDate,
          type: "line",
          data: yesterdayAvg, // 어제 데이터
          lineStyle: {
            color: "#AEAEAE", // 라인 색상을 #AEAEAE로 설정
          },
          showSymbol: false,
        },
        {
          name: formattedDay,
          type: "line",
          data: todayAvg,
          lineStyle: {
            color: "#AEAEAE", // 라인 색상을 #AEAEAE로 설정
          },
          areaStyle: {
            color: "rgba(69, 69, 255, 0.3)", // 영역 색상을 blue의 30% 투명도로 설정
          },
          showSymbol: false,
        },
        // {
        //   name: "바 데이터",
        //   type: "bar",
        //   data: [0, 34, 37, 24, 4, 40, 15, 25, 35, 5, 18, 22, 2], // 10.25 데이터
        //   barWidth: "25%", // 막대 너비
        //   color: "rgba(69, 69, 255, 0.8)", // 영역 색상을 blue의 30% 투명도로 설정
        //   barGap: "0%", // 다른 시리즈의 막대와의 간격
        // },
        // {
        //   name: "바 데이터",
        //   type: "bar",
        //   data: [0, 5, 12, 16, 18, 25, 29, 34, 37, 24, 40, 15, 20], // 10.25 데이터
        //   barWidth: "25%", // 막대 너비
        //   color: "#AEAEAE", // 라인 색상을 #AEAEAE로 설정
        //   barGap: "0%", // 다른 시리즈의 막대와의 간격
        // },
      ],
    };

    chartInstance.setOption(option);

    if (registerChart) {
      registerChart(chartKey, chartInstance);
    }

    return () => {
      chartInstance.dispose();
    };
  }, [data, isLoading, error]); // 의존성 배열에 API 응답 데이터를 포함합니다.
  // 데이트피커를 토글하는 함수

  // return <div ref={chartRef} style={{ width: "480px", height: "380px" }} />;
  return (
    <div className="relative bg-white rounded-lg w-full h-full">
      <div ref={chartRef} className="absolute top-1 left-1 w-[95%] h-[90%]" />
      {ChartName && (
        <div className="flex w-full h-fit justify-between absolute bottom-[9px] pr-5 pl-2">
          <PickSingleDate
            selectedDate={date}
            setSelectedDate={setDate}
            showDatePicker2={showDatePicker2}
            setShowDatePicker2={setShowDatePicker2}
          />
          <button
            className="text-[#124946] text-xs font-normal leading-normal"
            onClick={() => handleRoute(route)}
          >
            자세히 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default MainLineAreaChart;
