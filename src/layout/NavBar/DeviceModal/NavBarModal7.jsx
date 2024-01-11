// React 모달 컴포넌트
import React from 'react';
import { NavBarModalVent } from './NavBarModalVent';
import { NavBarModalScreen } from './NavBarModalScreen';
import { NavBarModal7ETC } from './NavBarModal7ETC';
import TotalReportChart from '../../../component/Charts/TotalReportChart/TotalReportChart';

const NavBarModal7 = () => {
  return (
    <div className="mr-8 ml-8 z-10">
      <div className="bg-white shadow-md rounded-lg w-[320px] px-[15px] py-[10px] flex flex-col">
        <div className="w-full h-[107px] pb-[8px] border-b border-solid border-base300">
          <TotalReportChart title="장치상태" size={24} />
        </div>
        <NavBarModalVent />
        <NavBarModalScreen />
        <NavBarModal7ETC />
      </div>
    </div>
  );
};

export default NavBarModal7;
