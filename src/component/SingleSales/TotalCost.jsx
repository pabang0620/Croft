import React from 'react';
import StackedBarLineChart from '../Charts/MixCharts/StackedBarLineChart';

const TotalCost = () => {
  //temp 데이터 타입에 따라 구조 변환 예정
  const data = [
    { title: '총 매출액', cost: '21,358,210', percent: '+ 1,358,210 ↑ 24%' },
    { title: '순수익', cost: '6,358,210', percent: '+ 1,358,210 ↑ 24%' },
    { title: '비용', cost: '15,000,000', percent: '- 1,358,210 ↓  15%' },
  ];

  return (
    <div className="flex flex-col gap-6 py-6 px-7 w-[61.25rem] h-[42.5rem] bg-white rounded-[10px]">
      <div className="flex gap-[55px]">
        {data.map((item) => (
          <div className="flex flex-col gap-[6px]" key={item.title}>
            <div className="text-lg font-bold mb-[5px]">{item.title}</div>
            <div className="text-2xl">{item.cost}원</div>
            {/* 나중에 마이너스이면으로 바꾸기 */}
            <div
              className={`${
                item.title === '비용' ? 'text-accent' : 'text-error'
              }`}
            >
              {item.percent}
            </div>
          </div>
        ))}
      </div>
      {/* bar2갠데 하나가 3색인거  */}
      <div className="w-[822px] h-[523px] bg-white rounded-[10px]">
        <StackedBarLineChart />
      </div>
    </div>
  );
};

export default TotalCost;
