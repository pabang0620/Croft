import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
// import Line4ChartNone from "../../Charts/LineCharts/Line4ChartNone";
import Line4Chart from '../../Charts/LineCharts/Line4Chart';
import Measurement from '../../Charts/Measurement/Measurement';
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
  }, [data, isLoading]);
  return (
    <div className="flex gap-[3.75rem] mt-6 w-full">
      <div className="flex flex-col flex-grow justify-end w-[40%]">
        {/* 왼쪽 차트 */}
        <div className="flex justify-between w-full">
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
          <div className="w-[80%] h-[390px] ">
            <Line4Chart dataoff="dataoff" />
          </div>
        </div>
        {/* temp 이미지 */}
        <div className="w-[90%]">
          <Measurement />
        </div>
      </div>
      <div className="flex flex-col flex-grow w-[40%] gap-7">
        <div className="flex w-full mr-4 flex-wrap rounded-[10px] px-4 bg-lightest-gray items-center text-xs">
          <div className="h-[2.1875rem] flex items-center mr-9">
            오늘과 유사했던 환경에서 종합 평가가 좋았던 장비운용 이력을
            확인해보세요.
          </div>
          {/* temp 추후 코드 수정 예정 219, 224, 227,249*/}
          <div className="flex gap-7 h-[1.8rem] items-center">
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
        </div>

        {/* 우측 날짜 부분 밑의 차트 */}
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
          <div className="w-full h-[390px] ">
            <Line4Chart />
          </div>
        </div>
        {/* temp 이미지 */}
        <div className="w-[90%]">
          <Measurement />
        </div>
      </div>
    </div>
  );
};

export default GreenHouseTemper;
