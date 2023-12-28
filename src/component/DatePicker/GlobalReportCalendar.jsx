import DatePicker from 'react-datepicker';
import {
  getMonth,
  getYear,
  subDays,
  addDays,
} from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import DateArrow from '../../layout/NavBar/SubNavBar/DateArrow';
import { CalendarIcon } from '../../layout/NavBar/SubNavBar/SubNavIcons';
import './datepicker.css';

const GlobalReportCalendar = ({ selectedDate, setSelectedDate }) => {
  const today = new Date();
  return (
    <div className="flex gap-[14px] items-center text-accent font-normal text-xs w-fit h-full">
      <button
        className="rotate-180 h-full"
        onClick={() => setSelectedDate(subDays(selectedDate, 1))}
        disabled={subDays(selectedDate, 1) > today}
      >
        <DateArrow able={!(subDays(selectedDate, 1) > today)} />
      </button>
      <div className="relative cursor-pointer mx-1">
        <div className="absolute left-1">{CalendarIcon()}</div>
        <DatePicker
          dateFormat="yyyy.MM.dd" // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          // minDate={new Date('2000-01-01')}
          maxDate={today}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          calendarStartDay={1} // 월요일부터 시작하도록 설정
          className="outline-none text-center w-[96px] pl-[15px] bg-transparent"
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          renderCustomHeader={({
            date,
            changeYear,
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
      <button
        className="h-full"
        onClick={() => setSelectedDate(addDays(selectedDate, 1))}
        disabled={addDays(selectedDate, 1) > today}
      >
        <DateArrow able={!(addDays(selectedDate, 1) > today)} />
      </button>
    </div>
  );
};

export default GlobalReportCalendar;
