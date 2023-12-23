import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const MainSmoothedLineChart = () => {
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
    return [4, 11, 18, 7]; // 시간별로 데이터가 들어올거임 (6개)
  };

  useEffect(() => {
    // 기본 eCharts 인스턴스를 생성
    const chartInstance = echarts.init(chartRef.current);
    // 날짜 데이터 들어있어야함
    const dates = generateDateLabels();
    const dummyData = generateDummyData();

    // eCharts 옵션 설정
    const option = {
      title: {
        text: "온실 온도",
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
        data: ["04:00", "08:00", "12:00", "16:00", "20:00", "24:00"], // 4시간 간격의 시간 레이블
        axisLabel: {
          fontSize: 9, // 글꼴 크기를 10px로 설정
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          fontSize: 9, // 글꼴 크기를 10px로 설정
        },
      },
      lineStyle: {
        color: "tomato", // 라인 색상을 tomato로 설정
      },
      series: [
        {
          name: "온실 온도",
          type: "line",
          smooth: true,
          data: dummyData,
          itemStyle: {
            // 데이터 포인트 색상 설정
            color: "tomato",
            borderWidth: 2, // 포인트의 테두리 두께
            borderColor: "tomato", // 포인트의 테두리 색상
          },
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 14 }, // 시작 y축 값
                { yAxis: 17 }, // 끝 y축 값 (차트 최대값까지)
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
      <div className="w-[320px] h-[240px]" ref={chartRef}></div>
      <div className="absolute bottom-[0px] right-[0px] mb-2 mr-2 text-[#124946] text-xs font-normal leading-normal cursor-pointer">
        자세히 보기
      </div>
    </>
  );
};

export default MainSmoothedLineChart;
