import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const PieChart = () => {
  const pieChartRef = useRef(null);

  // Data for the pie chart and table
  const data = [
    { name: "인건비", value: 5000000 },
    { name: "전기료", value: 4000000 },
    { name: "가스요금", value: 3000000 },
    { name: "수도요금", value: 2000000 },
    { name: "고정비", value: 1000000 },
  ];

  // Calculate total for percentage calculations
  const total = data.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    const chartInstance = echarts.init(pieChartRef.current);

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: "20%", // 필요에 따라 이 값을 조정
      },
      title: {
        text: "비용",
        top: "5%",
        left: "2%",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "비용 분류",
          type: "pie",
          radius: "50%",
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return (
    <div className="flex">
      {/* Pie Chart */}
      <div ref={pieChartRef} style={{ width: "400px", height: "350px" }}></div>
      {/* 테이블  */}
      <div className="w-[282px] h-[216px] mt-10">
        <table className="min-w-full text-sm divide-y divide-x divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border"
              >
                항목
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border"
              >
                비용
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border"
              >
                비중
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item, index) => (
              <tr key={index} className="divide-x divide-gray-200">
                <td className="px-4 py-2 whitespace-nowrap border">
                  {item.name}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border">
                  {item.value.toLocaleString()}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border">
                  {((item.value / total) * 100).toFixed(0)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PieChart;
