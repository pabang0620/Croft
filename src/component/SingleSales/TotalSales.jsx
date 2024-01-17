import React from 'react';
import Bar2Line1Chart from '../Charts/MixCharts/Bar2Line1Chart';

const TotalSales = () => {
  //temp 데이터 타입에 따라 구조 변환 예정
  const data = [
    { title: '총 생산량', cost: '5,829', percent: '+ 1,000 ↑ 24%' },
    { title: '총 판매량', cost: '7,829', percent: '+ 1,000 ↑ 24%' },
  ];

  return (
    <div className="flex flex-col gap-4 py-2.5 px-4 w-[40.625rem] h-[20.9375rem] bg-white rounded-[10px]">
      <div className="text-lg font-bold ">생산/판매량</div>
      <div className="flex">
        <div className="flex flex-col gap-[7px]">
          {data.map((item) => (
            <div
              className="flex flex-col bg-lightest-gray rounded-[10px] w-[12rem] h-[7.5rem] py-2.5 px-4 "
              key={item.title}
            >
              <div className="text-lg font-bold mb-[5px]">{item.title}</div>
              <div className="text-2xl">{item.cost}원</div>
              {/* 나중에 마이너스이면으로 바꾸기 */}
              <div className="text-error">{item.percent}</div>
            </div>
          ))}
        </div>

        <div className="w-[480px] h-[247px rounded-[10px]">
          <Bar2Line1Chart />
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
