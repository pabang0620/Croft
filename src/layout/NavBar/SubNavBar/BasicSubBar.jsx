import { useState } from 'react';
import GlobalReportCalendar from '../../../component/DatePicker/GlobalReportCalendar';

const BasicSubBar = (title) => {
  return (
    <div className="w-full h-[45px] pl-[29px] pt-[4px] flex items-center cursor-pointer select-none border-b-[1px] border-base400 bg-base200">
      <div className="text-lg font-bold mr-[11px]">{title}</div>
    </div>
  );
};

export default BasicSubBar;
