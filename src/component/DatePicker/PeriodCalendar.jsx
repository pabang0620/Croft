import DatePicker from 'react-datepicker';
import { getMonth, getYear, format } from 'date-fns';
import { PeriodData, CheckPriod } from '../utils/Data/CalendarData';
import 'react-datepicker/dist/react-datepicker.css';
import './period.css';
import DateArrow from '../../layout/NavBar/SubNavBar/DateArrow';

const PeriodCalendar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setSpecificDate,
  setIsOpen,
}) => {
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setSpecificDate(CheckPriod(start, end));
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
                  setSpecificDate(CheckPriod(item.startDate, item.endDate));
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex justify-between px-[15px]">
          <div className=" w-[155px] h-[25px] px-[15px] text-[10px] text-base600 rounded-[5px] border border-base400 flex items-center">
            <div>
              {format(startDate, 'yyyy.MM.dd')} ~{' '}
              {endDate
                ? format(endDate, 'yyyy.MM.dd')
                : format(new Date(), 'yyyy.MM.dd')}
            </div>
          </div>
          {/* 임의로 닫힘 버튼 넣음 && 닫힘버튼 영역 확장을 위해 div도 추가 */}
          <div
            className="w-7 h-7 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <img
              className="w-[15px] rotate-45"
              src={`${process.env.PUBLIC_URL}/assets/images/DashBoard/GreenPlus.svg`}
              alt=""
            />
          </div>
        </div>
        <DatePicker
          dateFormat="yyyy.MM.dd" // 날짜 형태
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
            monthDate,
            customHeaderCount,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex justify-between items-center h-[28px] w-full">
              <button
                aria-label="Previous Month"
                className={
                  'react-datepicker__navigation react-datepicker__navigation--previous w-[34px] h-[34px] rounded-[50%] p-[5px] disabled:cursor-not-allowed disabled:bg-[#AEAEAE] '
                }
                style={
                  customHeaderCount === 1 ? { visibility: 'hidden' } : null
                }
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <div className="rotate-180">
                  <DateArrow able={!prevMonthButtonDisabled} />
                </div>
              </button>
              <span className="react-datepicker__current-month w-full justify-center">
                {getYear(monthDate)}.{getMonth(monthDate) + 1}
              </span>
              <button
                onClick={increaseMonth}
                aria-label="Next Month"
                style={
                  customHeaderCount === 0 ? { visibility: 'hidden' } : null
                }
                className="react-datepicker__navigation react-datepicker__navigation--next w-[34px] h-[34px] rounded-[50%] p-[5px] disabled:cursor-not-allowed"
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
    </div>
  );
};

export default PeriodCalendar;
