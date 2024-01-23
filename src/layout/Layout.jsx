import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';
import { SubNavBarTitle } from './NavBar/SubNavBar/SubNavBarTitle';
import { useChartData } from '../component/utils/api/Charts/ChartAPI';

const Layout = () => {
  const currentPath = useLocation().pathname;
  const [container, setContainer] = useState('옥수수 재배 컨테이너');
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/container-list`,
    'container-list'
  );
  useEffect(() => {
    if (data && !isLoading) {
      setContainer(data?.data[0].name);
    }
  }, []);
  return (
    <div className="flex relative w-screen h-full min-h-screen max-w-full ">
      <SideBar currentPath={currentPath} />
      <div className="flex flex-col w-full h-full ">
        <Navbar title={container} />
        <>
          {SubNavBarTitle(currentPath, setContainer, container, setContainer)}
        </>
        <main className="bg-[#E9EBE180]/[0.5] w-full min-h-[95vh] h-full max-h-full overflow-auto">
          <Outlet context={{ container, setContainer, currentPath }} />
          <div className="flex flex-col absolute bottom-[35px] right-[50px]">
            <img
              className="w-[50px] h-[50px]"
              src="/assets/images/Layout/FloatingTodo.svg"
              alt="todo"
            />
            <img
              className="mt-1 w-[50px] h-[50px]"
              src="/assets/images/Layout/FloatingChatbot.svg"
              alt="chatbot"
            ></img>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
