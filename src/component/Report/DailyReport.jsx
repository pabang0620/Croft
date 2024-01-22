import React from 'react';
import ReportLayout from './ReportLayout';

const DailyReport = ({ container, date }) => {
  return (
    <div className="flex flex-col gap-[25px] font-Pretendard">
      {/* 1페이지 */}
      <div className="w-[1200px] h-[1697px] relative bg-white rounded-[10px]">
        <div className="absolute top-[53px] left-[74px] flex flex-col">
          <div className="text-4xl font-bold">CROFT.AI</div>
          <div className="text-lg font-bold">Smart Farm Comprehensive AI</div>
        </div>
        <div className="absolute flex flex-col items-center w-full top-[308px]">
          <div className="text-[66px] font-bold">{container}</div>
          <div className="text-[66px] font-bold">일일 종합보고서</div>
          <div className="mt-[29px] text-4xl font-bold">{date}</div>
        </div>
        <div className="absolute w-full flex justify-center bottom-[42px] left-0 text-lg">
          1 / 10
        </div>
      </div>
      {/* 2페이지 */}
      <div>
        <ReportLayout
          container={container}
          date={date}
          currentPage={2}
          totalPage={10}
        />
      </div>
      <div></div>
    </div>
  );
};

export default DailyReport;
