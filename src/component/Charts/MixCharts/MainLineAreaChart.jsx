import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useChartData } from '../../utils/api/Charts/ChartAPI';
import { format, subDays } from 'date-fns';

const MainLineAreaChart = ({ APIoption, ChartName }) => {
  const chartRef = useRef(null);

  const startDate = format(subDays(new Date(), +1), 'yyyy-MM-dd');
  const endDate = format(subDays(new Date(), -1), 'yyyy-MM-dd');
  const today = format(new Date(), 'yyyy-MM-dd');
  const formattedStartDate = format(new Date(startDate), 'MM.dd');
  const formattedToday = format(new Date(today), 'MM.dd');

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/gh_data_item?start_time=${startDate}&end_time=${endDate}&data_type=${APIoption}&group_by=hour`,
    `chartData0-218`
  );

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
    const todayData = data.data.filter((item) =>
      item.kr_time.startsWith(today)
    );

    const yesterdayAvg = yesterdayData.map((item) => item.avg);
    const todayAvg = todayData.map((item) => item.avg);

    const xLabels = yesterdayData.map((item) => {
      const date = new Date(item.kr_time);
      return `${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
    });

    const option = {
      title: {
        text: ChartName,
        top: '5%',
        left: '2%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        data: [formattedStartDate, formattedToday],
        textStyle: {
          color: '#333', // 범례 텍스트 색상
          fontSize: 12, // 범례 텍스트 크기
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: 'rect',
        left: '12%', // 가로 중앙에 위치
        top: '13%', // 타이틀 아래에 위치하도록 조정
      },
      xAxis: {
        axisLabel: {
          fontSize: 10,
          margin: '10',
        },
        type: 'category',
        boundaryGap: false, // 선 차트에 대해 경계 간격을 없앰
        data: xLabels,
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: '10',
        },
        type: 'value',
        // min: 0,
        // max: 100,
        // interval: 10,
      },

      series: [
        {
          name: formattedStartDate,
          type: 'line',
          data: yesterdayAvg, // 어제 데이터
          lineStyle: {
            color: '#AEAEAE', // 라인 색상을 #AEAEAE로 설정
          },
          showSymbol: false,
        },
        {
          name: formattedToday,
          type: 'line',
          data: todayAvg,
          lineStyle: {
            color: '#AEAEAE', // 라인 색상을 #AEAEAE로 설정
          },
          areaStyle: {
            color: 'rgba(69, 69, 255, 0.3)', // 영역 색상을 blue의 30% 투명도로 설정
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

    return () => {
      chartInstance.dispose();
    };
  }, [data, isLoading, error]); // 의존성 배열에 API 응답 데이터를 포함합니다.

  // return <div ref={chartRef} style={{ width: "480px", height: "380px" }} />;
  return <div ref={chartRef} />;
};

export default MainLineAreaChart;
