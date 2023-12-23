import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const MainBarChart = () => {
  const chartRef = useRef(null);

  // 현재 날짜를 기준으로 7일 전부터의 날짜를 구함
  const generateDateLabels = () => {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toLocaleDateString());
    }
    return dates;
  };

  // 더미 데이터 생성

  const generateDummyData = () => {
    return [10, 11, 12, 13, 14, 13, 12]; // 고정된 데이터 값
  };

  useEffect(() => {
    // 기본 eCharts 인스턴스를 생성
    const chartInstance = echarts.init(chartRef.current);
    const dates = generateDateLabels();
    const dummyData = generateDummyData();

    // eCharts 옵션 설정
    const option = {
      title: {
        text: "Photo period",
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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
          fontSize: 10, // 글꼴 크기를 10px로 설정
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
          name: "Photoperiod",
          type: "bar",
          data: dummyData,
          markLine: {
            silent: true,
            symbol: "none",
            lineStyle: {
              color: "green",
              type: "solid",
            },
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
  }, []);

  return (
    <>
      <div className="w-[320px] h-[240px]" ref={chartRef}></div>
      <div className="absolute bottom-[0px] right-[0px] mb-2 mr-2 text-[#124946] text-xs font-normal leading-normal cursor-pointer">
        자세히 보기
      </div>
    </>
  );
};

export default MainBarChart;
