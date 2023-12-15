// React 모달 컴포넌트
import React from 'react';

const NavBarModal7 = () => {
  return (
    <div className="fixed top-20 left-96">
      <div className="bg-white shadow-md rounded-lg w-[320px] p-4">
        <div className='flex flex-row whitespace-nowrap justify-between'>
            <div className="text-lg font-semibold leading-normal">장치 상태</div>
            <div>활성</div>
        </div>
        <div className='flex flex-row w-[320px]'>
            <div className='w-[69px] h-[69px] shrink-0 rounded-lg bg-[#F1F1F1] m-0.5'>
                온도
            </div>
            <div className='w-[69px] h-[69px] shrink-0 rounded-lg bg-[#F1F1F1] m-0.5'>
                습도
            </div>
            <div className='w-[69px] h-[69px] shrink-0 rounded-lg bg-[#F1F1F1] m-0.5'>
                날씨
            </div>
            <div className='w-[69px] h-[69px] shrink-0 rounded-lg bg-[#F1F1F1] m-0.5'>
                co2
            </div>
        </div>
        <div className='w-[295px] h-[92px] shrink-0 rounded-lg bg-[#F1F1F1] my-5'>
            Vent
        </div>
        <div className='w-[295px] h-[142px] shrink-0 rounded-lg bg-[#F1F1F1] my-0'>
            온도제어
        </div>
        <div className='w-[295px] h-[38px] shrink-0 rounded-lg bg-[#F1F1F1] my-2'>
            Fan
        </div>
        <div className='w-[295px] h-[38px] shrink-0 rounded-lg bg-[#F1F1F1] my-2'>
            Fan
        </div>
        <div className='w-[295px] h-[38px] shrink-0 rounded-lg bg-[#F1F1F1] my-2'>
            Fan
        </div>
        <div className='w-[295px] h-[38px] shrink-0 rounded-lg bg-[#F1F1F1] my-2'>
            Fan
        </div>
        <div className='w-[295px] h-[38px] shrink-0 rounded-lg bg-[#F1F1F1] my-2'>
            Fan
        </div>
        <div className='w-[295px] h-[38px] shrink-0 rounded-lg bg-[#F1F1F1] my-2'>
            Fan
        </div>
        <div className='w-[295px] h-[38px] shrink-0 rounded-lg bg-[#F1F1F1] my-2'>
            Fan
        </div>
      </div>
    </div>
  );
};

export default NavBarModal7;