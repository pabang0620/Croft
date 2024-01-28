import React from "react";
import Line4ChartNone from "../../Charts/LineCharts/Line4ChartNone";
import Line4Chart from "../../Charts/LineCharts/Line4Chart";
import Measurement from "../../Charts/Measurement/Measurement";

const GreenHouseTemper = () => {
  return (
    <div className="flex gap-[3.75rem] mt-6">
      <div className="flex flex-col flex-grow justify-end">
        {/* 왼쪽 차트 */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-5 ml-[29px] w-[10%]">
            <div className="flex flex-col">
              <div className="text-sm font-bold">2022.</div>
              <div className="font-bold text-lg">10.11</div>
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
            <Line4Chart dataoff="dataoff" />
          </div>
        </div>
        {/* temp 이미지 */}
        <div className="">
          <Measurement />
        </div>
      </div>
      <div className="flex flex-col flex-grow gap-7">
        <div className="flex w-full h-[2.1875rem] rounded-[10px] px-4 bg-lightest-gray items-center text-xs gap-7">
          <div>
            오늘과 유사했던 환경에서 종합 평가가 좋았던 장비운용 이력을
            확인해보세요.
          </div>
          {/* temp 추후 코드 수정 예정*/}
          <div className="underline text-accent">2022.10.11</div>
          <div className="underline text-accent">2023.3.17</div>
          <div className="underline text-accent">2023.4.5</div>
        </div>
        {/* 이 부분 데이터 넣는 방식으로 변경 예정 */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-5 w-[10%]">
            <div className="flex flex-col">
              <div className="text-sm font-bold">2022.</div>
              <div className="font-bold text-lg">10.11</div>
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
        <div className="">
          <Measurement />
        </div>
      </div>
    </div>
  );
};

export default GreenHouseTemper;
