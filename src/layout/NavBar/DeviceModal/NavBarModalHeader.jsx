import React from 'react';
import { ChartDashIcons, IconsColor } from '../../../component/utils/Icons';

const NavBarModalHeader = ({ detail, imgName, warning, disconnect, size }) => {
  return (
    <div className="w-full shrink-0 rounded-lg bg-[#F1F1F1] m-0.5 flex justify-center items-center flex-col">
      {ChartDashIcons(imgName, IconsColor(warning, false), size)}
      <div
        className={`mt-2 font-semibold leading-normal ${
          size === 24 ? 'text-xs' : 'text-m'
        } ${IconsColor(warning, false) === '#FF0000' ? 'text-[#FF0000]' : ''}`}
      >
        {detail}
      </div>
    </div>
  );
};
export default NavBarModalHeader;
