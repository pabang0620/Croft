import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const BarMonthChart = () => {
  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/farms/rtr/amonth`,
    `chartData-barMonth`
  );

  const chartRef = useRef(null);

  // --------------------------------------------
  useEffect(() => {
    const xLabels = data.data.map((item) => {
      const date = new Date(item.date);
      const formattedDate = `${date.getMonth() + 1}.${date.getDate()}`;
      return formattedDate;
    });
    const seriesData = data.data.map((item) => item.day_rtr);

    const chartInstance = echarts.init(chartRef.current);

    // eCharts 옵션 설정
    const option = {
      title: {
        text: "일자별 RTR",
        top: "5%",
        left: "2%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: xLabels,
        axisLabel: {
          fontSize: 10, // 글꼴 크기를 10px로 설정
          interval: 0, // x축 라벨을 모두 표시
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          fontSize: 10, // 글꼴 크기를 10px로 설정
        },
      },
      series: [
        {
          name: "일자별 RTR",
          type: "bar",
          data: seriesData,
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 5 }, // 시작 y축 값
                { yAxis: 15 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
        },
      ],
    };

    // eCharts 인스턴스에 옵션을 적용
    chartInstance.setOption(option);

    // 컴포넌트 언마운트 시 차트 인스턴스 해제
    return () => {
      chartInstance.dispose();
    };
  }, [data]);

  return (
    <>
      <div className="w-[1250px] h-[380px]" ref={chartRef}></div>
    </>
  );
};

export default BarMonthChart;
