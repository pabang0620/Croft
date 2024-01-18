import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SideBarIcon from './SideBarIcon';
import GreenHouseSide from './GreenHouseSide';

const SideBar = ({ currentPath }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [closeSide, setCloseSide] = useState(true); //기본적으로 접힌 상태이며, 페이지 이동 후에는 다시 접어야함
  const [clickedIcon, setClickedIcon] = useState('total'); //추후 클릭으로 색이 변경되는 것이 아닌 url에 따른 색 변경으로 코드 수정
  //const 배열 혹은 변수는 util로 분리해도 될 것 같음
  const closeLogo = '/assets/images/Layout/OnlyLogo.png';
  const openLogo = '/assets/images/Layout/CroftAndLogo.png';
  //단일 온실이 아닌 기본 세팅의 경우
  const originIcon = ['report'];
  const originMenu = ['종합 보고서'];
  //단일온실을 선택한 경우 하단의 내용으로 변경
  const [isSingleFarm, setIsSingleFarm] = useState(false);
  const iconName = ['home', 'greenhouse', 'sales', 'resource', 'report'];
  const menuName = [
    '대시보드',
    '온실환경',
    '매출 보고서',
    '자원사용량',
    '종합 보고서',
  ];

  const handleNav = (iconName) => {
    if (iconName === 'home') {
      setClickedIcon('home');
      navigate('/dash');
    } else if (iconName === 'greenhouse') {
      setClickedIcon('greenhouse');
      navigate('/dash/environment/total');
    } else if (iconName === 'sales') {
      setClickedIcon('sales');
      navigate('/single-sales');
    } else if (iconName === 'resource') {
      setClickedIcon('resource');
      navigate('/single-resource');
    } else if (iconName === 'report') {
      setClickedIcon('report');
      navigate('/single-report');
    }
  };

  useEffect(() => {
    setCloseSide(true);
    if (currentPath.includes('/dash') || currentPath.includes('/single')) {
      setIsSingleFarm(true);
    } else setIsSingleFarm(false);
    if (currentPath === '/global-report') setClickedIcon('report');
    if (currentPath === '/') setClickedIcon('total');
    if (currentPath === '/dash') setClickedIcon('home');
    if (currentPath === '/dash/environment/total') setClickedIcon('greenhouse');
    if (currentPath === '/single-sales') setClickedIcon('sales');
    if (currentPath === '/single-resource') setClickedIcon('resource');
    if (currentPath === '/single-report') setClickedIcon('report');
  }, [location]);

  return (
    <div className="flex flex-row select-none">
      <div
        className={`flex flex-col bg-base600 text-white ease-in-out duration-300 h-screen cursor-pointer ${
          closeSide ? 'w-[60px]' : 'w-[220px]'
        }`}
      >
        <div className="relative w-full">
          {/* 열림 닫힘 */}
          <div
            className="absolute right-[-13px] top-[68px] w-fit h-fit bg-transparent"
            onClick={() => setCloseSide(!closeSide)}
          >
            {SideBarIcon(closeSide ? 'open' : 'close')}
          </div>
          <div
            className="w-full font-bold p-[14px] text-center text-[24px]"
            onClick={() => {
              navigate('/');
            }}
          >
            <img
              className="h-[32px]"
              src={`${closeSide ? closeLogo : openLogo}`}
              alt="Logo"
            />
          </div>
        </div>
        <div className="pl-2 m-2.5 mb-[21px]">
          <div
            onClick={() => {
              setClickedIcon('total');
              navigate('/');
            }}
            className="flex items-center gap-[17px]"
          >
            <div>{SideBarIcon('total', clickedIcon)}</div>
            {closeSide ? (
              <></>
            ) : (
              <div
                className={`whitespace-nowrap ${
                  clickedIcon === 'total' ? 'text-white' : 'text-base500'
                }`}
              >
                통합 대시보드
              </div>
            )}
          </div>
        </div>

        <div
          className={`flex flex-col gap-[17px] pl-2 pt-[19px] pb-[20px] ml-2.5 mr-2.5 border-y border-[#767676] `}
        >
          {isSingleFarm ? (
            <>
              {iconName.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setClickedIcon(item);
                    handleNav(item);
                  }}
                  className="flex items-center gap-[17px] "
                >
                  <div>{SideBarIcon(item, clickedIcon)}</div>
                  {closeSide ? (
                    <></>
                  ) : (
                    <div
                      className={`whitespace-nowrap ${
                        clickedIcon === item ? 'text-white' : 'text-base500'
                      }`}
                    >
                      {menuName[idx]}
                    </div>
                  )}
                </div>
              ))}
            </>
          ) : (
            <>
              {originIcon.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setClickedIcon(item);
                    navigate('/global-report');
                  }}
                  className="flex items-center gap-[17px] "
                >
                  <div>{SideBarIcon(item, clickedIcon)}</div>
                  {closeSide ? (
                    <></>
                  ) : (
                    <div
                      key={idx}
                      className={`whitespace-nowrap ${
                        clickedIcon === item ? 'text-white' : 'text-base500'
                      }`}
                    >
                      {originMenu}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
        {/* 환경설정의 route 부분은 현재 기획에 포함되어 있지 않아 생략 */}
        <div
          onClick={() => setClickedIcon('settings')}
          className="flex items-center gap-[17px] pl-[20px] pt-[21px]"
        >
          <div>{SideBarIcon('settings', clickedIcon)}</div>
          {closeSide ? (
            <></>
          ) : (
            <div
              className={`whitespace-nowrap ${
                clickedIcon === 'settings' ? 'text-white' : 'text-base500'
              }`}
            >
              환경설정
            </div>
          )}
        </div>
      </div>

      <GreenHouseSide
        isOpen={clickedIcon === 'greenhouse'}
        currentUrl={currentPath}
      />
    </div>
  );
};

export default SideBar;
