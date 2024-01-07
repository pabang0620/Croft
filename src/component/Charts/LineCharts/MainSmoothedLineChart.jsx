import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useChartData } from '../../utils/api/Charts/BarChartAPI';

const MainSmoothedLineChart = ({APIoption , ChartName , unit}) => {
  const chartRef = useRef(null);
  const dataType = APIoption;
  const { data: data, isLoading: isLoading, error: error } = useChartData(`/api/v1/farms/measurement/day?data_type=${dataType}`, `chartData-${dataType}`);
  


  useEffect(() => {
    if (isLoading) {
      // 데이터 로딩 중 처리
      return;
    }

    if (error) {
      // 오류 처리
      console.error('데이터 로딩 중 오류 발생:', error);
      return;
    }

    const chartInstance = echarts.init(chartRef.current);

    const maxValue = Math.max(...data.data.map(item => item.value));
    const max = Math.ceil(maxValue + (maxValue / 10));
    const interval = Math.ceil(maxValue / 10);

    const xLabels = data.data.map(item => {
      const date = new Date(item.kr_time);
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    });
    // 모든 시간 라벨 생성

    const option = {
      title: {
        text: ChartName,
        top: '5%',
        left: '2%',
      },
      graphic: [{
        id: 'hoverData',
        type: 'text',
        left: 'center', // 차트 가운데에 위치
        top: 10, // 상단에서 10px 아래에 위치
        style: {
          text: '초기값', // 초기 텍스트 설정
          fontSize: 16,
          fontWeight: 'bold',
          fill: '#333', // 텍스트 색상
          textAlign: 'center', // 텍스트 정렬 방식
        },
        z: 100
      }],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },        formatter: params => {
          return `${params[0].name}<br/>${ChartName}: ${params[0].value} ${unit}`;
        }
      },
      xAxis: {
        type: 'category',
        data: xLabels,
        axisLabel: {
          fontSize: 8, // 폰트 크기 조정
        },
      },
      yAxis: {
        type: 'value',
        max: max, // 계산된 최대값
        interval: interval, // 계산된 간격
        axisLabel: {
          fontSize: 9, // 글꼴 크기 조정
          formatter: value => `${value}`, // props로 전달받은 단위를 사용
        },
      },
      series: [
        {
          name: ChartName,
          type: 'line',
          smooth: true,
          data: data.data.map(item => item.value), // y축 데이터
          itemStyle: {
            // 데이터 포인트 색상 설정
            color: 'tomato',
            borderWidth: 2, // 포인트의 테두리 두께
            borderColor: 'tomato', // 포인트의 테두리 색상
          },
          markLine: {
            data: [
              { yAxis: 15, name: "Max" }, // 표준 데이터 값
            ],
            lineStyle: {
              color: "red", // 표준 데이터 라인 색상
              type: "dashed", // 점선 스타일
            },
            symbol: ["none", "none"], // 양쪽 끝의 기호(화살표) 제거
            label: {
              position: "insideEndTop", // 라벨 위치를 우측으로 설정
              formatter: "{b}", // 'b'는 name을 의미함
              color: "tomato",
            },
            emphasis: {
              lineStyle: {
                opacity: 1, // 호버 시 라인의 불투명도 유지
              },
            },
          },
        },
      ],
    };
    // eCharts 인스턴스에 옵션을 적용
    chartInstance.setOption(option);

      // 마우스 호버 이벤트 리스너 추가
  chartInstance.on('mouseover', function (params) {
    if (params.componentType === 'series') {
      const dataValue = params.value; // 호버된 데이터 포인트의 값
      chartInstance.setOption({
        graphic: { // 그래픽 요소 업데이트
          style: {
            text: `${dataValue}%` // 동적으로 텍스트 설정
          }
        }
      });
    }
  });


    return () => {
      chartInstance.off('mouseover');
      chartInstance.dispose();
    };
  }, [data]); // 의존성 배열에 data 추가


  return (
    <>
      <div className="w-[340px] h-[240px]" ref={chartRef}></div>
      {/* 챗봇 밑에 떠서 주석처리 해뒀엉~ */}
      {/* <div className="absolute bottom-[0px] right-[0px] mb-2 mr-2 text-[#124946] text-xs font-normal leading-normal cursor-pointer">
        자세히 보기
      </div> */}
    </>
  );
};

export default MainSmoothedLineChart;
