import * as echarts from 'echarts';
import React, { useEffect, useRef, useState } from 'react';
import { useChartData } from '../../utils/api/Charts/ChartAPI';

const StackedBarChartyx = ({ years, period }) => {
  const chartRef = useRef(null);

  //데이터 호출
  const { data, isLoading } = useChartData(
    `${
      process.env.REACT_APP_BASE_API_KEY
    }/v1/farms/distribution/expense?period=yearly&year=${years - period}`,
    `distribution-expense-yearly-${years}-${period}}`
  );
  // 임의의 더미 데이터 생성 함수
  const generateDummyData = (length, max) => {
    return Array.from({ length }, () => Math.round(Math.random() * max));
  };

  // 더미 데이터 생성
  const [barData1, setBarData1] = useState(generateDummyData(5, 500));
  const [barData2, setBarData2] = useState(generateDummyData(5, 500));
  const [barData3, setBarData3] = useState(generateDummyData(5, 500));
  const [barData4, setBarData4] = useState(generateDummyData(5, 500));
  const [barData5, setBarData5] = useState(generateDummyData(5, 500));

  useEffect(() => {
    let filteredYears = [];
    let filteredBar1 = [];
    let filteredBar2 = [];
    let filteredBar3 = [];
    let filteredBar4 = [];
    let filteredBar5 = [];

    const chartInstance = echarts.init(chartRef.current);

    //데이터값 저장.
    for (let i = 0; i < period; i++) {
      setBarData1([...barData1, i]);
      filteredYears.push(data?.data[i].year);
      filteredBar1.push(data?.data[i].personnel_expense);
      filteredBar2.push(data?.data[i].electricity_bill);
      filteredBar3.push(data?.data[i].gas_bill);
      filteredBar4.push(data?.data[i].water_bill);
      filteredBar5.push(data?.data[i].fixed_cost);
    }

    if (!isLoading && filteredYears.length > 0) {
      setBarData1(filteredBar1);
      setBarData2(filteredBar2);
      setBarData3(filteredBar3);
      setBarData4(filteredBar4);
      setBarData5(filteredBar5);
    }

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: '20%', // 필요에 따라 이 값을 조정
      },
      title: {
        text: '비용',
        top: '5%',
        left: '2%',
      },
      legend: {
        data: ['인건비', '고정비용', '전기요금', '가스요금', '수도요금'],
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 1800,
        interval: 300,
      },
      yAxis: {
        type: 'category',
        data: filteredYears,
        axisLabel: {
          fontSize: 10,
          margin: '10',
        },
      },
      series: [
        {
          name: '인건비',
          type: 'bar',
          stack: 'Total',
          data: barData1,
        },
        {
          name: '고정비용',
          type: 'bar',
          stack: 'Total',
          data: barData2,
        },
        {
          name: '전기요금',
          type: 'bar',
          stack: 'Total',
          data: barData3,
        },
        {
          name: '가스요금',
          type: 'bar',
          stack: 'Total',
          data: barData4,
        },
        {
          name: '수도요금',
          type: 'bar',
          stack: 'Total',
          data: barData5,
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [years, period, isLoading, data]);

  return <div ref={chartRef} style={{ width: '650px', height: '335px' }} />;
};

export default StackedBarChartyx;
