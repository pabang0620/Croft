import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useChartData } from '../../utils/api/Charts/ChartAPI';

const BarMonthChart = ({ queryname }) => {
  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/farms/${queryname}/amonth`,
    `chartData-barMonth-${queryname}`
  );

  const chartRef = useRef(null);
  console.log(data);
  // --------------------------------------------
  useEffect(() => {
    if (isLoading || error) {
      // 데이터 로딩 중이거나 오류 발생시 처리
      return;
    }

    if (!data || !data.data) {
      // 데이터가 없거나 잘못된 형식일 경우 처리
      return ;
    }
    let date;
    console.log(data);
    const xLabels = data.data.map((item) => {
      if ((queryname === 'dli', 'photo_period', 'rtr')) {
        date = new Date(item.kr_time);
      }
      if (queryname === 'rtr') {
        date = new Date(item.date);
      }

      const formattedDate = `${date.getMonth() + 1}.${date.getDate()}`;
      return formattedDate;
    });

    let seriesData;

    if (queryname === 'dli') {
      seriesData = data.data.map((item) => item[queryname]);
    }
    if (queryname === 'photo_period') {
      seriesData = data.data.map((item) => item.photo_period_hour);
    } else {
      seriesData = data.data.map((item) => item['day_' + queryname]);
    }
    // console.log("#######################", `${queryname}`, data);
    // console.log("#######################", seriesData);

    const chartInstance = echarts.init(chartRef.current);

    // eCharts 옵션 설정
    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        left: '4%',
        bottom: '20%', // 필요에 따라 이 값을 조정
      },
      title: {
        text: '',
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
        data: xLabels,
        axisLabel: {
          fontSize: 10, // 글꼴 크기를 10px로 설정
          interval: 0, // x축 라벨을 모두 표시
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
          data: seriesData,
          markArea: {
            itemStyle: {
              color: 'rgba(79, 254, 35, 0.3)', // #4FFE234D와 유사한 RGBA 색상
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
    <div className="flex flex-col gap-[31px] w-full h-full px-[3.3125rem] relative">
      <div className="absolute top-[15%] h-full w-[150px]">
        <div className="relative h-full w-full flex flex-col">
          <div className="absolute top-0 flex flex-col">
            <div className="text-sm mb-1">과성장</div>
          </div>
          <div className="absolute top-[25%]  w-[150px] pt-[10px] border-t border-base400 flex flex-col">
            <div className="text-sm mb-1">권장</div>
          </div>
          <div className="absolute top-[50%]  w-[150px] pt-[10px] border-t border-base400 flex flex-col">
            <div className="text-sm mb-1">성장부족</div>
          </div>
        </div>
      </div>
      <div
        className="w-[95%] h-full absolute top-2 left-[160px]"
        ref={chartRef}
      />
    </div>
  );
};

export default BarMonthChart;
