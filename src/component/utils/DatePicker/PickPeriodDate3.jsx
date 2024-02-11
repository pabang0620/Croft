import { useState, useEffect } from "react";
import { format } from "date-fns";
import PeriodCalendar from "./PeriodCalendar";
import { CheckPriod } from "../Data/CalendarData";

const PickPeriodDate3 = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  specificDate,
  setSpecificDate,
  isOpen,
  setIsOpen,
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [formatStart, setFormatStart] = useState(
    format(new Date(), "yyyy.MM.dd")
  );
  const [formatEnd, setFormatEnd] = useState(format(new Date(), "yyyy.MM.dd"));
  useEffect(() => {
    setFormatStart(
      startDate
        ? format(startDate, "yyyy.MM.dd")
        : format(new Date(), "yyyy.MM.dd")
    );
    setFormatEnd(
      endDate ? format(endDate, "yyyy.MM.dd") : format(new Date(), "yyyy.MM.dd")
    );
    CheckPriod(startDate, endDate);
  }, [startDate, endDate]);

  return (
    <div>
      <div
        className="flex w-fit gap-3 text-accent text-sm border-b border-accent"
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
        <div className={`absolute top-[-18.75rem] left-[-1rem] flex z-30`}>
          <div className="w-fit h-fit ">
            <PeriodCalendar
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setSpecificDate={setSpecificDate}
              setIsOpen={setIsOpen}
            />
          </div>
          {/* <div
            className="w-screen h-screen z-10 absolute top-0 left-0"
            onClick={() => setIsOpen(false)}
          /> */}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PickPeriodDate3;
