import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResourceSubBar = () => {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = today.toLocaleDateString();


  return (
    <div className="w-full h-[45px] pl-[29px] pt-[4px] flex items-center cursor-pointer select-none border-b-[1px] border-base400 bg-base200">
      <div className="text-lg font-bold mr-[17px]">자원사용량</div>
      <div className="flex gap-3 text-accent text-sm border-b border-accent">
        <div>오늘</div>
        <div>{formattedDate}</div>
      </div>
    </div>
  );
};

export default ResourceSubBar;
