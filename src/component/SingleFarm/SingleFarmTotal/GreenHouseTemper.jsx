import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
// import Line4ChartNone from '../../Charts/LineCharts/Line4ChartNone';
import Line4Chart from '../../Charts/LineCharts/Line4Chart';
import { useChartData } from '../../utils/api/Charts/ChartAPI';

const GreenHouseTemper = () => {
  const today = format(new Date(), 'yyyy.MM.dd');
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/similar/weather?is_combined=true&data_type=219`,
    'similar-temper'
  );
  const [selectedDate, setSelectedDate] = useState(today);
  useEffect(() => {
    setSelectedDate(data?.data[0].pastday);
  }, [data]);
  return (
    <div className="flex gap-[3.75rem] mt-6">
      <div className="flex flex-col flex-grow justify-end">
        {/* 왼쪽 차트 */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-5 ml-[29px] w-[10%]">
            <div className="flex flex-col">
              <div className="text-sm font-bold">{today.slice(0, 4)}.</div>
              <div className="font-bold text-lg">
                {today.slice(5, 7)}.{today.slice(8, 10)}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm">온도</div>
              <div className="font-bold text-lg">22℃</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm">평균온도</div>
              <div className="font-bold text-lg">22℃</div>
            </div>
          </div>
          <div className="w-[665px] h-[390px] ">
            <Line4Chart />
          </div>
        </div>
        {/* temp 이미지 */}
        <img
          className="w-[90%] h-[150px] ml-2"
          src={`${process.env.PUBLIC_URL}/assets/images/Temp/TempRunHistory.svg`}
          alt=""
        />
      </div>
      <div className="flex flex-col flex-grow gap-7">
        <div className="flex w-full h-[2.1875rem] rounded-[10px] px-4 bg-lightest-gray items-center text-xs gap-7">
          <div>
            오늘과 유사했던 환경에서 종합 평가가 좋았던 장비운용 이력을
            확인해보세요.
          </div>
          {/* temp 추후 코드 수정 예정 219, 224, 227,249*/}
          <div
            className="underline text-accent"
            onClick={() => setSelectedDate(data?.data[0].pastday)}
          >
            {data?.data[0].pastday}
          </div>
          <div
            className="underline text-accent"
            onClick={() => setSelectedDate(data?.data[1].pastday)}
          >
            {data?.data[1].pastday}
          </div>
          <div
            className="underline text-accent"
            onClick={() => setSelectedDate(data?.data[2].pastday)}
          >
            {data?.data[2].pastday}
          </div>
        </div>
        {/* 이 부분 데이터 넣는 방식으로 변경 예정 */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-5 w-[10%]">
            <div className="flex flex-col">
              <div className="text-sm font-bold">
                {selectedDate ? selectedDate?.slice(0, 4) : today.slice(0, 4)}.
              </div>
              <div className="font-bold text-lg">
                {selectedDate ? selectedDate?.slice(5, 7) : today.slice(5, 7)}.
                {selectedDate ? selectedDate?.slice(8, 10) : today.slice(8, 10)}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm min-w-14">평균온도</div>
              <div className="font-bold text-lg">22℃</div>
            </div>
          </div>
          <div className="w-[665px] h-[390px] ">
            <Line4Chart />
          </div>
        </div>
        {/* temp 이미지 */}
        <img
          className="w-[90%] h-[150px] ml-2"
          src={`${process.env.PUBLIC_URL}/assets/images/Temp/TempRunHistoryPast.svg`}
          alt=""
        />
      </div>
    </div>
  );
};

export default GreenHouseTemper;
