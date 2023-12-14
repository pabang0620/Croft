import SideBar from './SideBar/SideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex relative">
      <SideBar />
      <main className="bg-[#E9EBE180]/[0.5] w-screen max-w-full h-screen max-h-full">
        {children}
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
  );
};

export default Layout;
