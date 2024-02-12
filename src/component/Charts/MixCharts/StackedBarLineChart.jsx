import * as echarts from 'echarts';
import React, { useEffect, useRef, useState } from 'react';
import { useChartData } from '../../utils/api/Charts/ChartAPI';

const StackedBarLineChart = ({ years }) => {
  const chartRef = useRef(null);
  //데이터 호출
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/revenue-expense?period=monthly&year=${years}`,
    `revenue-expense-monthly-${years}}`
  );

  // 임의의 더미 데이터 생성 함수
  const generateDummyData = (length, max) => {
    return Array.from({ length }, () => Math.round(Math.random() * max));
  };

  // {
  //   "month": "1",
  //   "revenue": 880, => 매출
  //   "profit": 350, =>순수익
  //   "personnel_expense": 100, => 인건비
  //   "fixed_cost": 250, => 고정비
  //   "resource_bill": 150 =>각종요금
  // },
  const [barData1, setBarData1] = useState([
    800, 1000, 1400, 1600, 1200, 1400, 1700, 1200, 900,
  ]);
  const [barData2, setBarData2] = useState(generateDummyData(9, 500));
  const [barData3, setBarData3] = useState(generateDummyData(9, 500));
  const [barData4, setBarData4] = useState(generateDummyData(9, 500));
  const [lineData, setLineData] = useState(generateDummyData(9, 500));
  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    //데이터값 저장
    if (!isLoading) {
      setBarData1([
        data?.data[0].revenue,
        data?.data[1].revenue,
        data?.data[2].revenue,
        data?.data[3].revenue,
        data?.data[4].revenue,
        data?.data[5].revenue,
        data?.data[6].revenue,
        data?.data[7].revenue,
        data?.data[8].revenue,
        data?.data[9].revenue,
        data?.data[10].revenue,
        data?.data[11].revenue,
      ]);
      setBarData2([
        data?.data[0].personnel_expense,
        data?.data[1].personnel_expense,
        data?.data[2].personnel_expense,
        data?.data[3].personnel_expense,
        data?.data[4].personnel_expense,
        data?.data[5].personnel_expense,
        data?.data[6].personnel_expense,
        data?.data[7].personnel_expense,
        data?.data[8].personnel_expense,
        data?.data[9].personnel_expense,
        data?.data[10].personnel_expense,
        data?.data[11].personnel_expense,
      ]);
      setBarData3([
        data?.data[0].fixed_cost,
        data?.data[1].fixed_cost,
        data?.data[2].fixed_cost,
        data?.data[3].fixed_cost,
        data?.data[4].fixed_cost,
        data?.data[5].fixed_cost,
        data?.data[6].fixed_cost,
        data?.data[7].fixed_cost,
        data?.data[8].fixed_cost,
        data?.data[9].fixed_cost,
        data?.data[10].fixed_cost,
        data?.data[11].fixed_cost,
      ]);
      setBarData4([
        data?.data[0].resource_bill,
        data?.data[1].resource_bill,
        data?.data[2].resource_bill,
        data?.data[3].resource_bill,
        data?.data[4].resource_bill,
        data?.data[5].resource_bill,
        data?.data[6].resource_bill,
        data?.data[7].resource_bill,
        data?.data[8].resource_bill,
        data?.data[9].resource_bill,
        data?.data[10].resource_bill,
        data?.data[11].resource_bill,
      ]);
      setLineData([
        data?.data[0].profit,
        data?.data[1].profit,
        data?.data[2].profit,
        data?.data[3].profit,
        data?.data[4].profit,
        data?.data[5].profit,
        data?.data[6].profit,
        data?.data[7].profit,
        data?.data[8].profit,
        data?.data[9].profit,
        data?.data[10].profit,
        data?.data[11].profit,
      ]);
    }

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: '20%', // 필요에 따라 이 값을 조정
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' },
      },
      legend: {
        data: ['매출액', '인건비', '고정비용', '자원비용', '순이익'],
      },
      xAxis: {
        type: 'category',
        data: [
          `${years}.1`,
          `${years}.2`,
          `${years}.3`,
          `${years}.4`,
          `${years}.5`,
          `${years}.6`,
          `${years}.7`,
          `${years}.8`,
          `${years}.9`,
          `${years}.10`,
          `${years}.11`,
          `${years}.12`,
        ],
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: '10',
        },
        type: 'value',
        min: 0,
        max: 1800,
        interval: 300,
      },
      series: [
        {
          name: '매출액',
          type: 'bar',
          data: barData1,
        },
        {
          name: '인건비',
          type: 'bar',
          stack: 'Total',
          data: barData2,
        },
        {
          name: '고정비용',
          type: 'bar',
          stack: 'Total',
          data: barData3,
        },
        {
          name: '자원비용',
          type: 'bar',
          stack: 'Total',
          data: barData4,
        },
        {
          name: '순이익',
          type: 'line',
          data: lineData,
          // 스타일 설정은 이미지에 맞게 조정
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [isLoading]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
  // return <div ref={chartRef} style={{ width: "980px", height: "680px" }} />;
};

export default StackedBarLineChart;
