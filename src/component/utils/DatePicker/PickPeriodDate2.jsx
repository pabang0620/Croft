import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import PeriodCalendar from './PeriodCalendar';
import { CheckPriod } from '../Data/CalendarData';

const PickPeriodDate2 = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  specificDate,
  setSpecificDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div>
      <div
        className="flex w-fit gap-2 text-accent text-xs border-accent cursor-pointer"
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
        <div className="w-screen h-screen fixed top-0 left-0 flex bg-black/[.2]">
          <div className="z-20 w-fit h-fit pt-[45vh] pl-[15vw] ">
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

export default PickPeriodDate2;
