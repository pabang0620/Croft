const MeasureName = ({ ChartName }) => {
  return (
    <div className="h-[25px] flex items-center justify-end text-right leading-[25px] font-bold bg-white whitespace-nowrap text-xs  border-b-[1px] border-gray-400">
      <span className="w-[196px] pr-[10px]">{ChartName}</span>
    </div>
  );
};

export default MeasureName;
