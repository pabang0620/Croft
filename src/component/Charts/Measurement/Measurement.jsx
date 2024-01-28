import LineAreaMeasure from "./LineAreaMeasure";
import TimeMeasure from "./TimeMeasure";

const Measurement = () => {
  return (
    <>
      <div className="w-[560px] h-[25px] m-[6px]">
        <LineAreaMeasure APIoption="206" ChartName="VENT(LEE)" />
      </div>
      <div className="w-[560px] h-[25px] m-[6px]">
        <LineAreaMeasure APIoption="213" ChartName="VENT(WIND)" />
      </div>
      <div className="w-[560px] h-[25px] m-[6px]">
        <LineAreaMeasure APIoption="208" ChartName="SCREEN(UP)" />
      </div>
      <div className="w-[560px] h-[25px] m-[6px]">
        <LineAreaMeasure APIoption="210" ChartName="SCREEN(DOWN)" />
      </div>
      <div className="w-[560px] h-[25px] m-[6px]">
        <TimeMeasure APIoption="233" ChartName="FCU" />
      </div>
      <div className="w-[560px] h-[25px] m-[6px]">
        <TimeMeasure APIoption="234" ChartName="Heating Pipe" />
      </div>
      <div className="w-[560px] h-[25px] m-[6px]">
        <TimeMeasure APIoption="226" ChartName="CO2 Value" />
      </div>
    </>
  );
};

export default Measurement;
