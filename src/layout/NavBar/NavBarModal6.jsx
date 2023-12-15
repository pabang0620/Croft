// React 모달 컴포넌트
import React from 'react';

const NavBarModal6 = () => {
  return (
    <div className="fixed top-20 left-10">
      <div className="bg-white shadow-md rounded-lg w-[320px] p-4">
        <div className='flex flex-row whitespace-nowrap justify-around'>
            <div className="text-lg font-semibold leading-normal">온실 환경 AI 제어</div>
            <div className="text-xs text-[#124946] font-semibold leading-normal">환경 제어 실행중</div>
            {/* <div className="text-xs text-[#AEAEAE] font-semibold leading-normal">환경 제어 실행중</div> */}
            <div>활성</div>
        </div>
        <div className='w-[295px] h-[92px] shrink-0 rounded-lg bg-[#F1F1F1] my-5'>
            온도제어
        </div>
        <div className='w-[295px] h-[92px] shrink-0 rounded-lg bg-[#F1F1F1] my-5'>
            습도제어
        </div>
        <div className='w-[295px] h-[92px] shrink-0 rounded-lg bg-[#F1F1F1] my-5'>
            RTR제어
        </div>
      </div>
    </div>
  );
};

export default NavBarModal6;