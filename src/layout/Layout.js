import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Navbar from './NavBar/NavBar';

const Layout = () => {
  return (
    <div className="flex relative w-screen max-w-full h-screen max-h-full">
      <SideBar />
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <main className="bg-[#E9EBE180]/[0.5] w-full h-full">
          <Outlet />
          <div className="flex flex-col absolute bottom-[35px] right-[50px]">
            <img
              className="w-[50px] h-[50px]"
              src="/assets/images/Layout/FloatingTodo.svg"
              alt="todo"
            />
            <img
              className="mt-1 w-[50px] h-[50px]"
              src="/assets/images/Layout/FloatingChatbot.svg"
              alt="todo"
            ></img>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
