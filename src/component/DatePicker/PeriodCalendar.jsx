import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { getMonth, getYear } from 'date-fns';
import { ko } from 'date-fns/locale';
import { PeriodData } from '../utils/Data/CalendarData';
import 'react-datepicker/dist/react-datepicker.css';
import './period.css';
import DateArrow from '../../layout/NavBar/SubNavBar/DateArrow';

const PeriodCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  //스타일 및 헤더 부분 변경 예정
  return (
    <div className="custom-react-datepicker__wrapper">
      <div className="custom-react-datepicker__period-wrapper">
        <div className="custom-react-datepicker__period-inner-wrapper">
          <ul>
            <li>기간설정</li>
            {PeriodData.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setStartDate(item.startDate);
                  setEndDate(item.endDate);
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <DatePicker
        dateFormat="yyyy.MM.dd" // 날짜 형태
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        // minDate={new Date('2000-01-01')}
        maxDate={new Date()}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={2}
        calendarStartDay={1} // 월요일부터 시작하도록 설정
        className="outline-none text-center w-[96px] pl-[15px] bg-transparent"
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex justify-between items-center h-[28px] w-full">
            {/* 임시로 화살표를 넣어둠 */}
            <button
              type="button"
              onClick={decreaseMonth}
              className="w-[34px] h-[34px] rounded-[50%] p-[5px] disabled:cursor-not-allowed disabled:bg-[#AEAEAE]"
              disabled={prevMonthButtonDisabled}
            >
              <div className="rotate-180">
                <DateArrow able={!prevMonthButtonDisabled} />
              </div>
            </button>
            <div>
              <span className="text-[#B3B3B3] text-[10px]">
                {getYear(date)}.{getMonth(date) + 1}
              </span>
            </div>
            <button
              type="button"
              onClick={increaseMonth}
              className="w-[34px] h-[34px] rounded-[50%] p-[5px] disabled:cursor-not-allowed"
              disabled={nextMonthButtonDisabled}
            >
              <div className="">
                <DateArrow able={!nextMonthButtonDisabled} />
              </div>
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default PeriodCalendar;
