import React from 'react';
import SliderInput from './SliderInput';
import OnButton from '../OnOffButton/OnButton';

const SliderInputCard = ({ Whatfor, click, setClick }) => {
  return (
    <div className="w-[295px] h-[92px] shrink-0 rounded-lg bg-[#F1F1F1] my-5 flex flex-col justify-around items-center">
      <div className="w-[263px] h-[22px] flex justify-between">
        <div className="flex flex-row">
          {/* 이미지 변경 필요 */}
          <img
            className="w-[9px] h-[18px] mt-0.5 mr-2"
            src={`${process.env.PUBLIC_URL}/assets/images/Control/Vector.png`}
            alt=""
          />
          <div className="text-base font-semibold leading-normal">
            {Whatfor}
          </div>
        </div>
        <OnButton fontSize="text-xs" click={click} setClick={setClick} />
      </div>
      <div
        className="w-[263px] h-[22px] bg-white flex justify-center items-center rounded-md"
        style={{ borderRadius: '5px' }}
      >
        <div className="w-[94px]">
          <SliderInput />
        </div>
      </div>
      {Whatfor === 'RTR제어' && (
        <div className="font-semibold text-[10px] leading-normal">
          작물이 균형적으로 성장합니다.
        </div>
      )}
    </div>
  );
};

export default SliderInputCard;
