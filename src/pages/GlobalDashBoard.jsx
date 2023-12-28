import ContainerWrapper from '../component/GlobahBoard/ContainerWrapper';

import { useState } from 'react';

const GlobalDashBoard = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex flex-col py-[15px] px-[20px] gap-[12px]">
      <div className="flex gap-[7px] align-center h-fit">
        <img
          className="w-[19px]"
          src={`${process.env.PUBLIC_URL}/assets/images/DashBoard/GreenPlus.svg`}
          alt=""
        />
        <div className="text-primary font-bold text-base">스마트팜 추가</div>
      </div>
      <ContainerWrapper />
    </div>
  );
};

export default GlobalDashBoard;
