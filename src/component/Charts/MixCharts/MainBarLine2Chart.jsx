import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { format, subDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const MainBarLine2Chart = ({
  ChartName,
  registerChart,
  chartKey,
  dateset,
  route,
  locate,
  startDate,
  endDate,
}) => {
  const chartRef = useRef(null);
  const navigate = useNavigate();
  const handleRoute = (route) => {
    if (route) navigate(route);
    window.scrollTo(0, 0);
  };

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/gh_data_item?start_time=${startDate}&end_time=${endDate}&data_type=227&data_type=198&group_by=day`,
    `chartData-${startDate}-${endDate}`
  );

  // console.log(data);

  useEffect(() => {
    if (isLoading || error) {
      // 데이터 로딩 중이거나 오류 발생시 처리
      return;
    }

    if (!data || !data.data) {
      // 데이터가 없거나 잘못된 형식일 경우 처리
      return;
    }

    const chartInstance = echarts.init(chartRef.current);

    // 데이터에서 227과 198의 데이터를 분리하여 추출
    const uniqueDates = new Set();
    data.data.forEach((item) => {
      const formattedDate = format(new Date(item.kr_time), "MM.dd");
      uniqueDates.add(formattedDate);
    });

    const dates = Array.from(uniqueDates);

    const data227 = data.data
      .filter((item) => item.data_type_id === 227)
      .map((item) => item.avg);
    const data198 = data.data
      .filter((item) => item.data_type_id === 198)
      .map((item) => item.avg);

    // console.log(data227, data198);
    const minYValue = Math.min(...data227, ...data198);
    const maxYValue = Math.max(...data227, ...data198);

    const data198Max = data.data
      .filter((item) => item.data_type_id === 198)
      .map((item) => item.high);

    const data198Min = data.data
      .filter((item) => item.data_type_id === 198)
      .map((item) => item.low);

    // console.log(data198Max, data198Min);

    const option = {
      grid: {
        // 필요에 따라 이 값을 조정(차트 사이즈 조절)
        top: "25%",
        bottom: "8%",
      },
      title: {
        text: ChartName,
        top: "0%",
        left: "2%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      legend: {
        data: ["온실온도편차", "온실평균온도", "외부평균온도"],
        textStyle: {
          color: "#000", // 범례 텍스트 색상
          fontSize: 12, // 범례 텍스트 크기
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: "rect",
        left: "12%", // 가로 중앙에 위치
        top: "15%", // 타이틀 아래에 위치하도록 조정
      },
      xAxis: {
        type: "category",
        data: dates,
        axisLine: {
          show: false, // x축 라인 숨기기
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        // splitLine: {
        //   lineStyle: {
        //     color: "#eee", // 분할선의 색상을 변경합니다.
        //     type: "dashed", // 분할선을 점선으로 표시합니다.
        //   },
        // },
        // type: "value",
        // min: minYValue > 0 ? 0 : minYValue, // 데이터가 0보다 크면 0으로 설정, 아니면 최소값으로 설정
        // max: maxYValue, // 최대값으로 설정
      },
      series: [
        {
          name: "온실온도최소", // 최소 온도
          type: "bar",
          stack: "Total",
          data: data198Min,
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
          emphasis: {
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
          },
        },
        {
          name: "온실온도편차", // 최대 온도
          type: "bar",
          stack: "Total",
          data: data198Max,
          itemStyle: {
            color: "#D95F5F", // 적당한 색상으로 설정
          },
        },
        {
          name: "온실평균온도",
          type: "line",
          data: data198,
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 20 }, // 시작 y축 값
                { yAxis: 25 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
        },
        {
          name: "외부평균온도",
          type: "line",
          data: data227,
        },
      ],
      // grid 설정 및 기타 필요한 스타일 설정...
    };
    // eCharts 옵션 설정

    // eCharts 인스턴스에 옵션을 적용
    chartInstance.setOption(option);

    if (registerChart) {
      registerChart(chartKey, chartInstance);
    }

    return () => {
      chartInstance.dispose();
    };
  }, [data, isLoading, error, startDate, endDate]); // 의존성 배열에 API 응답 데이터를 포함합니다.

  return (
    <div className="relative bg-white rounded-lg w-full h-full">
      <div ref={chartRef} className="absolute top-1 left-1 w-[95%] h-[90%]" />
      {locate !== "avg" && (
        <div className="flex w-full h-fit justify-end absolute bottom-[9px] right-4">
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

export default MainBarLine2Chart;
