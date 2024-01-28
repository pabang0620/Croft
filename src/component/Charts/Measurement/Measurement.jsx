import WaterLine2Chart from "../LineCharts/WaterLine2Chart";
import LineAreaMeasure from "./LineAreaMeasure";
import TimeMeasure from "./TimeMeasure";

const Measurement = () => {
  return (
    <>
      <div className="m-[2px]">
        <LineAreaMeasure APIoption="206" ChartName="VENT(LEE)" />
      </div>
      <div className="m-[2px]">
        <LineAreaMeasure APIoption="213" ChartName="VENT(WIND)" />
      </div>
      <div className="m-[2px]">
        <LineAreaMeasure APIoption="208" ChartName="SCREEN(UP)" />
      </div>
      <div className="m-[2px]">
        <LineAreaMeasure APIoption="210" ChartName="SCREEN(DOWN)" />
      </div>
      <div className="m-[2px]">
        <TimeMeasure APIoption="233" ChartName="FCU" />
      </div>
      <div className="m-[2px]">
        <TimeMeasure APIoption="234" ChartName="Heating Pipe" />
      </div>
      <div className="m-[2px]">
        <TimeMeasure APIoption="226" ChartName="CO2 Value" />
      </div>
    </>
  );
};

export default Measurement;
