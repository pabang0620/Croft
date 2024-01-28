import { useState } from "react";
import EditItems from "../../../component/GlobahBoard/EditItems";

const DashSubBar = ({ setEditMode, openModal, setOpenModal }) => {
  return (
    <div className="w-full h-[45px] pl-[29px] pt-[4px] flex items-center cursor-pointer select-none border-b-[1px] border-base400 bg-base200 box-border">
      <div className="text-lg font-bold">대시보드</div>
      {/* 대시보드 컴포넌트 편집 레이어 표시 */}
      <img
        className="w-[19px] ml-[6px] mr-[12px]"
        src={`${process.env.PUBLIC_URL}/assets/images/DashBoard/GreenPlus.svg`}
        alt=""
        onClick={() => setOpenModal(!openModal)}
      />
      {/* 컴포넌트 크기 및 위치편집 모드 활성화 버튼 */}
      <img
        className="w-[24px]"
        src={`${process.env.PUBLIC_URL}/assets/images/DashBoard/ComponentSettingIcon.svg`}
        alt=""
        onClick={() => setEditMode((prev) => !prev)}
      />
      <div
        className={`fixed top-0 left-0 z-10 ${openModal ? "block" : "hidden"}`}
      >
        <EditItems setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default DashSubBar;
