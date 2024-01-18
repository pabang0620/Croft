import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import PickPeriodDate from '../utils/DatePicker/PickPeriodDate';
import PeriodCalendar from '../utils/DatePicker/PeriodCalendar';
import { CheckPriod } from '../utils/Data/CalendarData';

const DailyAvg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [specificDate, setSpecificDate] = useState('오늘');
  const [formatStart, setFormatStart] = useState(
    format(new Date(), 'yyyy.MM.dd')
  );
  const [formatEnd, setFormatEnd] = useState(format(new Date(), 'yyyy.MM.dd'));
  useEffect(() => {
    setFormatStart(
      startDate
        ? format(startDate, 'yyyy.MM.dd')
        : format(new Date(), 'yyyy.MM.dd')
    );
    setFormatEnd(
      endDate ? format(endDate, 'yyyy.MM.dd') : format(new Date(), 'yyyy.MM.dd')
    );
    CheckPriod(formatStart, formatEnd);
  }, [startDate, endDate]);

  return (
    <div className="flex flex-col w-full px-[17px] py-[12px] select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">일자별 평균</div>
          <div className="font-normal">
            {format(startDate, 'MM.dd')} ~ {format(endDate, 'MM.dd')}
          </div>
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="flex justify-between pr-[51px]"></div>
      {/* 하단의 날짜 선택 부분 */}
      <div
        className="flex gap-3 text-accent text-sm border-b border-accent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {formatStart === formatEnd ? (
          <>
            <div>오늘</div>
            <div>{formatEnd}</div>
          </>
        ) : (
          <>
            {specificDate ? <div>{specificDate}</div> : <></>}
            <div>{formatStart}</div>
            <div>~</div>
            <div>{formatEnd}</div>
          </>
        )}
      </div>
      {/* 모달 외부 클릭 시 닫히게 설정 */}
      {isOpen ? (
        // 임의로 위치 조절
        <div className="w-screen h-screen fixed top-0 left-0 pt-[7vw] pl-[13vw] flex">
          <div className="z-20 w-fit h-fit">
            <PeriodCalendar
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setSpecificDate={setSpecificDate}
              setIsOpen={setIsOpen}
            />
          </div>
          <div
            className="w-screen h-screen z-10 absolute top-0 left-0"
            onClick={() => setIsOpen(false)}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DailyAvg;
