import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const BarMonthChart = () => {
  const chartRef = useRef(null);
  // 더미용 데이터
  const generateDummyDates = () => {
    const dates = [];
    for (let i = 0; i < 31; i++) {
      const date = new Date(2023, 10, 25); // 2023년 9월 25일 시작
      date.setDate(date.getDate() + i);
      dates.push(
        date
          .toLocaleDateString("en-US", { month: "numeric", day: "2-digit" })
          .replace(/\//g, ".")
      );
    }
    return dates;
  };

  const generateDummyValues = () => {
    const values = [];
    for (let i = 0; i < 31; i++) {
      const value = Math.random() * 1.6; // 0에서 1.6 사이의 수치
      values.push(+value.toFixed(2)); // 소수점 두 자리까지
    }
    return values;
  };

  // --------------------------------------------
  useEffect(() => {
    // 데이터 생성
    const dates = generateDummyDates();
    const values = generateDummyValues();

    // 기본 eCharts 인스턴스를 생성
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
        data: dates,
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
          data: values,
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 2.5 }, // 시작 y축 값
                { yAxis: 2.9 }, // 끝 y축 값 (차트 최대값까지)
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
  }, []);

  return (
    <>
      <div className="w-[1250px] h-[380px]" ref={chartRef}></div>
    </>
  );
};

export default BarMonthChart;
