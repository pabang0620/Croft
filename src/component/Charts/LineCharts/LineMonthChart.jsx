import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useChartData } from '../../utils/api/Charts/ChartAPI';

const LineMonthChart = ({ queryname }) => {
  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/farms/${queryname}/amonth`,
    `chartData-barMonth-${queryname}`
  );

  const chartRef = useRef(null);
  //   console.log(data);
  // --------------------------------------------
  useEffect(() => {
    if (isLoading || error) {
      return;
    }

    if (!data || !data.data) {
      return;
    }

    const chartInstance = echarts.init(chartRef.current);

    // 차트 데이터 생성
    const chartData = data.data.map((item) => {
      return {
        // kr_time 값을 x축 값으로 변환 (예: 날짜 시간 형식)
        name: item.kr_time,
        // vpd 값을 y축 값으로 사용
        value: item.vpd,
      };
    });

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: '20%', // 필요에 따라 이 값을 조정
      },
      title: {
        text: queryname,
        top: '5%',
        left: '2%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: data.data.map((item) => {
          const date = new Date(item.kr_time);
          return `${date.getMonth() + 1}.${date.getDate()}`; // '월.일' 형식으로 변환
        }),
        axisLabel: {
          fontSize: 10,
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          fontSize: 10, // 글꼴 크기를 10px로 설정
        },
      },
      series: [
        {
          name: `일자별 ${queryname}`,
          type: 'bar',
          data: chartData, // 시리즈 데이터를 chartData로 설정
          //   markArea: {
          //     itemStyle: {
          //       color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
          //     },
          //     data: [
          //       [
          //         { yAxis: 5 }, // 시작 y축 값
          //         { yAxis: 15 }, // 끝 y축 값 (차트 최대값까지)
          //       ],
          //     ],
          //   },
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
    <div className="flex flex-col gap-[31px] w-full  h-[380px] px-[3.3125rem] relative">
      <div className="absolute top-[15%] h-full w-[150px]">
        <div className="relative h-full w-full flex flex-col">
          <div className="absolute top-[33%]  w-[150px] pt-[10px] border-t border-base400 flex flex-col">
            <div className="text-sm mb-1">권장</div>
          </div>
          <div className="absolute top-[47%]  w-[150px] pt-[10px] border-t border-base400 flex flex-col" />
        </div>
      </div>
      <div className="w-full h-full" ref={chartRef}></div>
    </div>
  );
};

export default LineMonthChart;
