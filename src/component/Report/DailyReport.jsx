import React from 'react';
import ReportLayout from './ReportLayout';
import GreenhouseScore from '../Charts/GreenhouseScore';
import { TotalReportGreenhouseText as Desc } from '../utils/Data/TempData';

const DailyReport = ({ container, date }) => {
  return (
    <div className="flex flex-col gap-[25px] font-Pretendard">
      {/* 1페이지 */}
      <div className="w-[1200px] h-[1697px] relative bg-white rounded-[10px]">
        <div className="absolute top-[53px] left-[74px] flex flex-col">
          <div className="text-4xl font-bold">CROFT.AI</div>
          <div className="text-lg font-bold">Smart Farm Comprehensive AI</div>
        </div>
        <div className="absolute flex flex-col items-center w-full top-[308px]">
          <div className="text-[66px] font-bold">{container}</div>
          <div className="text-[66px] font-bold">일일 종합보고서</div>
          <div className="mt-[29px] text-4xl font-bold">{date}</div>
        </div>
        <div className="absolute w-full flex justify-center bottom-[42px] left-0 text-lg">
          1 / 10
        </div>
      </div>
      {/* 2페이지 */}
      <div>
        <ReportLayout
          container={container}
          date={date}
          currentPage={2}
          totalPage={10}
        >
          <div className="mt-[88px] mb-[83px] text-3xl font-bold flex w-full justify-center">
            목차
          </div>
          <div className="flex flex-col">
            <div className="w-full flex justify-between mb-[26px]">
              <div className="text-2xl font-bold">1. 일일 종합 보고</div>
              <div className="text-xl text-base400">3P</div>
            </div>
            <div className="w-full flex flex-col justify-between mb-[58px]">
              <div className="text-2xl font-bold">2. 온실 환경 보고</div>
              <div className="flex flex-col gap-[25px] ml-[27px] mt-[24px]">
                <div className="w-full flex justify-between">
                  <div className="text-2xl font-bold">1) 온도</div>
                  <div className="text-xl text-base400">4P</div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="text-2xl font-bold">1) 습도</div>
                  <div className="text-xl text-base400">5P</div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="text-2xl font-bold">1) 광량</div>
                  <div className="text-xl text-base400">6P</div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="text-2xl font-bold">1) CO2</div>
                  <div className="text-xl text-base400">7P</div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="text-2xl font-bold">1) 급수 상태</div>
                  <div className="text-xl text-base400">8P</div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-between mb-[47px]">
              <div className="text-2xl font-bold">3. 자원사용량 보고</div>
              <div className="flex flex-col gap-[25px] ml-[27px] mt-[24px]">
                <div className="w-full flex justify-between">
                  <div className="text-2xl font-bold">
                    1) 장치 상태 및 자원 사용량
                  </div>
                  <div className="text-xl text-base400">9P</div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="text-2xl font-bold">4. 생장 보고</div>
              <div className="flex flex-col gap-[25px] ml-[27px] mt-[24px]">
                <div className="w-full flex justify-between">
                  <div className="text-2xl font-bold">
                    1) 장치 상태 및 자원 사용량
                  </div>
                  <div className="text-xl text-base400">10P</div>
                </div>
              </div>
            </div>
          </div>
        </ReportLayout>
      </div>
      {/* 3페이지 */}
      <div>
        <ReportLayout
          container={container}
          date={date}
          currentPage={3}
          totalPage={10}
        >
          <div className="flex flex-col">
            <div className="h-[307px] w-full border-y border-solid border-b-base400 border-t-black px-[35px] mb-[52px] flex items-center justify-between">
              <GreenhouseScore />
              <div className="text-base font-normal w-[645px] text-wrap whitespace-pre-wrap">
                {Desc}
              </div>
            </div>
            <div className="flex flex-col gap-12 ml-[99px]">
              <div className="flex gap-8">
                <div className="w-[142px] h-[152px]">차트</div>
                <div className="flex flex-col gap-[18px]">
                  <div className="text-[22px] font-bold">
                    온실환경 : PERFECT
                  </div>
                  <div className="text-lg">
                    온도, 습도, 광량, CO2 농도가 이상적인 형태로 관리되었습니다.
                    <br /> 아침 Mornind Deep 으로 온실온도가 낮아졌을때 FCU 와
                    Heating Pipe 를 가동하여
                    <br /> 급격한 온도변화를 막았습니다.
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-[142px] h-[152px]">차트</div>
                <div className="flex flex-col gap-[18px]">
                  <div className="text-[22px] font-bold font-bold">
                    자원사용 : Weak
                  </div>
                  <div className="text-lg">
                    온실 환경 유지를 위해 자원이 조금 많이 사용되었습니다다.
                    <br />
                    온도 유지를 위해 가스와 전기 사용량이 전일 대비 24%
                    증가하였습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[81px] ml-[99px] mt-[131px]">
              <div className="flex flex-col gap-6">
                <div className="text-[22px] font-bold">작물 정보</div>
                <div className="flex flex-col">
                  <div className="flex gap-11">
                    <div className="w-[163px] h-[61px] bg-base200 flex items-center justify-center text-lg font-bold">
                      재배작물
                    </div>
                    <div className="flex items-center">양배추</div>
                  </div>
                  <div className="flex gap-11">
                    <div className="w-[163px] h-[61px] bg-base200 flex items-center justify-center text-lg font-bold">
                      성장단계
                    </div>
                    <div className="flex items-center">
                      성성장기 2단계, 작물에 잎이 나고 열매를 맺을 준비를
                      합니다.
                    </div>
                  </div>
                  <div className="flex gap-11">
                    <div className="w-[163px] h-[61px] bg-base200 flex items-center justify-center text-lg font-bold">
                      재배시기
                    </div>
                    <div className="flex items-center">
                      현재 성장곡선 상 30일 후 재배가 예상됩니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-[22px] font-bold">주의 사항</div>
                <div className="flex flex-col">
                  <div className="flex gap-11">
                    <div className="w-[163px] h-[61px] bg-base200 flex items-center justify-center text-lg font-bold">
                      위험요인
                    </div>
                    <div className="flex items-center">
                      성장기에 유행하는 마름병에 유의하세요. OO 가 포함된
                      영양제를 양액에 포함해주세요.
                    </div>
                  </div>
                  <div className="flex gap-11">
                    <div className="w-[163px] h-[61px] bg-base200 flex items-center justify-center text-lg font-bold">
                      계절요인
                    </div>
                    <div className="flex items-center max-w-[650px] whitespace-pre-wrap">
                      급격한 온도변화에 취약합니다. 겨울철 외부온도가 많이
                      떨어져, 온실온도와 외부온도간 차이가 10도씨 이상 날때는
                      VENT 개방에 유의해주세요.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReportLayout>
      </div>
      {/* 4페이지 */}
      <div>
        <ReportLayout
          container={container}
          date={date}
          currentPage={3}
          totalPage={10}
        ></ReportLayout>
      </div>
      {/* 5페이지 */}
      <div></div>
      {/* 6페이지 */}
      <div></div>
      {/* 7페이지 */}
      <div></div>
      {/* 8페이지 */}
      <div></div>
      {/* 9페이지 */}
      <div></div>
      {/* 10페이지 */}
      <div></div>
    </div>
  );
};

export default DailyReport;
