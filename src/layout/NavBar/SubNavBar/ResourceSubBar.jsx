import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import PeriodCalendar from '../../../component/DatePicker/PeriodCalendar';
import { CheckPriod } from '../../../component/utils/Data/CalendarData';

const ResourceSubBar = (props) => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    specificDate,
    setSpecificDate,
  } = props;
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
    <div className="w-full h-[45px] pl-[29px] pt-[4px] flex items-center cursor-pointer select-none border-b-[1px] border-base400 bg-base200">
      <div className="text-lg font-bold mr-[17px]">자원사용량</div>
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

export default ResourceSubBar;
