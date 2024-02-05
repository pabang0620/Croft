import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import { CalendarIcon } from "../../../layout/NavBar/SubNavBar/SubNavIcons";
import DateArrow from "../../../layout/NavBar/SubNavBar/DateArrow";
import "react-datepicker/dist/react-datepicker.css";

const PickSingleDate = ({
  selectedDate,
  setSelectedDate,
  showDatePicker2, // 이 prop은 선택적입니다.
  setShowDatePicker2, // 이 prop도 선택적입니다.
}) => {
  const today = new Date();
  const [internalOpen, setInternalOpen] = useState(false); // DatePicker 내부적으로 사용할 열림 상태

  // 외부 상태 관리가 가능할 때 사용할 함수
  const toggleCalendar = () => {
    if (setShowDatePicker2) {
      setShowDatePicker2(!showDatePicker2);
    } else {
      setInternalOpen(!internalOpen); // 외부에서 제어하지 않을 때 내부 상태 사용
    }
  };

  // 외부에서 open 상태를 제어할 수 있으면 그 상태를 사용하고, 그렇지 않으면 내부 상태를 사용합니다.
  const isOpen = setShowDatePicker2 ? showDatePicker2 : internalOpen;
  return (
    <div className="flex items-center text-accent font-normal text-xs w-fit h-fit cursor-pointer">
      <div className="relative cursor-pointer mx-1" onClick={toggleCalendar}>
        <div className="absolute left-2">{CalendarIcon()}</div>
        <DatePicker
          dateFormat="yyyy.MM.dd"
          shouldCloseOnSelect
          maxDate={today}
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            if (setShowDatePicker2) {
              setShowDatePicker2(false);
            } else {
              setInternalOpen(false); // 날짜 선택 시 내부 상태를 사용하여 DatePicker 닫기
            }
          }}
          open={isOpen}
          calendarStartDay={1}
          className="outline-none text-center w-[96px] pl-[15px] bg-transparent"
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex justify-between items-center h-[28px] w-full">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <DateArrow able={!prevMonthButtonDisabled} />
              </button>
              <span>
                {getYear(date)}.{getMonth(date) + 1}
              </span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <DateArrow able={!nextMonthButtonDisabled} />
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PickSingleDate;
