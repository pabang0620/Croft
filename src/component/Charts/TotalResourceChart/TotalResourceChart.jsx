import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMonth, getISOWeek, startOfWeek } from "date-fns";
import PickPeriodDate3 from "../../utils/DatePicker/PickPeriodDate3";
import {
  PercentUpDown,
  ResourceIcon,
  TempResource,
} from "../../utils/Data/SingleResourceData";

const TotalResourceChart = ({ showDatePicker1, setShowDatePicker1 }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(startOfWeek(new Date()));
  const [endDate, setEndDate] = useState(new Date());
  const [specificDate, setSpecificDate] = useState("이번주");

  return (
    <div className="bg-white w-full h-full rounded-[10px] flex flex-col p-4 relative">
      <div className="text-base font-semibold flex items-center gap-2">
        <div>자원 사용량 총합</div>
        <div>
          {getMonth(endDate) + 1}월 {getISOWeek(endDate)}주차
        </div>
      </div>
      <div className="w-full h-[8.9rem] flex m-auto gap-[.7rem] mt-2">
        {TempResource.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-grow items-center justify-center flex-col bg-[#F1F1F1] mb-3 rounded-[10px]"
          >
            <div className="mt-4">{ResourceIcon(39)[idx]}</div>
            <div className="text-base font-bold mb-[.5625rem] mt-[.875rem]">
              {item.temp}
            </div>
            <div
              className={`font-semibold ${
                item.percentUp ? "text-error" : "text-accent"
              }`}
            >
              {PercentUpDown(item.percentUp)} {item.percentNum} %
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-[93%] justify-between text-accent text-xs absolute bottom-[9px] right-7 cursor-pointer">
        <PickPeriodDate3
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          specificDate={specificDate}
          setSpecificDate={setSpecificDate}
          isOpen={showDatePicker1}
          setIsOpen={setShowDatePicker1}
        />
        <div onClick={() => navigate("/single-resource")}>전체 사용량 보기</div>
      </div>
    </div>
  );
};

export default TotalResourceChart;
