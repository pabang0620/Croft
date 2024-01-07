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
      id: 5,
      component: (
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainSliderDiv />
        </div>
      ),
      width: 320,
      height: 220,
    },
    {
      id: 6,
      component: (
        <>
          <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainSmoothedLineChart APIoption="198" ChartName="온실 온도" unit="℃" />
          </div>
          <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainSmoothedLineChart APIoption="199" ChartName="온실 습도" unit="%"/>
          </div>
          <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainSmoothedLineChart APIoption="225" ChartName="온실 CO2" unit="ppm"/>
          </div>
        </>
      ),
      width: 320,
      height: 220,
    },
    {
      id: 7,
      component: (
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainSmoothedLineChartAdd  APIoption="244" ChartName="외부 광량" unit="629 w/m²"/>
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
          <MainLineChart />
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
