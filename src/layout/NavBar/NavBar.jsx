import React, { useState } from 'react';
import AIControlModal from './AIControlModal/AIControlModal.jsx';
import NavBarModal7 from './DeviceModal/NavBarModal7.jsx';

const Navbar = ({ title }) => {
  //이미지 URl, 데이터
  const ImgArray = ['NavTemperature', 'NavHumidity', 'NavLight'];
  const ImgData = ['22 ℃', '51%', '629 w/m²'];

  // 모달 표시 상태를 관리하는 state
  const [isModal6Visible, setIsModal6Visible] = useState(false);
  const [isModal7Visible, setIsModal7Visible] = useState(false);

  // AI제어 버튼 클릭 이벤트 핸들러
  const toggleModal6 = () => {
    if (isModal6Visible === false) {
      setIsModal6Visible(true);
    }
    if (isModal6Visible === true) {
      setIsModal6Visible(false);
    }
  };

  const toggleModal7 = () => {
    if (isModal7Visible === false) {
      setIsModal7Visible(true);
    }
    if (isModal7Visible === true) {
      setIsModal7Visible(false);
    }
  };

  return (
    <div className="relative whitespace-nowrap select-none">
      <div className="bg-[#737165] h-[55px] flex items-center justify-between pl-[29px] pr-[18px]">
        <div className="flex-1 flex row text-Secondary items-center space-x-4">
          {/* AI제어 버튼에 클릭 이벤트 핸들러를 바인딩합니다 */}
          <button
            onClick={toggleModal6}
            className="text-lg font-semibold flex gap-[2px]"
          >
            <div>AI제어</div>
            <div className="text-primary-accent">활성</div>
          </button>

          <button onClick={toggleModal7} className="text-lg font-semibold">
            장치상태
          </button>
        </div>
        {/* 왼쪽 영역 */}
        <div className="flex-1 text-center text-2xl font-semibold text-Secondary">
          {title}
        </div>
        {/* 중앙 타이틀 */}
        <div className="flex-1 flex justify-end items-center space-x-4 text-Secondary">
          {/* 오른쪽 영역 */}
          <div className="text-lg font-semibold">경기 이천시</div>
          {ImgArray.map((url, idx) => (
            <div className="text-lg font-semibold flex flex-row" key={idx}>
              <img
                className="mt-1 mr-2"
                src={`${process.env.PUBLIC_URL}/assets/images/Layout/${url}.svg`}
                alt=""
              />
              {ImgData[idx]}
            </div>
          ))}
          <button className="text-lg font-semibold">
            <img
              className="w-5 h-5 mt-1 mr-2"
              src={`${process.env.PUBLIC_URL}/assets/images/Layout/OutIcon.svg`}
              alt=""
            />
          </button>
        </div>
        <div className="top-20 left-10 absolute flex-row flex">
          {isModal6Visible && <AIControlModal />}
          {isModal7Visible && <NavBarModal7 />}
        </div>
        {/* NavBar6 모달을 조건부로 렌더링합니다 */}
      </div>
    </div>
  );
};

export default Navbar;
