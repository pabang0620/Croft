import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const Line4Chart = ({ dataoff }) => {
  const chartRef = useRef(null);

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/farms/measurement/day?data_type=227&data_type=198&data_type=205&data_type=241&data_type=204`,
    `chartData-line4`
  );

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

    const data227 = data.data
      .filter((item) => item.data_type_id === 227)
      .map((item) => item.value);
    const data198 = data.data
      .filter((item) => item.data_type_id === 198)
      .map((item) => item.value);
    const data205 = data.data
      .filter((item) => item.data_type_id === 205)
      .map((item) => item.value);
    const data241 = data.data
      .filter((item) => item.data_type_id === 241)
      .map((item) => item.value);
    const data204 = data.data
      .filter((item) => item.data_type_id === 204)
      .map((item) => item.value);

    const maxData198 = Math.ceil(Math.max(...data198) / 5) * 5;

    const uniqueTimes = Array.from(
      new Set(data.data.map((item) => item.kr_time))
    );

    let xLabels;

    if (uniqueTimes.length < 300) {
      // uniqueTimes의 길이가 200개 미만일 경우, 시간과 분 정보를 포함
      xLabels = uniqueTimes.map((time) => {
        const date = new Date(time);
        return `${date.getHours()}:${
          date.getMinutes() < 10 ? "0" : ""
        }${date.getMinutes()}`;
      });
    } else {
      // 길이가 200개 이상인 경우, 시간(시) 정보만 포함
      xLabels = uniqueTimes.map((time) => new Date(time).getHours());
    }

    const series = [
      {
        smooth: true,
        name: "외부온도",
        type: "line",
        data: data227,
        markArea: {
          itemStyle: {
            color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
          },
          // data: [
          //   [
          //     { yAxis: 15 }, // 시작 y축 값
          //     { yAxis: 20 }, // 끝 y축 값 (차트 최대값까지)
          //   ],
          // ],
        },
      },
      {
        smooth: true,
        name: "온실온도",
        type: "line",
        data: data198,
        markArea: {
          itemStyle: {
            color: "rgb(255, 0, 0 , 0.2)", // 빨강
          },
          // data: [
          //   [
          //     { xAxis: 2 }, // 시작 y축 값
          //     { xAxis: 6 }, // 끝 y축 값 (차트 최대값까지)
          //   ],
          // ],
        },
      },
    ];
    // RTR 데이터 처리
    if (!dataoff) {
      series.push(
        {
          smooth: true,
          name: "VENT 온도 셋팅",
          type: "line",
          data: data205,
          lineStyle: {
            type: "dashed", // 점선 스타일로 변경
            color: "#FF0000", // 색상을 빨간색으로 설정
          },
          itemStyle: {
            color: "#FF0000", // 선 및 포인트의 색상을 빨간색으로 설정
          },
          symbol: "none", // 데이터 포인트 위의 점 제거
        },
        {
          smooth: true,
          name: "VENT 온도 셋팅",
          type: "line",
          data: data241,
          lineStyle: {
            type: "dashed", // 점선 스타일로 변경
            color: "#FF0000", // 색상을 빨간색으로 설정
          },
          itemStyle: {
            color: "#FF0000", // 선 및 포인트의 색상을 빨간색으로 설정
          },
          symbol: "none", // 데이터 포인트 위의 점 제거
        },
        {
          smooth: true,
          name: "Heating 온도 셋팅",
          type: "line",
          data: data204,
          lineStyle: {
            type: "dashed", // 점선 스타일로 변경
            color: "black", // 색상을 빨간색으로 설정
          },
          itemStyle: {
            color: "black", // 선 및 포인트의 색상을 빨간색으로 설정
          },
          symbol: "none", // 데이터 포인트 위의 점 제거
        }
      );
    }

    // RTR 데이터 처리

    const graphic = [];

    if (!dataoff) {
      series.push(
        {
          type: "text",
          left: "5%", // VENT 텍스트의 x 좌표
          top: "30%", // VENT 텍스트의 y 좌표
          style: {
            text: "VENT", // 표시할 텍스트
            fontSize: 10,
            fontWeight: "bold",
            fill: "#fff", // 글자색을 하얀색으로 설정
            backgroundColor: "#f00", // 배경색을 빨간색으로 설정
            borderRadius: 10, // 배경의 둥근 모서리
            padding: 2,
          },
        },
        {
          type: "text",
          left: "5%", // Heat 텍스트의 x 좌표
          top: "34.5%", // Heat 텍스트의 y 좌표
          style: {
            text: "HEAT", // 표시할 텍스트
            fontSize: 10,
            fontWeight: "bold",
            fill: "#fff", // 글자색을 하얀색으로 설정
            backgroundColor: "black", // 배경색을 빨간색으로 설정
            borderRadius: 10, // 배경의 둥근 모서리
            padding: 2,
          },
        }
      );
    }
    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: "20%", // 필요에 따라 이 값을 조정
      },
      title: {
        text: "평균 온도",
        top: "5%",
        left: "2%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      graphic: graphic,

      legend: {
        data: ["외부온도", "온실온도", "VENT 온도 셋팅", "Heating 온도 셋팅"],
        textStyle: {
          color: "#333", // 범례 텍스트 색상
          fontSize: 12, // 범례 텍스트 크기
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: "rect",
      },
      xAxis: {
        type: "category",
        data: xLabels,
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
        type: "value",
        min: -5,
        max: maxData198,
        interval: 5,
      },
      series: series, // 수정된 시리즈 배열 사용
    };

    chartInstance.setOption(option);
    return () => {
      chartInstance.dispose();
    };
  }, [data]); // 의존성 배열에 data 추가

  return (
    <>
      <div ref={chartRef} className="w-full h-full" />
    </>
  );
};

export default Line4Chart;
