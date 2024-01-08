import { memo, useCallback, useState } from "react";
import update from "immutability-helper";
import { Card } from "./Card";
import GreenhouseScore from "../../Chart/GreenhouseScore";
import CroftGuide from "../../Chart/CroftGuide/CroftGuide";

import MainBarChart from "../../Charts/BarCharts/MainBarChart";
import MainBarChartLine from "../../Charts/BarCharts/MainBarChartLine";
import Line2Chart from "../../Charts/LineCharts/Line2Chart";
import Line4Chart from "../../Charts/LineCharts/Line4Chart";
import Line4ChartNone from "../../Charts/LineCharts/Line4ChartNone";
import MainFootLineChart from "../../Charts/LineCharts/MainFootLineChart";
import MainLineChart from "../../Charts/LineCharts/MainLineChart";
import MainSmoothedLineChart from "../../Charts/LineCharts/MainSmoothedLineChart";
import MainSmoothedLineChartAdd from "../../Charts/LineCharts/MainSmoothedLineChartAdd";
import MainBar2LineChart from "../../Charts/MixCharts/MainBarLine2Chart";
import MainLineAreaChart from "../../Charts/MixCharts/MainLineAreaChart";
import MainSliderDiv from "../../Graphs/MainSliderDiv";

const style = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

//드래그 앤 드랍을 위한 임시 파일
export const ComponentWrapper = memo(function ComponentWrapper() {
  const ITEMS = [
    {
      id: 1,
      component: <GreenhouseScore />,
      width: 320,
      height: 220,
    },
    {
      id: 2,
      component: <CroftGuide />,
      width: 650,
      height: "fit-component",
    },
    {
      id: 3,
      component: (
        <div className="w-[320px] h-[220px] bg-white rounded-[10px] relative">
          {/* 들어가는 데이터를 다르게 넣어줘야한다 ~  */}
          <MainBarChart data={""} />
        </div>
      ),
      width: 320,
      height: 220,
    },
    {
      id: 4,
      component: (
        <div className="w-[320px] h-[220px] bg-white rounded-[10px] relative">
          <MainBarChartLine data={""} />
        </div>
      ),
      width: 320,
      height: 220,
    },
    {
      // 데이터 작업 완료
      id: 5,
      component: (
        <>
          {/* queryName을 보내주면 프록시가 localhost로 변하는 오류가 있음  */}
          {/* <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainSliderDiv
              queryName="RTR"
              title="RTR"
              absData1="0"
              absData2="1.2"
              absData3="1.5"
              absData4="3"
              absData5="영양"
              absData6="균형"
              absData7="생식"
              absData8="생식생장, 꽃이 피고 열매가 맺혀요"
            />
          </div> */}
          <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainSliderDiv
              queryName="photo_Period"
              title="Photo Period"
              absData1="0"
              absData2="6"
              absData3="10"
              absData4="16"
              absData5="최저권장"
              absData6="권장"
              absData7="고권장"
              absData8="Photo Period 상태에 따른 메시지가 나옵니다."
            />
          </div>{" "}
          {/* <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainSliderDiv
              queryName="vpd"
              title="VPD"
              absData2="1.2"
              absData3="1.5"
              absData4="3"
              absData5="축적"
              absData6="균형"
              absData7="증산"
              absData8="VPD 상태에 따른 메시지가 나옵니다."
            />
          </div> */}
        </>
      ),
      width: 320,
      height: 220,
    },
    {
      // 데이터 작업 완료
      id: 6,
      component: (
        <>
          <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainSmoothedLineChart
              APIoption="198"
              ChartName="온실 온도"
              unit="℃"
            />
          </div>
          {/* <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainSmoothedLineChart APIoption="199" ChartName="온실 습도" unit="%"/>
          </div>
          <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainSmoothedLineChart APIoption="225" ChartName="온실 CO2" unit="ppm"/>
          </div> */}
        </>
      ),
      width: 320,
      height: 220,
    },
    {
      // 데이터 작업 완료
      id: 7,
      component: (
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainSmoothedLineChartAdd
            APIoption="244"
            ChartName="외부 광량"
            unit="629 w/m²"
          />
        </div>
      ),
      width: 320,
      height: 220,
    },
    {
      id: 8,
      component: (
        <div className="w-[485px] h-[450px] bg-white rounded-[10px]">
          <MainLineAreaChart />
        </div>
      ),
      width: 480,
      height: 450,
    },
    {
      id: 9,
      component: (
        <div className="w-[485px] h-[450px] bg-white rounded-[10px]">
          <MainBar2LineChart />
        </div>
      ),
      width: 480,
      height: 450,
    },
    {
      id: 10,
      component: (
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainLineChart APIoption="220" ChartName="DLI" />
        </div>
      ),
      width: 320,
      height: 220,
    },
    {
      id: 11,
      component: (
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainFootLineChart />
        </div>
      ),
      width: 320,
      height: 220,
    },
    {
      id: 12,
      component: (
        <div className="w-[665px] h-[390px] bg-white rounded-[10px]">
          <Line4Chart />
        </div>
      ),
      width: 665,
      height: 390,
    },
    {
      id: 13,
      component: (
        <div className="w-[665px] h-[390px] bg-white rounded-[10px]">
          <Line4ChartNone />
        </div>
      ),
      width: 665,
      height: 390,
    },
    {
      id: 14,
      component: (
        <div className="w-[665px] h-[390px] bg-white rounded-[10px]">
          <Line2Chart />
        </div>
      ),
      width: 665,
      height: 390,
    },
  ];
  const [cards, setCards] = useState(ITEMS);

  const findCard = useCallback(
    (id) => {
      const card = cards.filter((item) => `${item.id}` === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );

  return (
    <div style={style}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={`${card.id}`}
          text={card.component}
          width={card.width}
          height={card.height}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  );
});
